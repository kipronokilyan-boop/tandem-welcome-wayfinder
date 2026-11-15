import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { memberProfileOptions } from '@/lib/member-auth';
import { SignOutButton } from '@/components/account-controls';
import accountCSS from '@/styles/accounts.css?raw';

export const Route = createFileRoute('/_authenticated/account')({
  loader: ({ context }) => context.queryClient.ensureQueryData(memberProfileOptions),
  head: () => ({ meta: [
    { title: 'Your profile — Amoriva' }, { name: 'description', content: 'Your personal Amoriva member profile.' },
    { property: 'og:title', content: 'Your profile — Amoriva' }, { property: 'og:description', content: 'Your personal Amoriva member profile.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }), component: Account,
});
function Account() {
  const { data: profile } = useSuspenseQuery(memberProfileOptions);
  return <><style>{accountCSS}</style><main className="account-page"><header className="account-header"><Link to="/" className="account-brand"><img src="/site-assets/20d745d21dcfa2ed.png" alt=""/>Amoriva</Link><Link to="/" className="account-back">← Back to Home</Link></header><div className="account-container"><section className="account-card"><h1 className="account-title">Welcome, {profile.display_name || 'member'}</h1><dl className="account-profile"><dt>Full name</dt><dd>{profile.display_name}</dd><dt>Email</dt><dd>{profile.email}</dd><dt>Country</dt><dd>{profile.country || 'Not set'}</dd><dt>Phone number</dt><dd>{profile.phone || 'Not set'}</dd></dl><SignOutButton/></section></div></main></>;
}