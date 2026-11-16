import { supabase } from '@/integrations/supabase/client';

export const ACTIVATION_FEE_KES = 300;
export const ACTIVATION_FEE_UGX = 9517;
export const ACTIVATION_TRANSFER_AMOUNT_UGX = 9517;
export const NETWORKS = { mtn: 'MTN Mobile Money', airtel: 'Airtel Money' } as const;
export type Network = keyof typeof NETWORKS;
export const PAYMENT_RECIPIENT = {
  phoneByNetwork: { mtn: '254711289718', airtel: '254 751 725298' },
  name: "WYCLIFFE LANG'AT KIPMUTAI",
  role: 'Verification Officer',
  contact: '254751725298',
};
export const INTERNATIONAL_TRANSFER_STEPS: Record<Network, { beforeRecipient: string[]; afterRecipient: string[] }> = {
  mtn: {
    beforeRecipient: [
      'Dial *165# on your MTN Uganda line.',
      'Select 1 – Send Money.',
      'Select 2 – East Africa.',
      'Select Kenya from the list of countries displayed.',
      'Select 1 – Safaricom M-Pesa.',
    ],
    afterRecipient: [
      `Enter the amount in Ugandan Shillings (UGX): UGX ${ACTIVATION_TRANSFER_AMOUNT_UGX.toLocaleString('en-UG')} (approximately KES ${ACTIVATION_FEE_KES}).`,
      "Confirm the recipient's details, including the phone number and amount.",
      'Enter your MTN Mobile Money (MoMo) PIN to authorize the transaction.',
    ],
  },
  airtel: {
    beforeRecipient: [
      'Dial *185# on your registered Airtel Uganda line.',
      'Choose Send Money, then the international or send-abroad option, and select Kenya.',
    ],
    afterRecipient: [
      'Choose the mobile-money recipient option if prompted.',
      `Enter UGX ${ACTIVATION_TRANSFER_AMOUNT_UGX.toLocaleString('en-UG')} (approximately KES ${ACTIVATION_FEE_KES} at the reference rate). Check the recipient, converted amount and fees before confirming with your Airtel Money PIN.`,
      'Save the confirmation SMS and transaction ID for the activation form.',
    ],
  },
};
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
