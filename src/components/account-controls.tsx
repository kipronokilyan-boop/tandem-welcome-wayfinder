import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { lovable } from '@/integrations/lovable';
import { supabase } from '@/integrations/supabase/client';
import '@lovable.dev/cloud-auth-js/styles.css';

export function SocialAccounts() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function login(provider: 'google' | 'lovable') {
    setError(''); setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: `${window.location.origin}/login` });
      if (result.error) throw result.error;
      if (result.redirected) return;
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) throw new Error('Sign-in was not completed. Please try again.');
      await navigate({ to: '/account', replace: true });
    } catch (error) { setError(error instanceof Error ? error.message : 'Unable to sign in. Try again.'); }
    finally { setBusy(false); }
  }
  return <div className="account-social">
    <div className="account-divider">or</div>
    <Button variant="ghost" className="account-google" disabled={busy} onClick={() => login('google')}>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>Continue with Google
    </Button>
    <Button variant="ghost" className="lovable-auth-button" disabled={busy} onClick={() => login('lovable')}>Continue with Lovable</Button>
    {error && <p className="account-error" role="alert">{error}</p>}
  </div>;
}

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