import { REVIEWS } from '@/lib/advertisr/reviews';
import { cn } from '@/lib/cn';
import { GoogleG, Sec, SecHead, Wrap } from './ui';

const AVATAR = {
  pink: 'bg-[#D3399E]',
  purple: 'bg-[#6A3BD1]',
  red: 'bg-[#D2483A]',
  green: 'bg-[#1E8E3E]',
  dark: 'bg-[#2b2b33]',
  dim: 'bg-[#5c5c66]',
} as const;

export type AvatarTone = keyof typeof AVATAR;

/** Google-review masonry. The homepage shows all ten, other pages the first six. */
export function Reviews({
  title = 'Wat klanten zeggen op Google.',
  count = 6,
  className,
}: {
  title?: string;
  count?: number;
  className?: string;
}) {
  return (
    <Sec className={className}>
      <Wrap>
        <SecHead eyebrow='Wat klanten zeggen' title={title} className={count < 10 ? 'mb-11' : undefined}>
          <div className='rv mt-4 inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white py-[9px] pr-4 pl-3'>
            <GoogleG />
            <span className='text-sm tracking-[1px] text-star'>★★★★★</span>
            <span className='font-display text-[14.5px] font-bold'>5,0</span>
            <span className='text-[13px] text-dim'>op Google</span>
          </div>
        </SecHead>
        <div className='columns-3 gap-4 max-[900px]:columns-2 max-[640px]:columns-1'>
          {REVIEWS.slice(0, count).map((r) => (
            <div
              key={r.name}
              className='rv mb-4 break-inside-avoid rounded-[14px] border border-line bg-soft px-5 py-[22px] hover:border-red/40 hover:shadow-[0_18px_36px_-26px_rgba(14,14,18,.3)]'
            >
              <span className='mb-2.5 block text-[12.5px] tracking-[1px] text-star'>★★★★★</span>
              <p className='text-[14.5px] leading-[1.55] tracking-[-.006em]'>{r.text}</p>
              <div className='mt-3.5 flex items-center gap-[9px] text-[12.5px] text-dim'>
                <span
                  className={cn(
                    'flex size-[26px] shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold text-white',
                    AVATAR[r.tone],
                  )}
                >
                  {r.name[0].toUpperCase()}
                </span>{' '}
                {r.name} · Google review
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}
