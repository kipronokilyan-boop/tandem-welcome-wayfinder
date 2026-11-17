const EXAMPLE_ACTIVITY_STATES = [
  { className: 'online', icon: '🟢', label: 'Online' },
  { className: 'typing', icon: '🟢', label: 'Typing…' },
  { className: 'looking', icon: '💬', label: 'Looking to chat' },
] as const;

type Props = { index: number };

const FALLBACK_ACTIVITY = EXAMPLE_ACTIVITY_STATES[0] ?? {
  className: 'online',
  icon: '🟢',
  label: 'Online',
} as const;

export function ExampleProfileActivityStatus({ index }: Props) {
  const activity = EXAMPLE_ACTIVITY_STATES[index % EXAMPLE_ACTIVITY_STATES.length] ?? FALLBACK_ACTIVITY;

  return (
    <span
      className={`status-live-tag ${activity.className}`}
      aria-label={`Demo activity status: ${activity.label}`}
    >
      <span aria-hidden="true">{activity.icon}</span> {activity.label}
    </span>
  );
}
