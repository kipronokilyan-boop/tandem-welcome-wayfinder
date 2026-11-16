import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ExampleProfileActivityStatus } from '@/components/example-profile-activity-status';

describe('example profile activity status', () => {
  it('shows distinct status labels without visible example-profile text', () => {
    render(
      <>
        <ExampleProfileActivityStatus index={0} />
        <ExampleProfileActivityStatus index={1} />
        <ExampleProfileActivityStatus index={2} />
      </>,
    );

    expect(screen.getByLabelText('Demo activity status: Online')).toHaveTextContent('🟢 Online');
    expect(screen.getByLabelText('Demo activity status: Typing…')).toHaveTextContent('🟢 Typing…');
    expect(screen.getByLabelText('Demo activity status: Looking to chat')).toHaveTextContent('💬 Looking to chat');
  });
});
