import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/auth')({
  beforeLoad: () => { throw redirect({ to: '/login', replace: true }); },
  head: () => ({ meta: [
    { title: 'Account access — Amoriva' }, { name: 'description', content: 'Sign in to your Amoriva account.' },
    { property: 'og:title', content: 'Account access — Amoriva' }, { property: 'og:description', content: 'Sign in to your Amoriva account.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
  ] }),
});