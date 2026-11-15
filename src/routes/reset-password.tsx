import { createFileRoute, Link, useHydrated } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import accountCSS from '@/styles/accounts.css?raw';
export const Route = createFileRoute('/reset-password')({
  head: () => ({ meta: [
    { title: 'Reset your password — Amoriva' }, { name: 'description', content: 'Set a new password for your Amoriva account.' },
    { property: 'og:title', content: 'Reset your password — Amoriva' }, { property: 'og:description', content: 'Set a new password for your Amoriva account.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }), component: ResetPassword,
});
function ResetPassword() {
  const hydrated = useHydrated(); const [valid, setValid] = useState(false); const [busy, setBusy] = useState(false); const [error, setError] = useState(''); const [done, setDone] = useState(false);
  useEffect(() => {setValid(new URLSearchParams(window.location.hash.slice(1)).get('type') === 'recovery' || window.sessionStorage.getItem('amoriva-password-recovery') === 'true');}, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('');
    const form = new FormData(event.currentTarget); const password = String(form.get('password') || '');
    if (password !== form.get('confirm')) {setError('Passwords do not match.');setBusy(false);return;}
    try {
      const { error } = await supabase.auth.updateUser({ password }); if (error) throw error;
      window.sessionStorage.removeItem('amoriva-password-recovery'); setDone(true);
    } catch (error) {setError(error instanceof Error ? error.message : 'Could not reset your password.');}
    finally {setBusy(false);}
  }
  return <><style>{accountCSS}</style><main className="account-page"><header className="account-header"><Link className="account-brand" to="/"><img src="/site-assets/20d745d21dcfa2ed.png" alt=""/>Amoriva</Link></header><div className="account-container"><section className="account-card"><div className="account-card-header"><h1 className="account-title">Set a new password</h1></div>{done ? <><p role="status" className="account-success">Your password has been updated.</p><Link to="/account">Continue to your account →</Link></> : !hydrated ? <p>Loading…</p> : !valid ? <><p className="account-error">Open the password reset link from your email.</p><Link to="/login">Back to login</Link></> : <form className="account-form" onSubmit={submit}><div className="account-field"><label htmlFor="new-password">New password</label><div className="account-input-wrap"><input id="new-password" type="password" name="password" autoComplete="new-password" minLength={6} required/></div></div><div className="account-field"><label htmlFor="confirm-password">Confirm password</label><div className="account-input-wrap"><input id="confirm-password" type="password" name="confirm" autoComplete="new-password" required/></div></div>{error && <p role="alert" className="account-error">{error}</p>}<Button variant="ghost" type="submit" className="account-submit" disabled={busy}>{busy ? 'Updating…' : 'Save new password'}</Button></form>}</section></div></main></>;
}
