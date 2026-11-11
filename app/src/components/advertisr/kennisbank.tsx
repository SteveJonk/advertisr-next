'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { ghost } from './ui';

export type FilterArticle = { _id: string; text: string; category: string | null };

const PAGE = 9;

type Filter = {
  q: string;
  setQ: (q: string) => void;
  cat: number;
  setCat: (i: number) => void;
  shown: (id: string) => boolean;
  more: (() => void) | null;
};
const FilterCtx = createContext<Filter | null>(null);
const useFilter = () => useContext(FilterCtx)!;

/**
 * Search + category state for the kennisbank. `categories[0]` is the "all" pill.
 * Articles in `paged` show PAGE at a time (of those that match); `more` reveals the next PAGE.
 * Everything below only hides, never unmounts: a remounted `.rv` element is
 * never observed again by SiteEffects and stays invisible.
 */
export function ArticleFilter({
  articles,
  categories,
  paged = [],
  children,
}: {
  articles: FilterArticle[];
  categories: string[];
  paged?: string[];
  children: ReactNode;
}) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState(0);
  const [limit, setLimit] = useState(PAGE);
  const value = useMemo(() => {
    const words = q.toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const ids = new Set(
      articles.filter((a) => (cat === 0 || a.category === categories[cat]) && words.every((w) => a.text.includes(w))).map((a) => a._id),
    );
    const matches = paged.filter((id) => ids.has(id));
    matches.slice(limit).forEach((id) => ids.delete(id));
    return {
      q,
      setQ: (v: string) => (setQ(v), setLimit(PAGE)),
      cat,
      setCat: (i: number) => (setCat(i), setLimit(PAGE)),
      shown: (id: string) => ids.has(id),
      more: matches.length > limit ? () => setLimit((l) => l + PAGE) : null,
    };
  }, [q, cat, limit, articles, categories, paged]);
  return <FilterCtx.Provider value={value}>{children}</FilterCtx.Provider>;
}

/** "Load more" button; hidden once every matching paged article is shown. */
export function LoadMore({ className, children }: { className?: string; children: ReactNode }) {
  const { more } = useFilter();
  return (
    <div className={cn(className, !more && 'hidden')}>
      <button type='button' onClick={more ?? undefined} className={cn(ghost, 'cursor-pointer bg-transparent')}>
        {children}
      </button>
    </div>
  );
}

/** Hides a card that doesn't match; `contents` keeps it a direct grid item. */
export function FilterItem({ id, children }: { id: string; children: ReactNode }) {
  return <div className={useFilter().shown(id) ? 'contents' : 'hidden'}>{children}</div>;
}

/** Hides a whole section when none of its articles match. */
export function FilterGroup({ ids, children }: { ids: string[]; children: ReactNode }) {
  return <div className={ids.some(useFilter().shown) ? 'contents' : 'hidden'}>{children}</div>;
}

/** Shown only when nothing matches. */
export function FilterEmpty({ ids, children }: { ids: string[]; children: ReactNode }) {
  return <div className={ids.some(useFilter().shown) ? 'hidden' : 'contents'}>{children}</div>;
}

export function SearchBox({ label, placeholder, button }: { label?: string; placeholder?: string; button?: string }) {
  const { q, setQ } = useFilter();
  return (
    <form
      role='search'
      onSubmit={(e) => e.preventDefault()}
      className='rv mt-[30px] flex max-w-130 items-center gap-3 rounded-full border border-line-2 bg-white py-2 pr-2 pl-[22px] shadow-[0_18px_36px_-26px_rgba(14,14,18,.35)]'
    >
      <input
        type='search'
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label={label}
        placeholder={placeholder}
        className='flex-1 border-none bg-transparent font-sans text-[14.5px] text-ink outline-none placeholder:text-dim-2'
      />
      <button type='submit' className='shrink-0 cursor-pointer rounded-full border-none bg-red px-5 py-[11px] font-display text-[13.5px] font-semibold text-white'>
        {button}
      </button>
    </form>
  );
}

/** Category pills; the first one shows every category. */
export function Pills({ items }: { items: string[] }) {
  const { cat: on, setCat: setOn } = useFilter();
  return (
    <div className='rv mt-[38px] flex flex-wrap gap-2.5'>
      {items.map((label, i) => (
        <button
          key={label}
          type='button'
          onClick={() => setOn(i)}
          aria-pressed={i === on}
          className={cn(
            'cursor-pointer rounded-full border px-[18px] py-[9px] font-display text-[13.5px] font-semibold whitespace-nowrap transition-all duration-[220ms]',
            i === on ? 'border-red bg-red text-white' : 'border-line-2 bg-white text-dim hover:bg-soft hover:text-ink',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

