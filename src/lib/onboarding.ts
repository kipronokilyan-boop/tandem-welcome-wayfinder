import { supabase } from '@/integrations/supabase/client';
export const onboardingSteps = [
 { title: 'Language & Communication Tone', subtitle: 'Choose your language preferences and conversational style.', groups: [
  { key: 'language', label: 'Primary Chatting Language', icon: '💬', options: ['English', 'Luganda & English', 'French & English', 'German & English'] },
  { key: 'style', label: 'Your Conversational Style', icon: '✨', options: ['Friendly & Empathetic', 'Great Listener & Caring', 'Witty & Fun', 'Encouraging & Positive'] },
 ] },
 { title: 'Availability & Conversation Goals', subtitle: 'Choose when you are available and what you enjoy discussing.', groups: [
  { key: 'availability', label: 'Daily Chatting Availability', icon: '⏰', options: ['1–2 hours / day', '2–4 hours / day', '4–6 hours / day', 'Full time / Flexible'] },
  { key: 'goal', label: 'Your Conversation Goal', icon: '🌍', options: ['Practice languages', 'Explore cultures', 'Make international friends', 'Share Ugandan traditions'] },
 ] },
 { title: 'Empathy & Conversational Approach', subtitle: 'International chatters value friendly, attentive listeners who share warm energy.', groups: [
  { key: 'empathy', label: 'When a chatter shares a tough day, how do you respond?', icon: '❤️', options: ['Listen attentively and show genuine care', 'Offer uplifting words and reassurance', 'Ask thoughtful questions to help them open up', 'Share a calming, positive perspective'] },
  { key: 'topic', label: 'Preferred Topic of Conversation', icon: '💡', options: ['Daily Life & Culture', 'Life Stories & Friendship', 'Travel, Food & Traditions', 'Hobbies, Music & Relaxation'] },
 ] },
 { title: 'Device & Response Promptness', subtitle: 'Choose the device and reply pace that suit you.', groups: [
  { key: 'device', label: 'Primary Device for Chatting', icon: '📱', options: ['Smartphone (Android / iPhone)', 'Laptop / PC Computer', 'Tablet / iPad', 'Multi-device'] },
  { key: 'speed', label: 'Average Reply Speed', icon: '⚡', options: ['Instant (Within 1 minute)', 'Prompt (Within 2–3 minutes)', 'Moderate (Within 5 minutes)', 'Flexible schedule'] },
 ] },
 { title: 'Practical Chatting Response Test', subtitle: 'Select how you would reply to an international member looking for a friendly chat.', groups: [
  { key: 'response', label: 'Choose your best response:', icon: '💬', options: ['Hello Robert! Sorry about your long day. Hope you get rest! My day was okay.', 'Hello Robert! I would love to hear all about it and keep you company. Tell me what happened!', 'Hey! My day was good. Make sure you take tea.'] },
 ] },
];
export type OnboardingAnswers = Record<string, string>;
export function stepComplete(step: number, answers: OnboardingAnswers) {
 const current = onboardingSteps[step - 1];
 return Boolean(current && current.groups.every(group => group.options.includes(answers[group.key] || '')));
}
export function allStepsComplete(answers: OnboardingAnswers) {
 return onboardingSteps.every((_, index) => stepComplete(index + 1, answers));
}
export async function saveOnboarding(answers: OnboardingAnswers) {
 if (!allStepsComplete(answers)) throw new Error('Please select an answer for every question.');
 const { data: { user }, error } = await supabase.auth.getUser();
 if (error || !user) throw new Error('Please sign in again.');
 const { error: saveError } = await supabase.from('profiles').update({ onboarding_answers: answers, onboarding_completed: true }).eq('id', user.id);
 if (saveError) throw saveError;
}
export function memberDestination(completed: boolean) { return completed ? '/dashboard' as const : '/assessment' as const; }
