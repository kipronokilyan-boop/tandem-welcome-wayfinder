import { describe, expect, it, vi } from 'vitest';
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { cleanMessage, summarizeConversations } from '@/lib/chat';

describe('chat messages', () => {
  it('rejects blank messages', () => { expect(() => cleanMessage('   ')).toThrow(); });
  it('rejects messages over 2000 characters', () => { expect(() => cleanMessage('a'.repeat(2001))).toThrow(); });
  it('trims accepted messages', () => { expect(cleanMessage('  hi  ')).toBe('hi'); });
  it('groups messages by partner, newest conversation first', () => {
    const r = summarizeConversations([
      { id: '1', sender_id: 'me', recipient_id: 'a', body: 'old', created_at: '2026-01-01' },
      { id: '2', sender_id: 'a', recipient_id: 'me', body: 'reply', created_at: '2026-01-03' },
      { id: '3', sender_id: 'me', recipient_id: 'b', body: 'b msg', created_at: '2026-01-02' },
    ], 'me');
    expect(r.map(c => c.partnerId)).toEqual(['a', 'b']);
    expect(r[0]!.last.body).toBe('reply');
  });
});
