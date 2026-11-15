import { describe, it, expect, vi, beforeEach } from 'vitest';

const mock = vi.hoisted(() => ({ getUser: vi.fn(), from: vi.fn(), select: vi.fn(), eq: vi.fn(), single: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: { auth: { getUser: mock.getUser }, from: mock.from } }));
import { defaultCountry, loadMemberProfile, registrationFields } from '@/lib/member-auth';

describe('real member accounts', () => {
  it('defaults registration to Uganda', () => {
    expect(defaultCountry?.name).toBe('Uganda');
    const form = new FormData(); form.set('displayName', 'Member'); form.set('adult', 'on');
    expect(registrationFields(form).options.data.country).toBe('Uganda');
  });
  it('defaults the phone prefix to Uganda +256', () => {
    expect(defaultCountry?.code).toBe('+256');
  });
  beforeEach(() => {
    vi.clearAllMocks();
    mock.from.mockReturnValue({ select: mock.select });
    mock.select.mockReturnValue({ eq: mock.eq });
    mock.eq.mockReturnValue({ single: mock.single });
  });
  it('requires a verified identity before requesting private profiles', async () => {
    mock.getUser.mockResolvedValue({ data: { user: null }, error: null });
    await expect(loadMemberProfile()).rejects.toThrow('Please sign in again.');
    expect(mock.from).not.toHaveBeenCalled();
  });
  it('reads only the authenticated member profile', async () => {
    mock.getUser.mockResolvedValue({ data: { user: { id: 'member-42', email: 'member@example.com' } }, error: null });
    mock.single.mockResolvedValue({ data: { display_name: 'KILOO', country: 'Uganda', phone: '0771234567' }, error: null });
    const profile = await loadMemberProfile();
    expect(mock.eq).toHaveBeenCalledWith('id', 'member-42');
    expect(profile.display_name).toBe('KILOO');
  });
  it('passes profile fields to real signup without saving the password in profile data', () => {
    const form = new FormData();
    for (const [key, value] of Object.entries({ displayName: ' KILOO ', email: ' Member@Example.com ', password: 'private-password', country: 'Uganda', phone: '0771234567', adult: 'on' })) form.set(key, value);
    const result = registrationFields(form);
    expect(result.email).toBe('member@example.com');
    expect(result.options.data).toEqual({ display_name: 'KILOO', country: 'Uganda', phone: '0771234567' });
    expect(result.options.data).not.toHaveProperty('password');
  });
});