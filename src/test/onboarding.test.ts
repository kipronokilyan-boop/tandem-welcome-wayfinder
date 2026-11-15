import { describe, expect, it, vi } from 'vitest';
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { onboardingSteps, allStepsComplete, stepComplete, memberDestination } from '@/lib/onboarding';
describe('member onboarding flow', () => {
 it('starts new members at assessment instead of profile details', () => {expect(memberDestination(false)).toBe('/assessment');});
 it('returns completed members to dashboard', () => {expect(memberDestination(true)).toBe('/dashboard');});
 it('requires all questions in each stage before advancing', () => {
  expect(stepComplete(1, {language:'English'})).toBe(false);
  expect(stepComplete(1, {language:'English',style:'Friendly & Empathetic'})).toBe(true);
 });
 it('requires all five stages before saving completion', () => {
  const answers = Object.fromEntries(onboardingSteps.flatMap(step => step.groups.map(group => [group.key,group.options[0] || ''])));
  expect(allStepsComplete(answers)).toBe(true);
  delete answers['response']; expect(allStepsComplete(answers)).toBe(false);
 });
});