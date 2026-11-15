export type DemoProfile = { displayName: string; email: string };
const key = "amoriva-demo-profile";
const profilesKey = "amoriva-demo-profiles";

function readProfiles(): DemoProfile[] {
  const value = JSON.parse(sessionStorage.getItem(profilesKey) || "[]");
  return Array.isArray(value) ? value.filter((profile): profile is DemoProfile =>
    profile && typeof profile.displayName === "string" && typeof profile.email === "string") : [];
}

export function createDemoProfile(displayName: string, email: string): DemoProfile {
  const normalizedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error("Enter a valid email address.");
  }
  return { displayName: displayName.trim() || normalizedEmail.split("@")[0] || "Demo member", email: normalizedEmail };
}

export function saveDemoProfile(profile: DemoProfile) {
  const profiles = readProfiles().filter(saved => saved.email !== profile.email);
  sessionStorage.setItem(profilesKey, JSON.stringify([...profiles, profile]));
  sessionStorage.setItem(key, JSON.stringify(profile));
}

export function signUpDemo(displayName: string, email: string) {
  if (!displayName.trim()) throw new Error("Enter your display name.");
  const profile = createDemoProfile(displayName, email);
  if (readProfiles().some(saved => saved.email === profile.email) || readDemoProfile()?.email === profile.email) {
    throw new Error("This email already has a demo profile in this tab. Sign in instead.");
  }
  saveDemoProfile(profile);
  return profile;
}

export function signInDemo(email: string) {
  const normalizedEmail = createDemoProfile("", email).email;
  const profile = readProfiles().find(saved => saved.email === normalizedEmail) ??
    (readDemoProfile()?.email === normalizedEmail ? readDemoProfile() : null);
  if (!profile) throw new Error("No demo profile found for this email in this tab. Sign up first.");
  saveDemoProfile(profile);
  return profile;
}

export function readDemoProfile(): DemoProfile | null {
  try {
    const value = JSON.parse(sessionStorage.getItem(key) || "null");
    if (value && typeof value.displayName === "string" && typeof value.email === "string") return value;
  } catch { /* An unavailable or invalid session is treated as empty. */ }
  return null;
}

export function clearDemoProfile() {
  sessionStorage.removeItem(key);
}