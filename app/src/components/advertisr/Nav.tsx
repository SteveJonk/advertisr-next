'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { NAV, NO_FORM_PATHS, SERVICES } from '@/lib/advertisr/nav';
import { Brand } from './ui';

function activeLabel(path: string) {
  if (SERVICES.some((s) => s.href === path)) return 'Diensten';
  return NAV.find((n) => !n.href.startsWith('/#') && path.startsWith(n.href))?.label;
}

/**
 * Fixed top bar; frosted once the page scrolls past 20px. Links hide below
 * 760px, as in the design. `landing` swaps the links for the Google score and
 * points the CTA at the hero form (/groeiplan).
 */
export function Nav({ landing = false }: { landing?: boolean }) {
  const path = usePathname();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = activeLabel(path);
  const ctaHref = NO_FORM_PATHS.some((p) => path.startsWith(p)) ? '/groeiplan' : '#groeiplan';

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-100 border-b border-transparent transition-[background,backdrop-filter,border-color] duration-300',
        stuck && 'border-line bg-white/86 backdrop-blur-[14px] backdrop-saturate-160',
      )}
    >
      <div className='mx-auto flex max-w-page items-center justify-between gap-6 px-10 py-5 max-sm:px-[22px]'>
        <Brand />
        {landing ? (
          <div className='flex items-center gap-2 font-display text-[13px] font-semibold text-dim max-[700px]:hidden'>
            <span className='tracking-[1px] text-star'>★★★★★</span> 5,0 op Google
          </div>
        ) : (
          <div className='flex gap-[30px] text-[14.5px] font-medium text-dim max-dsk:gap-5 max-sm:hidden'>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={path === '/' ? n.href.replace('/#', '#') : n.href}
                className={cn(
                  'relative py-1 transition-colors hover:text-ink',
                  "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-red after:transition-[width] after:duration-[280ms] after:ease-rv after:content-[''] hover:after:w-full",
                  active === n.label && 'text-ink',
                )}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
        <Link
          href={landing ? '#plan' : ctaHref}
          className='rounded-full bg-ink px-5 py-[11px] text-sm font-semibold whitespace-nowrap text-white transition-[translate,box-shadow,background] duration-200 hover:-translate-y-px hover:bg-red hover:shadow-[0_10px_24px_-10px_rgba(255,57,81,.7)] max-sm:px-4 max-sm:py-2.5 max-sm:text-[13px]'
        >
          {landing ? 'Gratis groeiplan aanvragen' : 'Ontvang mijn groeiplan'}
        </Link>
      </div>
    </nav>
  );
}
