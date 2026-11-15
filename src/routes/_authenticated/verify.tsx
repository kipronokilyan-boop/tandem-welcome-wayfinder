import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery, useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { activationOptions, reviewPayment, reviewQueueOptions } from '@/lib/activation';
import chatCSS from '@/styles/chat.css?raw';

export const Route = createFileRoute('/_authenticated/verify')({
  loader: ({ context }) => context.queryClient.ensureQueryData(activationOptions),
  head: () => ({ meta: [
    { title: 'Payment review — Amoriva Uganda' }, { name: 'description', content: 'Verification officer review of activation payments.' },
    { property: 'og:title', content: 'Payment review — Amoriva Uganda' }, { property: 'og:description', content: 'Verification officer review of activation payments.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }),
  component: Verify,
});

function Verify() {
  const { data: me } = useSuspenseQuery(activationOptions);
  const queue = useQuery({ ...reviewQueueOptions, enabled: me.verifier });
  const queryClient = useQueryClient();
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  async function act(id: string, status: 'approved' | 'rejected') {
    setError('');
    try { await reviewPayment(id, status, notes[id] || ''); await queryClient.invalidateQueries({ queryKey: ['review-queue'] }); }
    catch (e) { setError(e instanceof Error ? e.message : 'Could not save.'); }
  }
  return <><style>{chatCSS}</style><main className="chat-page">
    <header className="chat-header"><Link to="/dashboard">← Community</Link><h1>Payment review</h1><span /></header>
    <div className="chat-body">
      {!me.verifier ? <section className="chat-section"><p className="chat-empty">Only the Verification Officer can open this page.</p></section> : <>
      {error && <p className="chat-error" role="alert">{error}</p>}
      {(['pending', 'approved', 'rejected'] as const).map(status => { const rows = (queue.data ?? []).filter(p => p.status === status); return <section key={status} className="chat-section"><h2>{status === 'pending' ? 'Waiting for review' : status === 'approved' ? 'Approved' : 'Not approved'} ({rows.length})</h2>
        {queue.isLoading ? <p className="chat-empty">Loading…</p> : rows.length === 0 ? <p className="chat-empty">None.</p> : <ul className="chat-list">{rows.map(p => <li key={p.id} className="chat-row review-row"><span className="chat-row-text"><strong>{p.name}</strong><span>{p.network.toUpperCase()} · Txn {p.transaction_id} · From {p.payer_phone}</span><span>UGX {Number(p.amount_ugx).toLocaleString()} · {new Date(p.created_at).toLocaleString()}</span>{p.review_note && <span>Note: {p.review_note}</span>}</span>
          {status === 'pending' && <div className="review-actions"><input aria-label="Note to member" placeholder="Note (optional)" value={notes[p.id] || ''} onChange={e => setNotes({ ...notes, [p.id]: e.target.value })} /><Button className="chat-send" onClick={() => act(p.id, 'approved')}>Approve</Button><Button variant="ghost" onClick={() => act(p.id, 'rejected')}>Reject</Button></div>}</li>)}</ul>}
      </section>; })}</>}
    </div>
  </main></>;
}
