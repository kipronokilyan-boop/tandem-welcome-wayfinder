import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { ActivationTransferSteps } from '@/components/activation-transfer-steps';
import { activationOptions, submitPayment, ACTIVATION_FEE_UGX, ACTIVATION_FEE_USD, ACTIVATION_TRANSFER_AMOUNT_UGX, NETWORKS, PAYMENT_RECIPIENT, type Network } from '@/lib/activation';
import chatCSS from '@/styles/chat.css?raw';

export const Route = createFileRoute('/_authenticated/activate')({
  loader: ({ context }) => context.queryClient.ensureQueryData(activationOptions),
  head: () => ({ meta: [
    { title: 'Activate your account — Amoriva Uganda' }, { name: 'description', content: 'Pay the one-time activation fee by MTN or Airtel Mobile Money to start chatting with members.' },
    { property: 'og:title', content: 'Activate your account — Amoriva Uganda' }, { property: 'og:description', content: 'Pay the one-time activation fee by MTN or Airtel Mobile Money.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }),
  component: Activate,
});

const fee = ACTIVATION_FEE_UGX.toLocaleString('en-UG', { minimumFractionDigits: 2 });
const transferAmount = ACTIVATION_TRANSFER_AMOUNT_UGX.toLocaleString('en-UG');
const label = { pending: '⏳ Waiting for review', approved: '✅ Approved', rejected: '❌ Not approved' };

function Activate() {
  const { data } = useSuspenseQuery(activationOptions);
  const queryClient = useQueryClient();
  const [network, setNetwork] = useState<Network>('mtn');
  const [txn, setTxn] = useState(''); const [phone, setPhone] = useState('');
  const [error, setError] = useState(''); const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault(); setError(''); setBusy(true);
    try { await submitPayment(network, txn, phone); setTxn(''); await queryClient.invalidateQueries({ queryKey: ['activation'] }); }
    catch (err) { setError(err instanceof Error ? err.message : 'Could not submit.'); } finally { setBusy(false); }
  }
  return <><style>{chatCSS}</style><main className="chat-page">
    <header className="chat-header"><Link to="/dashboard">← Community</Link><h1>🔒 Activation</h1>{data.verifier ? <Link to="/verify">Review</Link> : <span />}</header>
    <div className="chat-body">
      {data.activated ? <section className="chat-section"><h2>✅ Your account is active</h2><p className="chat-empty">You can now chat with members.</p><p><Link className="chat-real-link" to="/chat">Go to chats →</Link></p></section> : <>
      <section className="chat-section"><h2>What you get</h2><p className="chat-empty">A one-time fee of <strong>UGX {fee}</strong> (about ${ACTIVATION_FEE_USD}) unlocks sending messages to real Amoriva members. It does not include earnings or any guaranteed partner.</p></section>
      <section className="chat-section"><h2>1. Choose your network</h2>
        <div className="pay-networks">{(Object.keys(NETWORKS) as Network[]).map(n => <Button key={n} type="button" variant="ghost" className={`pay-network ${network === n ? 'active' : ''}`} aria-pressed={network === n} onClick={() => setNetwork(n)}>{NETWORKS[n]}</Button>)}</div>
      </section>
      <section className="chat-section"><h2>2. Send to Kenya with {NETWORKS[network]}</h2>
        <dl className="pay-details"><dt>Kenyan number</dt><dd>{PAYMENT_RECIPIENT.phone}</dd><dt>Recipient</dt><dd>{PAYMENT_RECIPIENT.name} ({PAYMENT_RECIPIENT.role})</dd><dt>Activation fee</dt><dd>UGX {fee}</dd><dt>Send</dt><dd>UGX {transferAmount} (rounded)</dd></dl>
        <h3 className="transfer-heading">Steps to follow</h3>
        <ActivationTransferSteps network={network} />
      </section>
      <section className="chat-section"><h2>3. Submit your payment details</h2>
        {data.pending ? <p className="chat-empty">Your payment is waiting for review. You'll be able to chat once it's approved.</p> :
        <form className="pay-form" onSubmit={submit}>
          <label>Transaction ID<input value={txn} onChange={e => setTxn(e.target.value)} placeholder="From your payment SMS" required /></label>
          <label>Number you paid from<input value={phone} onChange={e => setPhone(e.target.value)} placeholder="0771234567" inputMode="tel" required /></label>
          {error && <p className="chat-error" role="alert">{error}</p>}
          <Button type="submit" className="chat-send" disabled={busy}>{busy ? 'Submitting…' : 'Submit for review'}</Button>
        </form>}
      </section></>}
      {data.payments.length > 0 && <section className="chat-section"><h2>Your submissions</h2><ul className="chat-list">{data.payments.map(p => <li key={p.id} className="chat-row"><span className="chat-row-text"><strong>{label[p.status]}</strong><span>{p.network.toUpperCase()} · {p.transaction_id} · {new Date(p.created_at).toLocaleDateString()}</span>{p.review_note && <span>Note: {p.review_note}</span>}</span></li>)}</ul></section>}
      <p className="chat-empty">Questions or refund requests: call or WhatsApp <strong>{PAYMENT_RECIPIENT.contact}</strong> ({PAYMENT_RECIPIENT.name}, {PAYMENT_RECIPIENT.role}), or message him from your chats.</p>
    </div>
  </main></>;
}
