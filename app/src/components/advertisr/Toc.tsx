'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

/** Sticky table of contents with scrollspy; a toggle button replaces the label below 900px. */
export function Toc({ label, items }: { label?: string; items: [id: string, label: string][] }) {
  const [active, setActive] = useState<string>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-110px 0px -70% 0px', threshold: 0 },
    );
    items.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, [items]);

  return (
    <aside className='sticky top-[110px] max-[900px]:static max-[900px]:mb-[30px]'>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className='hidden w-full cursor-pointer items-center justify-between rounded-xl border border-line-2 bg-white px-[18px] py-3.5 font-display text-sm font-semibold text-ink max-[900px]:flex'
      >
        {label} <span className={cn('transition-transform duration-[250ms]', open && 'rotate-180')}>▾</span>
      </button>
      <div className='mb-3.5 text-[11px] font-bold tracking-[.1em] text-dim-2 uppercase max-[900px]:hidden'>{label}</div>
      <nav className={cn('flex flex-col gap-0.5 border-l-[1.5px] border-line pl-4 max-[900px]:mt-3.5', !open && 'max-[900px]:hidden')}>
        {items.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "relative block py-[7px] text-[13px] leading-[1.4] transition-colors duration-200 before:absolute before:inset-y-0 before:-left-[17.5px] before:w-[1.5px] before:origin-top before:bg-red before:transition-transform before:duration-[250ms] before:content-['']",
              active === id ? 'font-semibold text-red-ink before:scale-y-100' : 'text-dim before:scale-y-0 hover:text-ink',
            )}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
