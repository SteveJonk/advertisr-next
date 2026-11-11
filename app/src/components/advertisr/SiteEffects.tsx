'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * The designs' page script, ported once for every page:
 * - `.rv` reveal: sets `data-in` on scroll-in, staggered 70ms per `.rv` sibling
 * - `[data-to]` count-up (1.1s ease-out cubic)
 * - `[data-depth]` parallax inside a `[data-parallax]` stack
 * - `[data-tilt]` cards get --mx/--my for their pointer-following glow
 * Server-rendered sections stay static; this only toggles attributes.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute('data-in', '');
          io.unobserve(e.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    document.querySelectorAll<HTMLElement>('.rv:not([data-in])').forEach((el) => {
      const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains('rv')) : [];
      const idx = sibs.indexOf(el);
      el.style.transitionDelay = `${idx > 0 ? Math.min(idx, 5) * 70 : 0}ms`;
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    const cio = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          cio.unobserve(el);
          const to = parseFloat(el.dataset.to ?? '');
          if (Number.isNaN(to)) continue;
          if (reduce) {
            el.textContent = String(to);
            continue;
          }
          let t0: number | null = null;
          const tick = (ts: number) => {
            t0 ??= ts;
            const p = Math.min((ts - t0) / 1100, 1);
            el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    document.querySelectorAll('[data-to]').forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((c) => {
      const move = (e: PointerEvent) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        c.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      c.addEventListener('pointermove', move);
      cleanups.push(() => c.removeEventListener('pointermove', move));
    });

    const stacks = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    if (!reduce && stacks.length) {
      let raf: number | null = null;
      const apply = () => {
        raf = null;
        for (const stack of stacks) {
          const r = stack.getBoundingClientRect();
          const prog = (window.innerHeight / 2 - (r.top + r.height / 2)) / window.innerHeight;
          stack.querySelectorAll<HTMLElement>('[data-depth]').forEach((l) => {
            const d = parseFloat(l.dataset.depth ?? '') || 0;
            l.style.transform = `translate3d(0,${(prog * d * 260).toFixed(2)}px,0)`;
          });
        }
      };
      const onScroll = () => {
        raf ??= requestAnimationFrame(apply);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      apply();
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
