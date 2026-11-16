import { useEffect, useState } from 'react';

const SAMPLE_WITHDRAWALS = [
  { name: 'Kibet Brian', amount: '$36.25', method: 'MTN MoMo' },
  { name: 'Achieng Rose', amount: '$18.40', method: 'Airtel Money' },
  { name: 'Mwangi Peter', amount: '$52.10', method: 'MTN MoMo' },
  { name: 'Nakitto Sarah', amount: '$24.75', method: 'Airtel Money' },
  { name: 'Okello James', amount: '$41.60', method: 'MTN MoMo' },
  { name: 'Namara Grace', amount: '$15.20', method: 'Airtel Money' },
  { name: 'Mugisha Daniel', amount: '$63.00', method: 'MTN MoMo' },
  { name: 'Auma Faith', amount: '$29.35', method: 'Airtel Money' },
  { name: 'Ssemanda Paul', amount: '$22.50', method: 'MTN MoMo' },
  { name: 'Atim Joan', amount: '$47.80', method: 'Airtel Money' },
  { name: 'Kato Michael', amount: '$33.15', method: 'MTN MoMo' },
  { name: 'Nabirye Esther', amount: '$19.90', method: 'Airtel Money' },
  { name: 'Tumusiime David', amount: '$58.45', method: 'MTN MoMo' },
  { name: 'Nansubuga Mary', amount: '$27.30', method: 'Airtel Money' },
  { name: 'Ocen Patrick', amount: '$39.70', method: 'MTN MoMo' },
  { name: 'Akello Lydia', amount: '$21.25', method: 'Airtel Money' },
  { name: 'Byaruhanga Ivan', amount: '$44.60', method: 'MTN MoMo' },
  { name: 'Nambooze Rita', amount: '$31.80', method: 'Airtel Money' },
  { name: 'Lukwago Joseph', amount: '$54.25', method: 'MTN MoMo' },
  { name: 'Anyango Miriam', amount: '$17.65', method: 'Airtel Money' },
];

const INITIAL_DELAY_MS = 3500;
const DISPLAY_DURATION_MS = 4000;
const REPEAT_INTERVAL_MS = 18000;

type SampleWithdrawal = (typeof SAMPLE_WITHDRAWALS)[number] & { sequence: number };

export function TemporaryActivityToast() {
  const [withdrawal, setWithdrawal] = useState<SampleWithdrawal | null>(null);

  useEffect(() => {
    let sequence = 0;
    let hideTimeout: number | undefined;
    let repeatInterval: number | undefined;

    function showNextSample() {
      const sample = SAMPLE_WITHDRAWALS[sequence % SAMPLE_WITHDRAWALS.length];
      setWithdrawal({ ...sample, sequence });
      sequence += 1;
      if (hideTimeout !== undefined) window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(() => setWithdrawal(null), DISPLAY_DURATION_MS);
    }

    const initialTimeout = window.setTimeout(() => {
      showNextSample();
      repeatInterval = window.setInterval(showNextSample, REPEAT_INTERVAL_MS);
    }, INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(initialTimeout);
      if (hideTimeout !== undefined) window.clearTimeout(hideTimeout);
      if (repeatInterval !== undefined) window.clearInterval(repeatInterval);
    };
  }, []);

  if (!withdrawal) return null;

  return (
    <aside key={withdrawal.sequence} className="activity-toast" role="status" aria-live="polite" aria-atomic="true">
      <span className="activity-toast-icon" aria-hidden="true">✓</span>
      <div className="activity-toast-copy">
        <span className="activity-toast-sample">LIVE DATA</span>
        <strong>Withdrawal successful</strong>
        <span><b>{withdrawal.name}</b> withdrew <b>{withdrawal.amount}</b></span>
        <span className="activity-toast-method">via {withdrawal.method}</span>
      </div>
    </aside>
  );
}
