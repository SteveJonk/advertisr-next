import Link from 'next/link';
import { Fragment, type ComponentProps, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Content width shell: 1240px, 40px gutter (22px on phones). */
export function Wrap({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('relative z-2 mx-auto max-w-page px-10 max-sm:px-[22px]', className)} {...props} />;
}

/** A standard 120px section (80px on phones). */
export function Sec({ className, ...props }: ComponentProps<'section'>) {
  return <section className={cn('relative z-2 py-30 max-sm:py-20', className)} {...props} />;
}

export function Eyebrow({ className, children, rv = true }: { className?: string; children: ReactNode; rv?: boolean }) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 text-[11.5px] font-semibold tracking-[.16em] text-red-ink uppercase',
        "before:block before:h-[1.5px] before:w-[22px] before:bg-red before:content-['']",
        rv && 'rv',
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Eyebrow + h2 + optional lead, as the design's `.sec-head`. */
export function SecHead({
  eyebrow,
  title,
  lead,
  className,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn('mb-14 max-w-190', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className='rv mt-4 text-[clamp(32px,3.7vw,52px)] tracking-[-.035em]'>{title}</h2>
      {lead && <p className='rv mt-[18px] max-w-150 text-[17px] text-dim'>{lead}</p>}
      {children}
    </div>
  );
}

export const btnRed = cn(
  'group inline-flex items-center gap-2.5 rounded-full border-none bg-red px-[30px] py-[17px] text-[15.5px] font-semibold text-white',
  'shadow-[0_14px_36px_-14px_rgba(255,57,81,.75)] transition-[translate,box-shadow] duration-[220ms] ease-rv',
  'hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-14px_rgba(255,57,81,.85)]',
);

export function Arrow() {
  return <span className='transition-transform duration-[220ms] group-hover:translate-x-1'>→</span>;
}

export function BtnRed({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn(btnRed, className)}>
      {children} <Arrow />
    </Link>
  );
}

export function BtnGhost({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 border-b-[1.5px] border-line-2 pb-[3px] text-[15px] font-semibold text-ink transition-colors hover:border-red',
        className,
      )}
    >
      {children}
    </Link>
  );
}

const MARK_DOTS = [
  [7, 22],
  [7, 17.5],
  [12, 22],
  [12, 17.5],
  [12, 13],
  [17, 22],
  [17, 17.5],
  [17, 13],
  [17, 8.5],
  [22, 22],
  [22, 17.5],
  [22, 13],
  [22, 8.5],
  [22, 5],
];

export function Brand({ className }: { className?: string }) {
  return (
    <Link href='/' className={cn('flex items-center gap-[11px] font-display text-[21px] font-extrabold tracking-[-.03em]', className)}>
      <span className='relative size-[30px] shrink-0 rounded-lg bg-red'>
        <svg viewBox='0 0 30 30' className='absolute inset-0 size-full' aria-hidden='true'>
          <g fill='#fff'>
            {MARK_DOTS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r='1.5' />
            ))}
          </g>
        </svg>
      </span>
      Advertisr.
    </Link>
  );
}

/** Red round check, used in comparison rows and lists. */
export function Check({ className, size = 22 }: { className?: string; size?: number }) {
  return (
    <svg className={cn('shrink-0', className)} width={size} height={size} viewBox='0 0 22 22' aria-hidden='true'>
      <circle cx='11' cy='11' r='11' fill='#FF3951' />
      <path d='M6.2 11.4l3.1 3.1 6.5-6.8' fill='none' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

/** Dotted grid + two soft blobs behind a hero. */
export function Ambient() {
  return (
    <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
      <div className='absolute inset-0 bg-[radial-gradient(rgba(14,14,18,.13)_1px,transparent_1.4px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_0%,transparent_75%)]' />
      <div className='absolute -top-[280px] -left-[200px] size-[860px] rounded-full bg-[radial-gradient(circle,rgba(255,57,81,.13),rgba(255,57,81,0)_64%)] blur-[10px]' />
      <div className='absolute -right-[220px] -bottom-[340px] size-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,150,120,.16),rgba(255,150,120,0)_66%)] blur-[10px]' />
    </div>
  );
}

export function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' aria-hidden='true'>
      <path
        fill='#4285F4'
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
      />
      <path
        fill='#34A853'
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
      />
      <path
        fill='#FBBC05'
        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
      />
      <path
        fill='#EA4335'
        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
      />
    </svg>
  );
}

/** Animated number: <SiteEffects> counts from 0 up to `to` once on screen. */
export function Count({ to }: { to: number }) {
  return <span data-to={to}>0</span>;
}

/** "Home / … / Current" breadcrumb above a hero title. The last item has no href. */
export function Crumb({ items }: { items: ([string, string] | [string])[] }) {
  return (
    <div className='rv mb-[22px] flex flex-wrap items-center gap-[9px] text-[13px] text-dim-2'>
      <Link href='/' className='hover:text-red-ink'>
        Home
      </Link>
      {items.map(([label, href]) => (
        <Fragment key={label}>
          <span>/</span>
          {href ? (
            <Link href={href} className='hover:text-red-ink'>
              {label}
            </Link>
          ) : (
            <span className='text-ink'>{label}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
