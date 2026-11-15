import { createFileRoute, Link, useNavigate, useHydrated } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useMember } from '@/lib/member-auth';
import accountCSS from '@/styles/accounts.css?raw';

export const Route = createFileRoute('/login')({
  head: () => ({ meta: [
    { title: 'Welcome back — Amoriva' }, { name: 'description', content: 'Log in to your Amoriva chatting account.' },
    { property: 'og:title', content: 'Welcome back — Amoriva' }, { property: 'og:description', content: 'Log in to your Amoriva chatting account.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }), component: Login,
});
function Login() {
  const navigate = useNavigate(); const hydrated = useHydrated(); const { user, ready } = useMember();
  const [error, setError] = useState(''); const [message, setMessage] = useState(''); const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false); const [forgot, setForgot] = useState(false);
  useEffect(() => { if (ready && user) void navigate({ to: '/account', replace: true }); }, [ready, user, navigate]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(''); setMessage(''); setBusy(true);
    const form = new FormData(event.currentTarget); const email = String(form.get('email') || '').trim().toLowerCase();
    try {
      if (forgot) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
        if (error) throw error; setMessage('If an account exists for this email, a password reset link is on its way.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password: String(form.get('password') || '') });
        if (error) throw error;
        await navigate({ to: '/account', replace: true });
      }
    } catch (error) { setError(error instanceof Error ? error.message : 'Unable to sign in. Try again.'); }
    finally { setBusy(false); }
  }
  return <><style>{accountCSS}</style><main className="account-page"><header className="account-header"><Link to="/" className="account-brand"><img src="/site-assets/20d745d21dcfa2ed.png" alt=""/>Amoriva</Link><Link to="/" className="account-back">← Back to Home</Link></header><div className="account-container"><section className="account-card"><div className="account-card-header"><h1 className="account-title">{forgot ? 'Reset your password' : 'Welcome Back'}</h1><p className="account-subtitle">{forgot ? 'Receive a secure password reset link by email' : 'Log in to access your chatting account'}</p></div><form onSubmit={submit} className="account-form">
    <div className="account-field"><label htmlFor="login-email">Email Address</label><div className="account-input-wrap"><span className="account-input-icon">✉️</span><input id="login-email" name="email" type="email" placeholder="johndoe@gmail.com" autoComplete="email" required/></div></div>
    {!forgot && <div className="account-field"><div className="account-label-row"><label htmlFor="login-password">Password</label><Button variant="ghost" type="button" className="account-forgot" onClick={() => {setForgot(true); setError('');}}>Forgot Password?</Button></div><div className="account-input-wrap"><span className="account-input-icon">🔒</span><input id="login-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required/><Button variant="ghost" type="button" className="account-password-toggle" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(value => !value)}>{showPassword ? '👁️' : '🙈'}</Button></div></div>}
    {error && <p role="alert" className="account-error">{error}</p>}{message && <p role="status" className="account-success">{message}</p>}
    <Button variant="ghost" className="account-submit" type="submit" disabled={busy || !hydrated}>{busy ? 'Please wait…' : forgot ? 'Send reset link' : 'Log In to Amoriva →'}</Button>
  </form>{forgot && <div className="account-footer"><Button variant="ghost" className="account-forgot" onClick={() => {setForgot(false);setError('');setMessage('');}}>← Back to login</Button></div>}<div className="account-footer">Don't have an account? <Link to="/signup">Sign Up Free</Link></div></section></div></main></>;
}
