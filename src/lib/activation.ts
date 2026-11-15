import { supabase } from '@/integrations/supabase/client';

export const ACTIVATION_FEE_UGX = 5576.92;
export const ACTIVATION_FEE_USD = 1.35;
export const PAYMENT_RECIPIENT = { merchantCode: '129999', name: "WYCLIFFE LANG'AT KIPMUTAI", role: 'Verification Officer', contact: '+256 751 725298' };
export const NETWORKS = { mtn: 'MTN Mobile Money', airtel: 'Airtel Money' } as const;
export type Network = keyof typeof NETWORKS;
export type ActivationPayment = { id: string; user_id: string; network: string; transaction_id: string; payer_phone: string; amount_ugx: number; status: 'pending' | 'approved' | 'rejected'; review_note: string | null; created_at: string; reviewed_at: string | null };

export function paymentFields(network: string, transactionId: string, phone: string) {
  if (network !== 'mtn' && network !== 'airtel') throw new Error('Choose MTN or Airtel.');
  const transaction_id = transactionId.trim().toUpperCase();
  if (!/^[A-Z0-9.\-]{4,40}$/.test(transaction_id)) throw new Error('Enter the transaction ID from your payment SMS.');
  const digits = phone.replace(/[^\d+]/g, '');
  if (!/^(\+?256|0)7\d{8}$/.test(digits)) throw new Error('Enter the Ugandan number you paid from, e.g. 0771234567.');
  return { network, transaction_id, payer_phone: digits };
}

async function uid() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Please sign in again.');
  return user.id;
}

export const activationOptions = {
  queryKey: ['activation'],
  queryFn: async () => {
    const id = await uid();
    const [{ data: payments, error }, { data: verifier }] = await Promise.all([
      supabase.from('activation_payments').select('*').eq('user_id', id).order('created_at', { ascending: false }),
      supabase.rpc('has_role', { _user_id: id, _role: 'verifier' }),
    ]);
    if (error) throw error;
    const list = (payments ?? []) as ActivationPayment[];
    return { payments: list, activated: list.some(p => p.status === 'approved'), pending: list.some(p => p.status === 'pending'), verifier: !!verifier };
  },
};

export async function submitPayment(network: string, transactionId: string, phone: string) {
  const fields = paymentFields(network, transactionId, phone);
  const user_id = await uid();
  const { error } = await supabase.from('activation_payments').insert({ ...fields, user_id });
  if (error) throw new Error(error.code === '23505' ? 'This transaction ID has already been submitted.' : 'Could not submit. Please try again.');
}

export const reviewQueueOptions = {
  queryKey: ['review-queue'],
  queryFn: async () => {
    const [{ data, error }, { data: payers }] = await Promise.all([
      supabase.from('activation_payments').select('*').order('created_at', { ascending: false }).limit(300),
      supabase.rpc('list_payment_payers'),
    ]);
    if (error) throw error;
    const names = new Map((payers ?? []).map((p: { id: string; display_name: string }) => [p.id, p.display_name]));
    return ((data ?? []) as ActivationPayment[]).map(p => ({ ...p, name: names.get(p.user_id) || 'Member' }));
  },
};

export async function reviewPayment(id: string, status: 'approved' | 'rejected', note: string) {
  const reviewer = await uid();
  const { error } = await supabase.from('activation_payments').update({ status, review_note: note.trim() || null, reviewed_by: reviewer, reviewed_at: new Date().toISOString() }).eq('id', id);
  if (error) throw new Error('Could not save the review.');
}
