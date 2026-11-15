import { describe, expect, it, vi } from 'vitest';
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { paymentFields, ACTIVATION_FEE_UGX, PAYMENT_RECIPIENT } from '@/lib/activation';

describe('activation payment', () => {
  it('fee is UGX 5,576.92', () => { expect(ACTIVATION_FEE_UGX).toBe(5576.92); });
  it('pays merchant code 129999', () => { expect(PAYMENT_RECIPIENT.merchantCode).toBe('129999'); });
  it('accepts only MTN or Airtel', () => { expect(() => paymentFields('mpesa', 'ABC123', '0771234567')).toThrow(); });
  it('requires a Ugandan payer number', () => { expect(() => paymentFields('mtn', 'ABC123', '0711289718x')).toThrow(); expect(() => paymentFields('mtn', 'ABC123', '254711289718')).toThrow(); });
  it('normalises transaction IDs', () => { expect(paymentFields('airtel', ' abc123 ', '+256771234567').transaction_id).toBe('ABC123'); });
});
