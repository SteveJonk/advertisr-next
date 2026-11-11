import Image from '@/components/ui/Image';
import type { ReactNode } from 'react';

export type CaseItem = {
  href: string;
  img?: string;
  cat?: string | null;
  title?: string | null;
  stats: [ReactNode, string][];
  linkLabel?: string;
};

/** Dark photo card with a category pill, title and two stats. */
export function CaseCard({ href, img, cat, title, stats, linkLabel }: CaseItem) {
  return (
    <a
      href={href}
      className='group rv relative flex min-h-105 flex-col justify-end overflow-hidden rounded-[18px] border border-line bg-[#222] text-white hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(14,14,18,.5)]'
    >
      {img && (
        <div className='absolute inset-0 z-0'>
          <Image
            src={img}
            alt=''
            fill
            sizes='(max-width:760px) 100vw, (max-width:1080px) 50vw, 400px'
            className='object-cover saturate-90 transition-transform duration-700 ease-rv group-hover:scale-106'
          />
        </div>
      )}
      <div className='absolute inset-0 z-1 bg-[linear-gradient(to_top,rgba(12,12,16,.97)_28%,rgba(12,12,16,.8)_58%,rgba(12,12,16,.4)_100%)]' />
      <div className='relative z-2 p-[26px]'>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/16 px-3 py-1.5 text-[11px] font-semibold tracking-[.1em] whitespace-nowrap text-white uppercase backdrop-blur-[8px] before:size-1.5 before:shrink-0 before:rounded-full before:bg-red before:content-['']">
          {cat}
        </div>
        <h3 className='mt-3.5 mb-[18px] text-[25px] tracking-[-.025em]'>{title}</h3>
        <div className='flex gap-[26px] border-t border-white/22 pt-4'>
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className='font-display text-[28px] font-bold tracking-[-.035em]'>{n}</div>
              <div className='mt-px text-[12.5px] text-white/86'>{l}</div>
            </div>
          ))}
        </div>
        <span className='mt-[18px] inline-flex items-center gap-[7px] text-[13.5px] font-semibold text-white/90 decoration-red underline-offset-4 transition-[color,gap] duration-200 group-hover:gap-[11px] group-hover:text-white group-hover:underline'>
          {linkLabel}
        </span>
      </div>
    </a>
  );
}
