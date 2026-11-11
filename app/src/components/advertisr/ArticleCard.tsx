import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { AUTHORS, type Article, type Category } from '@/lib/advertisr/articles';
import { cn } from '@/lib/cn';

/** Placeholder art per category: tinted glow + line icon + dot grid. */
const ART: Record<Category, { color: string; icon: ReactNode }> = {
  'Google Ads': {
    color: '#FF3951',
    icon: (
      <>
        <circle cx='32' cy='32' r='20' fill='none' stroke='currentColor' strokeWidth='2' />
        <circle cx='32' cy='32' r='11' fill='none' stroke='currentColor' strokeWidth='2' />
        <circle cx='32' cy='32' r='2.5' fill='currentColor' />
      </>
    ),
  },
  'Meta Ads': {
    color: '#3B82F6',
    icon: (
      <path
        d='M14 40 L14 26 L26 26 L26 18 L50 32 L26 46 L26 40 Z'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinejoin='round'
      />
    ),
  },
  'SEO & GEO': {
    color: '#22C55E',
    icon: (
      <>
        <circle cx='27' cy='27' r='14' fill='none' stroke='currentColor' strokeWidth='2' />
        <line x1='37' y1='37' x2='49' y2='49' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </>
    ),
  },
  'Data & Analytics': {
    color: '#F5A623',
    icon: (
      <>
        <line x1='16' y1='48' x2='16' y2='30' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
        <line x1='32' y1='48' x2='32' y2='16' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
        <line x1='48' y1='48' x2='48' y2='24' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
      </>
    ),
  },
  'Marketing Automation': {
    color: '#06B6D4',
    icon: (
      <>
        <circle cx='16' cy='20' r='4.5' fill='none' stroke='currentColor' strokeWidth='2' />
        <circle cx='48' cy='20' r='4.5' fill='none' stroke='currentColor' strokeWidth='2' />
        <circle cx='32' cy='44' r='4.5' fill='none' stroke='currentColor' strokeWidth='2' />
        <path d='M20 22 L29 41 M44 22 L35 41' stroke='currentColor' strokeWidth='1.6' fill='none' />
      </>
    ),
  },
  'AI & Automatisering': {
    color: '#A855F7',
    icon: (
      <path
        d='M32 14 L35 28 L49 32 L35 36 L32 50 L29 36 L15 32 L29 28 Z'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinejoin='round'
      />
    ),
  },
};

function CategoryArt({ cat, size }: { cat: Category; size: number }) {
  const { color, icon } = ART[cat];
  return (
    <div
      className='relative flex size-full items-center justify-center overflow-hidden bg-soft'
      style={{ backgroundImage: `radial-gradient(circle at 30% 25%, ${color}26, transparent 60%)` }}
    >
      <svg width={size} height={size} viewBox='0 0 64 64' style={{ color }} className='opacity-90' aria-hidden='true'>
        {icon}
      </svg>
      <div className='absolute inset-0 bg-[radial-gradient(rgba(14,14,18,.09)_1px,transparent_1px)] bg-size-[16px_16px] opacity-40' />
    </div>
  );
}

function Avatar({ author, size }: { author: Article['author']; size: number }) {
  const a = AUTHORS[author];
  return (
    <Image
      src={a.img}
      alt={a.name}
      width={size}
      height={size}
      className='rounded-full object-cover'
      style={{ width: size, height: size }}
    />
  );
}

const card =
  'rv block overflow-hidden border border-line bg-white shadow-[0_20px_40px_-32px_rgba(14,14,18,.4)] hover:-translate-y-1 hover:shadow-[0_30px_56px_-30px_rgba(255,57,81,.4)]';

export function PillarCard({ a }: { a: Article }) {
  return (
    <Link href={a.href} className={cn(card, 'relative rounded-[20px] hover:border-red/40')}>
      <div className='relative aspect-[16/8.2] overflow-hidden'>
        <CategoryArt cat={a.cat} size={100} />
        <div className='absolute top-4 left-4 z-2 flex items-center gap-1.5 rounded-full bg-red/92 px-[13px] py-1.5 font-display text-[11px] font-bold tracking-[.03em] text-white'>
          📖 Pillar gids
        </div>
      </div>
      <div className='px-6 pt-[22px] pb-[26px]'>
        <div className='text-[11.5px] font-bold tracking-[.05em] text-red-ink uppercase'>{a.cat}</div>
        <h3 className='my-2.5 text-[22px] leading-[1.25] tracking-[-.02em]'>{a.title}</h3>
        <p className='mb-4 text-[14.5px] leading-[1.55] text-dim'>{a.excerpt}</p>
        <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px] text-dim-2 *:whitespace-nowrap'>
          <Avatar author={a.author} size={26} />
          <span>{AUTHORS[a.author].name}</span>
          <span>·</span>
          <span>{a.minutes} min leestijd</span>
          <span>·</span>
          <span>Bijgewerkt {a.updated}</span>
        </div>
      </div>
    </Link>
  );
}

/** `excerpt={false}` for the compact related-articles variant. */
export function ArticleCard({ a, excerpt = true }: { a: Article; excerpt?: boolean }) {
  return (
    <Link href={a.href} className={cn(card, 'rounded-[18px] hover:border-red/35')}>
      <div className='relative aspect-[16/10] overflow-hidden bg-soft'>
        <CategoryArt cat={a.cat} size={72} />
        <div className='absolute top-3.5 left-3.5 rounded-full border border-line bg-white/92 px-3 py-[5px] font-display text-[10.5px] font-bold tracking-[.04em] text-ink uppercase backdrop-blur-[6px]'>
          {a.cat}
        </div>
      </div>
      <div className='px-5 pt-[18px] pb-5'>
        <h3 className='mb-2.5 text-[16.5px] leading-[1.35] tracking-[-.01em] text-ink'>{a.title}</h3>
        {excerpt && <p className='mb-3.5 text-[13.5px] leading-normal text-dim'>{a.excerpt}</p>}
        <div className='flex items-center gap-[9px] border-t border-line pt-3.5 text-[11.5px] text-dim-2 *:whitespace-nowrap'>
          <Avatar author={a.author} size={22} />
          <span>{AUTHORS[a.author].name}</span>
          <span className='size-[3px] rounded-full bg-dim-2' />
          <span>{a.minutes} min leestijd</span>
        </div>
      </div>
    </Link>
  );
}
