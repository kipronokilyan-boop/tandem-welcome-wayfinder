import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { activationOptions } from '@/lib/activation';
import { chatMembersOptions, sendMessage, threadOptions, MAX_MESSAGE_LENGTH } from '@/lib/chat';
import chatCSS from '@/styles/chat.css?raw';

export const Route = createFileRoute('/_authenticated/chat/$memberId')({
  loader: ({ context, params }) => Promise.all([context.queryClient.ensureQueryData(chatMembersOptions), context.queryClient.ensureQueryData(activationOptions), context.queryClient.ensureQueryData(threadOptions(params.memberId))]),
  head: () => ({ meta: [
    { title: 'Conversation — Amoriva Uganda' }, { name: 'description', content: 'Private conversation with an Amoriva member.' },
    { property: 'og:title', content: 'Conversation — Amoriva Uganda' }, { property: 'og:description', content: 'Private conversation with an Amoriva member.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }),
  component: Thread,
});

function Thread() {
  const { memberId } = Route.useParams();
  const { data: members } = useSuspenseQuery(chatMembersOptions);
  const { data } = useSuspenseQuery(threadOptions(memberId));
  const { data: access } = useSuspenseQuery(activationOptions);
  const queryClient = useQueryClient();
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  const partner = members.find(m => m.id === memberId);
  const refresh = () => { queryClient.invalidateQueries({ queryKey: ['chat-thread', memberId] }); queryClient.invalidateQueries({ queryKey: ['chat-inbox'] }); };
  useEffect(() => {
    const channel = supabase.channel(`thread-${Math.random().toString(36).slice(2)}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, refresh)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberId]);
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }); }, [data.messages.length]);
  async function submit(event: FormEvent) {
    event.preventDefault(); setError(''); setSending(true);
    try { await sendMessage(memberId, text); setText(''); refresh(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Message could not be sent.'); }
    finally { setSending(false); }
  }
  const name = partner?.display_name || 'Member';
  return <><style>{chatCSS}</style><main className="chat-page">
    <header className="chat-header"><Link to="/chat">← Chats</Link><h1>{name}{partner?.country ? ` · ${partner.country}` : ''}</h1><span /></header>
    <div className="chat-body">
      <div className="chat-thread" aria-live="polite">
        {data.messages.length === 0 && <p className="chat-empty">Say hello to {name}.</p>}
        {data.messages.map(m => <div key={m.id} className={`chat-bubble ${m.sender_id === data.myId ? 'mine' : ''}`}>{m.body}<time>{new Date(m.created_at).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}</time></div>)}
        <div ref={end} />
      </div>
      {error && <p className="chat-error" role="alert">{error}</p>}
      {!(access.activated || access.verifier) ? <p className="chat-locked">🔒 Activation required to send messages. <Link className="chat-real-link" to="/activate">{access.pending ? 'Payment under review' : 'Pay activation fee →'}</Link></p> : <form className="chat-composer" onSubmit={submit}>
        <textarea aria-label="Message" placeholder="Write a message…" maxLength={MAX_MESSAGE_LENGTH} value={text} onChange={e => setText(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.currentTarget.form?.requestSubmit(); } }} />
        <Button type="submit" className="chat-send" disabled={sending || !text.trim()}>{sending ? 'Sending…' : 'Send'}</Button>
      </form>}
    </div>
  </main></>;
}
