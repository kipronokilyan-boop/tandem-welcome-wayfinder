import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

export function SignOutButton({ className }: { className?: string }) {
  const queryClient = useQueryClient(); const navigate = useNavigate();
  const [busy, setBusy] = useState(false); const [error, setError] = useState('');
  async function signOut() {
    setBusy(true); setError('');
    try {
      await queryClient.cancelQueries(); queryClient.clear();
      const { error } = await supabase.auth.signOut(); if (error) throw error;
      await navigate({ to: '/auth', replace: true });
    } catch (error) { setError(error instanceof Error ? error.message : 'Could not sign out.'); }
    finally { setBusy(false); }
  }
  return <><Button variant="ghost" className={className || 'account-submit'} disabled={busy} onClick={signOut}>{busy ? 'Signing out…' : 'Sign out'}</Button>{error && <p role="alert">{error}</p>}</>;
}