import type { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import Image from '@/components/ui/Image';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { CaseCard } from '@/components/advertisr/CaseCard';
import { Animated, pic } from '@/components/advertisr/cms';
import { prose, proseComponents } from '@/components/advertisr/prose';
import { CtaBand, frame, ServiceHero } from '@/components/advertisr/service';
import { Eyebrow, Sec, SecHead, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';
import { breadcrumbJsonLd, jsonLdGraph } from '@/lib/json-ld';
import { pathForSlug } from '@/lib/links';
import { getSite } from '@/lib/site';
import { client, safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { seoMetadata } from '@/sanity/metadata';
import { CASE_QUERY, CASE_SLUGS_QUERY } from '@/sanity/queries';
import type { CASE_SLUGS_QUERY_RESULT } from '@/sanity/sanity.types';

type Props = { params: Promise<{ slug: string }> };

/** Where the breadcrumb's middle step goes: the page with the full results list. */
const RESULTS_PATH = '/resultaten';

const getCase = (slug: string) => client.fetch(CASE_QUERY, { slug }, sanityCache);

export async function generateStaticParams() {
  const cases = (await safeFetch<CASE_SLUGS_QUERY_RESULT>(CASE_SLUGS_QUERY, {}, sanityCache)) ?? [];
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCase(slug);
  if (!c) return { title: (await getSite()).ui.notFoundMetaTitle, robots: { index: false } };
  return {
    ...seoMetadata({ ...c.seo, description: c.seo?.description || c.summary }, c.headline || c.name, 'article'),
    alternates: { canonical: pathForSlug(slug, 'caseStudy') },
  };
}

/** One case study: hero from the card fields, the results, the optional full story, then the other cases. */
export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const [c, site] = await Promise.all([getCase(slug), getSite()]);
  if (!c) notFound();

  const { ui } = site;
  const path = pathForSlug(slug, 'caseStudy');
  const photo = pic(c.image, 1200);
  const cta = ui.ctaLabel ? { label: ui.ctaLabel, href: '/groeiplan' } : null;
  const stats = c.stats ?? [];

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          breadcrumbJsonLd(path, [
            { name: ui.crumbCases ?? '', path: RESULTS_PATH },
            { name: c.name, path },
          ]),
        ])}
      />

      <ServiceHero
        home={ui.crumbHome}
        crumbs={[[ui.crumbCases ?? '', RESULTS_PATH], [c.name]]}
        eyebrow={c.eyebrow || c.category}
        title={c.headline || c.name}
        sub={c.summary}
        primary={cta}
        ghost={null}
        ticks={c.tags ?? []}
        visual={
          <div className={frame}>
            <div className='relative z-2 h-[430px] overflow-hidden rounded-[18px] shadow-[0_40px_80px_-36px_rgba(14,14,18,.5)] max-dsk:h-[390px] max-sm:h-75'>
              {photo && <Image src={photo.src} alt={photo.alt} fill priority sizes='(max-width:1080px) 100vw, 540px' className='object-cover' />}
              {c.badge && (
                <div className='absolute top-4 left-4 z-3 rounded-full border border-line bg-white/92 px-3.5 py-1.5 font-display text-[11px] font-bold tracking-[.04em] text-ink uppercase backdrop-blur-[6px]'>
                  {c.badge}
                </div>
              )}
            </div>
          </div>
        }
      />

      <Sec className='border-t border-line bg-soft'>
        <Wrap>
          {!!stats.length && (
            <>
              <Eyebrow>{ui.caseResultsEyebrow}</Eyebrow>
              <div
                className={cn(
                  'mt-6 grid gap-4 max-sm:grid-cols-1',
                  stats.length >= 4 ? 'grid-cols-4 max-dsk:grid-cols-2' : stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3 max-dsk:grid-cols-1',
                )}
              >
                {stats.map((s) => (
                  <div
                    key={s._key}
                    className='rv rounded-2xl border border-line bg-white px-7 py-8 hover:border-red/40 hover:shadow-[0_20px_40px_-26px_rgba(255,57,81,.45)]'
                  >
                    <div className='font-display text-[clamp(38px,4vw,52px)] leading-none font-bold tracking-[-.04em] text-ink'>
                      <Animated value={s.value} />
                    </div>
                    <div className='mt-3 text-[14px] leading-[1.5] text-dim'>{s.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!!c.body?.length && (
            <article className={cn(prose, 'mx-auto pt-20 max-sm:pt-14')}>
              <PortableText value={c.body} components={proseComponents} />
            </article>
          )}

          {(ui.caseCtaTitle || cta) && <CtaBand title={ui.caseCtaTitle} sub={ui.caseCtaText} cta={cta} />}
        </Wrap>
      </Sec>

      {!!c.others?.length && (
        <Sec>
          <Wrap>
            <SecHead eyebrow={ui.moreCasesEyebrow} title={ui.moreCasesTitle} />
            <div className={cn('grid gap-4 max-sm:grid-cols-1', c.others.length >= 3 ? 'grid-cols-3 max-dsk:grid-cols-2' : 'grid-cols-2')}>
              {c.others.map((o) => (
                <CaseCard
                  key={o._id}
                  href={o.slug ? pathForSlug(o.slug, 'caseStudy') : '#'}
                  img={pic(o.image, 800)?.src}
                  cat={o.category}
                  title={o.name}
                  linkLabel={ui.caseCardLink}
                  stats={(o.stats ?? []).slice(0, 2).map((s) => [<Animated key={s._key} value={s.value} />, s.label ?? ''])}
                />
              ))}
            </div>
          </Wrap>
        </Sec>
      )}
    </>
  );
}
