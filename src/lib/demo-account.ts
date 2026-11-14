export type DemoProfile = { displayName: string; email: string };
const key = "amoriva-demo-profile";

export function createDemoProfile(displayName: string, email: string): DemoProfile {
  return { displayName: displayName.trim() || email.split("@")[0] || "Demo member", email: email.trim().toLowerCase() };
}

export function saveDemoProfile(profile: DemoProfile) {
  sessionStorage.setItem(key, JSON.stringify(profile));
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