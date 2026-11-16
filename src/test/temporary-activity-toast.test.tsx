import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TemporaryActivityToast } from '@/components/temporary-activity-toast';

afterEach(() => {
  vi.useRealTimers();
});

describe('temporary activity toast', () => {
  it('shows a clearly marked sample withdrawal and dismisses it after four seconds', () => {
    vi.useFakeTimers();
    render(<TemporaryActivityToast />);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3500);
    });

    expect(screen.getByRole('status')).toHaveTextContent('TEST DATA · SAMPLE');
    expect(screen.getByRole('status')).toHaveTextContent('Kibet Brian withdrew $36.25');
    expect(screen.getByRole('status')).toHaveTextContent('via MTN MoMo');

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(14000);
    });

    expect(screen.getByRole('status')).toHaveTextContent('Achieng Rose withdrew $18.40');
    expect(screen.getByRole('status')).toHaveTextContent('TEST DATA · SAMPLE');
  });
});
