import { beforeEach, describe, expect, it } from "vitest";
import { createDemoProfile, saveDemoProfile, readDemoProfile, clearDemoProfile, signUpDemo, signInDemo } from "@/lib/demo-account";

describe("Demo accounts", () => {
  beforeEach(() => sessionStorage.clear());
  it("stores only the demo display name and email, with no credentials", () => {
    saveDemoProfile(createDemoProfile(" Amina ", "AMINA@example.com"));
    expect(readDemoProfile()).toEqual({ displayName: "Amina", email: "amina@example.com" });
    expect(Object.keys(readDemoProfile() || {})).toEqual(["displayName", "email"]);
  });
  it("clears the demo profile on sign out", () => {
    saveDemoProfile(createDemoProfile("Amina", "amina@example.com"));
    clearDemoProfile();
    expect(readDemoProfile()).toBeNull();
  });
  it("restores the registered name after signing out and signing in", () => {
    signUpDemo("Amina Example", "amina@example.com");
    clearDemoProfile();
    signInDemo(" AMINA@example.com ");
    expect(readDemoProfile()).toEqual({ displayName: "Amina Example", email: "amina@example.com" });
  });
  it("rejects an unregistered email without opening a profile", () => {
    expect(() => signInDemo("unknown@example.com")).toThrow("Sign up first");
    expect(readDemoProfile()).toBeNull();
  });
  it("prevents duplicate signup from replacing a registered profile", () => {
    signUpDemo("Amina", "amina@example.com");
    expect(() => signUpDemo("Different name", "AMINA@example.com")).toThrow("Sign in instead");
    expect(readDemoProfile()?.displayName).toBe("Amina");
  });
  it("rejects whitespace-only names", () => {
    expect(() => signUpDemo("   ", "amina@example.com")).toThrow("display name");
    expect(readDemoProfile()).toBeNull();
  });
  it("rejects invalid emails", () => {
    expect(() => signUpDemo("Amina", "not-an-email")).toThrow("valid email");
    expect(readDemoProfile()).toBeNull();
  });
  it("does not share demo profiles across tabs", () => {
    signUpDemo("Amina", "amina@example.com");
    sessionStorage.clear();
    expect(() => signInDemo("amina@example.com")).toThrow("Sign up first");
  });
});