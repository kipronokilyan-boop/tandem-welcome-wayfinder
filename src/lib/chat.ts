import { supabase } from '@/integrations/supabase/client';

export type ChatMember = { id: string; display_name: string; country: string | null };
export type ChatMessage = { id: string; sender_id: string; recipient_id: string; body: string; created_at: string };

export const MAX_MESSAGE_LENGTH = 2000;

export function cleanMessage(input: string) {
  const body = input.trim();
  if (!body) throw new Error('Write a message first.');
  if (body.length > MAX_MESSAGE_LENGTH) throw new Error(`Messages can be up to ${MAX_MESSAGE_LENGTH} characters.`);
  return body;
}

/** Latest message per partner, newest conversation first. */
export function summarizeConversations(messages: ChatMessage[], myId: string) {
  const latest = new Map<string, ChatMessage>();
  for (const m of messages) {
    const partner = m.sender_id === myId ? m.recipient_id : m.sender_id;
    const prev = latest.get(partner);
    if (!prev || prev.created_at < m.created_at) latest.set(partner, m);
  }
  return [...latest.entries()].map(([partnerId, last]) => ({ partnerId, last })).sort((a, b) => (a.last.created_at < b.last.created_at ? 1 : -1));
}

async function myId() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Please sign in again.');
  return user.id;
}

export const chatMembersOptions = {
  queryKey: ['chat-members'],
  queryFn: async (): Promise<ChatMember[]> => {
    const { data, error } = await supabase.rpc('list_chat_members');
    if (error) throw error;
    return (data ?? []) as ChatMember[];
  },
};

export const inboxOptions = {
  queryKey: ['chat-inbox'],
  queryFn: async () => {
    const id = await myId();
    const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(500);
    if (error) throw error;
    return { myId: id, conversations: summarizeConversations(data ?? [], id) };
  },
};

export const threadOptions = (partnerId: string) => ({
  queryKey: ['chat-thread', partnerId],
  queryFn: async () => {
    const id = await myId();
    const { data, error } = await supabase.from('messages').select('*')
      .or(`and(sender_id.eq.${id},recipient_id.eq.${partnerId}),and(sender_id.eq.${partnerId},recipient_id.eq.${id})`)
      .order('created_at', { ascending: true }).limit(500);
    if (error) throw error;
    return { myId: id, messages: (data ?? []) as ChatMessage[] };
  },
});

export async function sendMessage(recipientId: string, text: string) {
  const body = cleanMessage(text);
  const sender_id = await myId();
  const { error } = await supabase.from('messages').insert({ sender_id, recipient_id: recipientId, body });
  if (error) throw new Error('Message could not be sent. Please try again.');
}
