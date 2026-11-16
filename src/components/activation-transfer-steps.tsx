import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { INTERNATIONAL_TRANSFER_STEPS, PAYMENT_RECIPIENT, type Network } from '@/lib/activation';

type Props = { network: Network };

export function ActivationTransferSteps({ network }: Props) {
  const [copyStatus, setCopyStatus] = useState('');
  const recipientNumber = PAYMENT_RECIPIENT.phoneByNetwork[network].replace(/\D/g, '');
  const { beforeRecipient, afterRecipient } = INTERNATIONAL_TRANSFER_STEPS[network];

  async function copyNumber() {
    setCopyStatus('');
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('Clipboard is unavailable. Please copy the number manually.');
      return;
    }

    try {
      await navigator.clipboard.writeText(recipientNumber);
      setCopyStatus('Number copied.');
    } catch {
      setCopyStatus('Could not copy the number. Please copy it manually.');
    }
  }

  return (
    <ol className="pay-steps">
      {beforeRecipient.map(step => <li key={step}>{step}</li>)}
      <li>
        Enter the Kenyan recipient number with country code 254:
        <div className="pay-copy-row">
          <strong className="pay-copy-number">{recipientNumber}</strong>
          <Button type="button" variant="outline" className="pay-copy-button" onClick={copyNumber}>
            Copy number
          </Button>
        </div>
        {copyStatus && <span className="pay-copy-status" role="status">{copyStatus}</span>}
      </li>
      {afterRecipient.map(step => <li key={step}>{step}</li>)}
    </ol>
  );
}
