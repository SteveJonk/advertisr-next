'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { cn } from '@/lib/cn';
import type { Site } from '@/lib/site';
import { Brand } from './ui';

/**
 * Fixed top bar; frosted once the page scrolls past 20px. Links hide below
 * 770px (tablets get the drawer). `landing` swaps the links for the Google score and
 * points the CTA at the hero form (/groeiplan). Elsewhere the CTA goes to
 * /groeiplan, or scrolls to the page's own #groeiplan form when it has one.
 * Up to 769px the links move into a drawer that slides in from the right.
 */
const cta =
  'rounded-full bg-ink px-5 py-[11px] text-sm font-semibold whitespace-nowrap text-white transition-[translate,box-shadow,background] duration-200 hover:-translate-y-px hover:bg-red hover:shadow-[0_10px_24px_-10px_rgba(255,57,81,.7)] max-sm:px-4 max-sm:py-2.5 max-sm:text-[13px]';

export function Nav({ site, landing = false }: { site: Pick<Site, 'name' | 'nav' | 'rating' | 'ui'>; landing?: boolean }) {
  const path = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the drawer is open: Esc closes, page scroll is locked, focus moves into it and back.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const burger = burgerRef.current;
    window.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      burger?.focus({ preventScroll: true });
    };
  }, [open]);

  const toForm = (e: MouseEvent) => {
    setOpen(false);
    const form = document.getElementById('groeiplan');
    if (!form) return;
    e.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', '#groeiplan');
  };

  const isActive = (l: Site['nav']['links'][number]) => l.match.includes(path) || (!l.href.includes('#') && l.href !== '/' && path.startsWith(l.href));
  const hrefOf = (l: Site['nav']['links'][number]) => (path === '/' ? l.href.replace('/#', '#') : l.href);

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-100 border-b border-transparent transition-[background,backdrop-filter,border-color] duration-300',
          stuck && 'border-line bg-white/86 backdrop-blur-[14px] backdrop-saturate-160',
        )}
      >
        <div className='mx-auto flex max-w-page items-center justify-between gap-6 px-10 py-5 max-sm:px-[22px]'>
          <Brand name={site.name} />
          {landing ? (
            site.rating && (
              <div className='flex items-center gap-2 font-display text-[13px] font-semibold text-dim max-[700px]:hidden'>
                <span className='tracking-[1px] text-star'>★★★★★</span> {site.rating} {site.ui.onGoogle}
              </div>
            )
          ) : (
            <div className='flex gap-[30px] text-[14.5px] font-medium text-dim max-dsk:gap-5 max-[770px]:hidden'>
              {site.nav.links.map((n) => (
                <Link
                  key={n.href}
                  href={hrefOf(n)}
                  className={cn(
                    'relative py-1 transition-colors hover:text-ink',
                    "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-red after:transition-[width] after:duration-[280ms] after:ease-rv after:content-[''] hover:after:w-full",
                    isActive(n) && 'text-ink',
                  )}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          )}
          <div className='flex items-center gap-2'>
            <Link href={landing ? '#plan' : '/groeiplan'} onClick={landing ? undefined : toForm} className={cn(cta, !landing && 'max-mob:hidden')}>
              {landing ? site.nav.landingCtaLabel : site.nav.ctaLabel}
            </Link>
            {!landing && (
              <button
                ref={burgerRef}
                type='button'
                aria-label='Menu'
                aria-expanded={open}
                aria-controls='mobile-menu'
                onClick={() => setOpen(true)}
                className='-mr-2.5 grid size-11 place-items-center rounded-full text-ink transition-colors hover:text-red min-[770px]:hidden'
              >
                <svg aria-hidden width='20' height='12' viewBox='0 0 20 12' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'>
                  <path d='M1 1h18M1 6h18M7 11h12' />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Outside <nav>: its backdrop-filter would make it the containing block of these fixed layers. */}
      {!landing && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className={cn(
              'fixed inset-0 z-110 bg-ink/40 backdrop-blur-[2px] transition-[opacity,visibility] duration-300 motion-reduce:transition-none min-[770px]:hidden',
              open ? 'visible opacity-100' : 'invisible opacity-0',
            )}
          />
          <div
            id='mobile-menu'
            role='dialog'
            aria-modal='true'
            aria-label='Menu'
            inert={!open}
            className={cn(
              'fixed inset-y-0 right-0 z-120 flex w-[min(86vw,380px)] flex-col bg-white px-[22px] pb-8 shadow-[-30px_0_60px_-30px_rgba(14,14,18,.35)] transition-[translate] duration-[420ms] ease-rv motion-reduce:transition-none min-[770px]:hidden',
              open ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <div className='flex items-center justify-between py-5'>
              <Brand name={site.name} />
              <button
                ref={closeRef}
                type='button'
                aria-label='Sluiten'
                onClick={() => setOpen(false)}
                className='-mr-2.5 grid size-11 place-items-center rounded-full text-ink transition-colors hover:text-red'
              >
                <svg aria-hidden width='16' height='16' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'>
                  <path d='M2 2l12 12M14 2L2 14' />
                </svg>
              </button>
            </div>
            <ul className='mt-4 flex flex-col'>
              {site.nav.links.map((n, i) => (
                <li
                  key={n.href}
                  style={{ transitionDelay: open ? `${120 + i * 40}ms` : '0ms' }}
                  className={cn(
                    'border-b border-line transition-[opacity,translate] duration-500 ease-rv motion-reduce:transition-none',
                    open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0',
                  )}
                >
                  <Link
                    href={hrefOf(n)}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between py-[18px] font-display text-[22px] font-semibold tracking-[-.01em] text-dim transition-colors hover:text-ink',
                      isActive(n) && 'text-ink',
                    )}
                  >
                    {n.label}
                    <span aria-hidden className={cn('size-1.5 rounded-full bg-red', !isActive(n) && 'opacity-0')} />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href='/groeiplan' onClick={toForm} className={cn(cta, 'mt-auto block py-3.5 text-center max-sm:py-3.5 max-sm:text-sm')}>
              {site.nav.ctaLabel}
            </Link>
          </div>
        </>
      )}
    </>
  );
}
