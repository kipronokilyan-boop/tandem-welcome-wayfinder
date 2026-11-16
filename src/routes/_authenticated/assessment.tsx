import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { memberProfileOptions } from '@/lib/member-auth';
import { onboardingSteps, stepComplete, saveOnboarding, type OnboardingAnswers } from '@/lib/onboarding';
import capturedCSS from '@/styles/pages/assessment.css?raw';
import flowCSS from '@/styles/member-flow.css?raw';
export const Route = createFileRoute('/_authenticated/assessment')({
 loader: ({ context }) => context.queryClient.ensureQueryData(memberProfileOptions),
 head: () => ({ meta: [
  { title: 'Member onboarding — Amoriva Uganda' }, { name: 'description', content: 'Set your language, conversation and availability preferences on Amoriva.' },
  { property: 'og:title', content: 'Member onboarding — Amoriva Uganda' }, { property: 'og:description', content: 'Set your language, conversation and availability preferences on Amoriva.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
 ] }), component: Assessment,
});
function Assessment() {
 const { data: profile } = useSuspenseQuery(memberProfileOptions);
 const [step, setStep] = useState(1); const [answers, setAnswers] = useState<OnboardingAnswers>(() => {
  const value = profile.onboarding_answers;
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string'));
 });
 const [error, setError] = useState(''); const [busy, setBusy] = useState(false); const [done, setDone] = useState(false);
 const navigate = useNavigate(); const queryClient = useQueryClient(); const current = onboardingSteps[step - 1];
 async function next() {
  if (!stepComplete(step, answers)) { setError('Please select an answer for all questions above to proceed.'); return; }
  setError('');
  if (step < 5) {setStep(step + 1); return;}
  setBusy(true);
  try { await saveOnboarding(answers); await queryClient.invalidateQueries({ queryKey: memberProfileOptions.queryKey }); setDone(true); }
  catch (error) {setError(error instanceof Error ? error.message : 'Could not save your answers.');}
  finally {setBusy(false);}
 }
 return <><style>{capturedCSS}</style><style>{flowCSS}</style><main className="auth-page member-onboarding"><header className="auth-header"><Link className="auth-brand" to="/"><img className="auth-brand-logo" src="/site-assets/20d745d21dcfa2ed.png" alt=""/><span className="auth-brand-name">Amoriva</span></Link><span className="step-indicator-pill">Step {done ? 5 : step} of 5 · {done ? 'Completed' : 'Skills & Profile'}</span></header><div className="auth-container"><section className="auth-card assessment-card">
 {done ? <div className="passed-state"><div className="completion-trophy">🏆</div><h1 className="auth-title">Assessment Completed!</h1><p className="auth-subtitle">Your communication preferences have been saved. Welcome to the community.</p><Button variant="ghost" className="auth-submit-btn" onClick={() => navigate({ to: '/dashboard', replace: true })}>Proceed to Dashboard 🚀</Button></div> : <><div className="auth-card-header"><div className="signup-badge">🎯 Member Onboarding Assessment</div><h1 className="auth-title">{current?.title}</h1><p className="auth-subtitle">{current?.subtitle}</p></div><progress className="member-progress" value={step} max={5} aria-label="Onboarding progress"/>{error && <p role="alert" className="member-flow-error">{error}</p>}
 {step === 5 && <div className="scenario-box"><strong>🇬🇧 Robert H. (62, London, UK):</strong><p>“Hello dear! I had a very long and stressful day at work today. How was your day going?”</p></div>}
 <div className="assessment-step-content">{current?.groups.map(group => <fieldset key={group.key} className="member-question"><legend>{group.label}</legend><div className={step === 5 ? 'response-options' : 'option-grid'}>{group.options.map((option, index) => <Button key={option} variant="ghost" type="button" aria-pressed={answers[group.key] === option} className={`${step === 5 ? 'response-card' : 'option-chip'} ${answers[group.key] === option ? 'active' : ''}`} onClick={() => {setAnswers(old => ({...old, [group.key]: option}));setError('');}}><span className={step === 5 ? 'response-letter' : undefined}>{step === 5 ? String.fromCharCode(65 + index) : group.icon}</span><span className={step === 5 ? 'response-body' : undefined}>{option}</span></Button>)}</div></fieldset>)}<div className="button-group-row">{step > 1 && <Button variant="ghost" className="secondary-btn" onClick={() => {setStep(step - 1);setError('');}}>← Back</Button>}<Button variant="ghost" className="auth-submit-btn" disabled={busy} onClick={next}>{busy ? 'Saving your preferences…' : step === 5 ? 'Complete Assessment ✔' : `Next Step: ${['','Availability & Goals','Empathy Approach','Device & Speed','Practical Test'][step]} →`}</Button></div></div></>}
 </section></div></main></>;
}
