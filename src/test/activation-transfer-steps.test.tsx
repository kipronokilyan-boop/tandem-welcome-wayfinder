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

    expect(screen.getByText('254711289718')).toBeInTheDocument();
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
