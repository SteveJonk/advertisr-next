'use client';

import { useState } from 'react';

const button =
  'flex size-9 cursor-pointer items-center justify-center rounded-full border border-line-2 text-sm text-dim transition-colors duration-200 hover:border-red hover:text-red';

/** Share on LinkedIn and copy-link buttons in the article header. */
export function Share({ url, linkedInLabel, copyLabel, copiedLabel }: { url: string; linkedInLabel?: string; copyLabel?: string; copiedLabel?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className='flex gap-2'>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target='_blank'
        rel='noopener'
        aria-label={linkedInLabel}
        className={button}
      >
        in
      </a>
      <button
        type='button'
        aria-label={copied ? copiedLabel : copyLabel}
        title={copied ? copiedLabel : undefined}
        className={button}
        onClick={() => navigator.clipboard?.writeText(url).then(() => setCopied(true))}
      >
        {copied ? '✓' : '🔗'}
      </button>
    </div>
  );
}
