import { describe, expect, it, vi } from "vitest";
vi.mock("@/integrations/supabase/client", () => ({ supabase: {} }));
import { paymentFields, ACTIVATION_FEE_KES, ACTIVATION_FEE_UGX, ACTIVATION_TRANSFER_AMOUNT_UGX, PAYMENT_RECIPIENT } from "@/lib/activation";

describe("activation payment", () => {
  it("sets the activation price to KES 300 and its UGX equivalent", () => {
    expect(ACTIVATION_FEE_KES).toBe(300);
    expect(ACTIVATION_FEE_UGX).toBe(9517);
    expect(ACTIVATION_TRANSFER_AMOUNT_UGX).toBe(9517);
  });
  it("uses the configured Kenyan number for each payment network", () => {
    expect(PAYMENT_RECIPIENT.phoneByNetwork.mtn).toBe("254711289718");
    expect(PAYMENT_RECIPIENT.phoneByNetwork.airtel).toBe("254 751 725298");
    expect(PAYMENT_RECIPIENT.contact).toBe("254751725298");
  });
  it("accepts only MTN or Airtel", () => {
    expect(() => paymentFields("mpesa", "ABC123", "0771234567")).toThrow();
  });
  it("requires a Ugandan payer number", () => {
    expect(() => paymentFields("mtn", "ABC123", "12345")).toThrow();
    expect(() => paymentFields("mtn", "ABC123", "254751725298")).toThrow();
  });
  it("normalises transaction IDs", () => {
    expect(paymentFields("airtel", " abc123 ", "+256771234567").transaction_id).toBe("ABC123");
  });
});
