/** Pill strip that scrolls forever (doubled so the loop is seamless). */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className='relative z-2 overflow-hidden pt-[30px] pb-[34px] mask-[linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]'>
      <div className='flex w-max animate-marquee gap-3 motion-reduce:animate-none'>
        {[0, 1].map((copy) =>
          items.map((item) => (
            <div
              key={`${copy}-${item}`}
              aria-hidden={copy === 1 || undefined}
              className='flex items-center gap-2.5 rounded-full border border-ink/6 bg-white/75 px-5 py-[11px] font-sans text-[14.5px] font-medium whitespace-nowrap text-dim shadow-[0_8px_22px_-16px_rgba(14,14,18,.35),inset_0_1px_0_#fff] transition-[color,border-color] duration-200 hover:border-red/35 hover:text-ink'
            >
              <span className='size-1.5 shrink-0 rounded-full bg-red shadow-[0_0_0_3px_rgba(255,57,81,.15)]' />
              {item}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
