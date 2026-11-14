import { beforeEach, describe, expect, it } from "vitest";
import { createDemoProfile, saveDemoProfile, readDemoProfile, clearDemoProfile } from "@/lib/demo-account";

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
});