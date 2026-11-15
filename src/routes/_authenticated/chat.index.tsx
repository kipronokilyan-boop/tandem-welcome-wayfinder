import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { chatMembersOptions, inboxOptions } from '@/lib/chat';
import chatCSS from '@/styles/chat.css?raw';

export const Route = createFileRoute('/_authenticated/chat/')({
  loader: ({ context }) => Promise.all([context.queryClient.ensureQueryData(chatMembersOptions), context.queryClient.ensureQueryData(inboxOptions)]),
  head: () => ({ meta: [
    { title: 'Chats — Amoriva Uganda' }, { name: 'description', content: 'Your conversations with other Amoriva members.' },
    { property: 'og:title', content: 'Chats — Amoriva Uganda' }, { property: 'og:description', content: 'Your conversations with other Amoriva members.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }),
  component: ChatHome,
});

function ChatHome() {
  const { data: members } = useSuspenseQuery(chatMembersOptions);
  const { data: inbox } = useSuspenseQuery(inboxOptions);
  const queryClient = useQueryClient();
  useEffect(() => {
    const channel = supabase.channel(`inbox-${Math.random().toString(36).slice(2)}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, () => queryClient.invalidateQueries({ queryKey: ['chat-inbox'] }))
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [queryClient]);
  const names = new Map(members.map(m => [m.id, m]));
  return <><style>{chatCSS}</style><main className="chat-page">
    <header className="chat-header"><Link to="/dashboard">← Community</Link><h1>Chats</h1><Link to="/account">Profile</Link></header>
    <div className="chat-body">
      <section className="chat-section"><h2>Your conversations</h2>
        {inbox.conversations.length === 0 ? <p className="chat-empty">No conversations yet. Pick a member below to say hello.</p> :
        <ul className="chat-list">{inbox.conversations.map(({ partnerId, last }) => { const m = names.get(partnerId); const name = m?.display_name || 'Member'; return <li key={partnerId}><Link className="chat-row" to="/chat/$memberId" params={{ memberId: partnerId }}><span className="chat-avatar">{name.charAt(0).toUpperCase()}</span><span className="chat-row-text"><strong>{name}</strong><span>{last.sender_id === inbox.myId ? 'You: ' : ''}{last.body}</span></span></Link></li>; })}</ul>}
      </section>
      <section className="chat-section"><h2>Members</h2>
        {members.length === 0 ? <p className="chat-empty">No other members have finished signing up yet. Check back soon.</p> :
        <ul className="chat-list">{members.map(m => <li key={m.id}><Link className="chat-row" to="/chat/$memberId" params={{ memberId: m.id }}><span className="chat-avatar">{(m.display_name || 'M').charAt(0).toUpperCase()}</span><span className="chat-row-text"><strong>{m.display_name || 'Member'}</strong><span>{m.country || 'Member'}</span></span></Link></li>)}</ul>}
      </section>
    </div>
  </main></>;
}
