import { createFileRoute, Link, useNavigate, useHydrated } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { countries, defaultCountry, registrationFields, useMember } from '@/lib/member-auth';
import { supabase } from '@/integrations/supabase/client';
import accountCSS from '@/styles/accounts.css?raw';

export const Route = createFileRoute('/signup')({
  head: () => ({ meta: [
    { title: 'Create your free account — Amoriva' }, { name: 'description', content: 'Join Amoriva and create your personal chatting account.' },
    { property: 'og:title', content: 'Create your free account — Amoriva' }, { property: 'og:description', content: 'Join Amoriva and create your personal chatting account.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }), component: Signup,
});
function Signup() {
  const hydrated = useHydrated(); const navigate = useNavigate(); const { user, ready } = useMember();
  const [error, setError] = useState(''); const [message, setMessage] = useState(''); const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false); const [countryName, setCountryName] = useState(defaultCountry?.name || 'Uganda');
  const country = countries.find(item => item.name === countryName) || countries[0];
  useEffect(() => { if (ready && user) void navigate({ to: '/assessment', replace: true }); }, [ready, user, navigate]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(''); setBusy(true);
    try {
      const fields = registrationFields(new FormData(event.currentTarget));
      const { data, error } = await supabase.auth.signUp({ ...fields, options: { ...fields.options, emailRedirectTo: window.location.origin } });
      if (error) throw error;
      if (data.session) await navigate({ to: '/assessment', replace: true });
      else setMessage('Check your email to confirm your account, then come back to log in.');
    } catch (error) { setError(error instanceof Error ? error.message : 'Unable to create your account. Try again.'); }
    finally { setBusy(false); }
  }
  return <><style>{accountCSS}</style><main className="account-page"><header className="account-header"><Link to="/" className="account-brand"><img src="/site-assets/20d745d21dcfa2ed.png" alt=""/>Amoriva</Link><Link to="/" className="account-back">← Back to Home</Link></header><div className="account-container"><section className="account-card account-signup"><div className="account-card-header"><div className="account-badge">🔥 Free Registration</div><h1 className="account-title">Create Your Free Chatting Account</h1><p className="account-subtitle">Connect with international members and share your culture</p></div>
    {message ? <p className="account-success" role="status">{message}</p> : <form onSubmit={submit} className="account-form">
      <div className="account-field"><label htmlFor="signup-country">Country / Location</label><div className="account-input-wrap"><span className="account-input-icon">🌍</span><select id="signup-country" name="country" value={countryName} onChange={event => setCountryName(event.target.value)}>{countries.map(item => <option key={item.name} value={item.name}>{item.flag} {item.name}</option>)}</select></div><small className="account-hint">📍 Registration location: <strong>{country?.name} {country?.flag}</strong></small></div>
      <div className="account-field"><label htmlFor="fullName">Full Name</label><div className="account-input-wrap"><span className="account-input-icon">👤</span><input id="fullName" name="displayName" placeholder="John Doe" autoComplete="name" maxLength={80} required/></div></div>
      <div className="account-field"><label htmlFor="signup-email">Email Address</label><div className="account-input-wrap"><span className="account-input-icon">✉️</span><input id="signup-email" name="email" type="email" placeholder="johndoe@gmail.com" autoComplete="email" required/></div></div>
      <div className="account-field"><label htmlFor="signup-phone">Phone Number</label><div className="account-phone"><div className="account-phone-prefix">{country?.flag} {country?.code}</div><div className="account-input-wrap"><input id="signup-phone" name="phone" type="tel" placeholder="0771234567" autoComplete="tel-national" required/></div></div></div>
      <div className="account-field"><label htmlFor="signup-password">Create Password</label><div className="account-input-wrap"><span className="account-input-icon">🔒</span><input id="signup-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Minimum 6 characters" autoComplete="new-password" minLength={6} required/><Button variant="ghost" className="account-password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(value => !value)}>{showPassword ? '👁️' : '🙈'}</Button></div></div>
      <label className="account-check"><input type="checkbox" name="adult" required/><span>I confirm I am 18 or older</span></label>
      {error && <p className="account-error" role="alert">{error}</p>}
      <Button variant="ghost" className="account-submit" type="submit" disabled={busy || !hydrated}>{busy ? 'Creating account…' : '🚀 Create Free Account'}</Button>
    </form>}
    <div className="account-trust"><span>✅ 100% Free Signup</span><span>🌍 Global Community</span><span>🔒 Secure Sign-in</span></div><div className="account-footer">Already have an account? <Link to="/login">Log In Here</Link></div>
  </section></div></main></>;
}
