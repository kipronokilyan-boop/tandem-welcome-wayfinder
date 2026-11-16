import { describe, expect, it, vi } from "vitest";
vi.mock("@/integrations/supabase/client", () => ({ supabase: {} }));
import { paymentFields, ACTIVATION_FEE_UGX, ACTIVATION_TRANSFER_AMOUNT_UGX, PAYMENT_RECIPIENT } from "@/lib/activation";

describe("activation payment", () => {
  it("keeps the configured fee and rounded transfer amount", () => {
    expect(ACTIVATION_FEE_UGX).toBe(5576.92);
    expect(ACTIVATION_TRANSFER_AMOUNT_UGX).toBe(5600);
  });
  it("sends the activation payment to the configured Kenyan mobile number", () => {
    expect(PAYMENT_RECIPIENT.phone).toBe("+254 751 725298");
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
