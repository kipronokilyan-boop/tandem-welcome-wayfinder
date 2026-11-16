import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { ActivationTransferSteps } from '@/components/activation-transfer-steps';

const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');

afterEach(() => {
  if (originalClipboard) Object.defineProperty(navigator, 'clipboard', originalClipboard);
  else Reflect.deleteProperty(navigator, 'clipboard');
});

describe('activation transfer steps', () => {
  it('shows and copies the MTN-specific Kenyan recipient number', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    render(<ActivationTransferSteps network="mtn" />);

    const steps = Array.from(screen.getByRole('list').querySelectorAll('li'))
      .map(step => step.textContent?.replace(/\s+/g, ' ').trim() ?? '');
    expect(steps.slice(0, 4)).toEqual([
      'Dial *165# on your registered MTN Uganda line.',
      'Select 1 – Send Money.',
      'Select 2 – East Africa (displayed).',
      'Select 1 – Safaricom M-Pesa (displayed).',
    ]);
    expect(steps[4]).toContain('Enter the Kenyan recipient number with country code 254:');
    expect(steps[4]).toContain('254711289718');
    expect(steps.slice(5)).toEqual([
      'Enter UGX 9,517 (300 KES).',
      "Confirm the recipient's details.",
      'Enter your MTN MoMo PIN.',
      'You will receive a transaction confirmation SMS.',
    ]);
    fireEvent.click(screen.getByRole('button', { name: 'Copy number' }));

    await waitFor(() => expect(writeText).toHaveBeenCalledWith('254711289718'));
  });

  it('shows numbered Airtel instructions and copies the Kenyan recipient number', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    render(<ActivationTransferSteps network="airtel" />);

    expect(screen.getByText('Dial *185# on your registered Airtel Uganda line.')).toBeInTheDocument();
    expect(screen.getByText('254751725298')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Copy number' }));

    await waitFor(() => expect(writeText).toHaveBeenCalledWith('254751725298'));
    expect(await screen.findByRole('status')).toHaveTextContent('Number copied.');
  });
});
