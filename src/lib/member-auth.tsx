import { createContext, useContext } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export const MemberContext = createContext<{ user: User | null; ready: boolean }>({ user: null, ready: false });
export const useMember = () => useContext(MemberContext);

export const countries = [
  { name: 'Uganda', flag: '🇺🇬', flagCode: 'ug', code: '+256' },
  { name: 'Kenya', flag: '🇰🇪', flagCode: 'ke', code: '+254' },
  { name: 'Tanzania', flag: '🇹🇿', flagCode: 'tz', code: '+255' },
  { name: 'Ghana', flag: '🇬🇭', flagCode: 'gh', code: '+233' },
  { name: 'Nigeria', flag: '🇳🇬', flagCode: 'ng', code: '+234' },
  { name: 'Zambia', flag: '🇿🇲', flagCode: 'zm', code: '+260' },
  { name: 'South Africa', flag: '🇿🇦', flagCode: 'za', code: '+27' },
  { name: 'Botswana', flag: '🇧🇼', flagCode: 'bw', code: '+267' },
  { name: 'Ethiopia', flag: '🇪🇹', flagCode: 'et', code: '+251' },
];

export const defaultCountry = countries[0];

export function registrationFields(data: FormData) {
  const displayName = String(data.get('displayName') || '').trim();
  const email = String(data.get('email') || '').trim().toLowerCase();
  const password = String(data.get('password') || '');
  const country = String(data.get('country') || defaultCountry?.name || 'Uganda');
  const phone = String(data.get('phone') || '').trim();
  if (!displayName) throw new Error('Enter your full name.');
  if (!data.get('adult')) throw new Error('Confirm that you are 18 or older.');
  return { email, password, options: { data: { display_name: displayName, country, phone } } };
}

export async function loadMemberProfile() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) throw new Error('Please sign in again.');
  const { data: profile, error: profileError } = await supabase.from('profiles').select('display_name,country,phone,onboarding_answers,onboarding_completed').eq('id', user.id).single();
  if (profileError) throw profileError;
  return { ...profile, email: user.email };
}

export const memberProfileOptions = { queryKey: ['member-profile'], queryFn: loadMemberProfile };