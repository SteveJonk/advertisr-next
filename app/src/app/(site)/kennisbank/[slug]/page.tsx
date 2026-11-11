import type { Metadata } from 'next';
import { PortableText, type PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { ArticleCard, shortDate, type ArticleCardData } from '@/components/advertisr/ArticleCard';
import { btn, pic, Rich, type Inline } from '@/components/advertisr/cms';
import { CtaBand, FaqList } from '@/components/advertisr/service';
import { Share } from '@/components/advertisr/Share';
import { Toc } from '@/components/advertisr/Toc';
import { Ambient, Arrow, btnRed, Crumb, Eyebrow, Wrap } from '@/components/advertisr/ui';
import { cn } from '@/lib/cn';
import { absoluteUrl, breadcrumbJsonLd, faqQuestions, jsonLdGraph } from '@/lib/json-ld';
import { pathForSlug } from '@/lib/links';
import { getSite } from '@/lib/site';
import { client, safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { seoMetadata } from '@/sanity/metadata';
import { ARTICLE_QUERY, ARTICLE_SLUGS_QUERY } from '@/sanity/queries';
import type { ARTICLE_QUERY_RESULT, ARTICLE_SLUGS_QUERY_RESULT } from '@/sanity/sanity.types';

type Props = { params: Promise<{ slug: string }> };
type Article = NonNullable<ARTICLE_QUERY_RESULT>;

const getArticle = (slug: string) => client.fetch(ARTICLE_QUERY, { slug }, sanityCache);

export async function generateStaticParams() {
  const articles = (await safeFetch<ARTICLE_SLUGS_QUERY_RESULT>(ARTICLE_SLUGS_QUERY, {}, sanityCache)) ?? [];
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article?.body?.length) return { title: (await getSite()).ui.notFoundMetaTitle, robots: { index: false } };
  return {
    ...seoMetadata({ ...article.seo, description: article.seo?.description || article.excerpt }, article.title, 'article'),
    alternates: { canonical: pathForSlug(slug, 'article') },
  };
}

/** "Wat kost Google Ads?" → "wat-kost-google-ads", the h2's id for the table of contents. */
const anchor = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

type Block = NonNullable<Article['body']>[number];
const textOf = (b: Block) => ('children' in b ? (b.children ?? []).map((c) => c.text).join('') : '');

/** Long-form body styles, as the design's `.art-prose`. */
const prose = cn(
  'max-w-170 text-[17px] leading-[1.78] text-[#2B2A33]',
  '[&_strong]:font-semibold [&_strong]:text-ink',
  '[&>p]:mb-5 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-[22px] [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-[22px] [&_li]:mb-[9px] [&_li]:pl-1',
  '[&>h2]:mt-13 [&>h2]:mb-[18px] [&>h2]:scroll-mt-[110px] [&>h2]:text-[clamp(24px,2.6vw,30px)] [&>h2]:tracking-[-.025em] [&>h2]:text-ink',
  '[&>h3]:mt-9 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:text-ink [&_a]:underline [&_a]:decoration-line-2 [&_a:hover]:text-red',
);

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={anchor(textOf(value as Block))}>{children}</h2>,
  },
  marks: {
    link: ({ children, value }) => <a href={value?.href}>{children}</a>,
  },
  types: {
    callout: ({ value }: { value: { variant?: string; label?: string; text?: Inline } }) =>
      value.variant === 'definition' ? (
        <div className='rv my-7 rounded-[14px] border border-l-[3px] border-line border-l-red bg-soft px-[22px] py-[18px]'>
          <div className='mb-1.5 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>{value.label}</div>
          <p className='text-[14.5px] leading-[1.6] text-dim'>
            <Rich value={value.text} />
          </p>
        </div>
      ) : (
        <div className='rv relative mt-[30px] mb-11 rounded-2xl border border-red/30 bg-[linear-gradient(155deg,#FFF1F3,#fff)] px-[26px] py-6 shadow-[0_20px_40px_-34px_rgba(255,57,81,.5)]'>
          <div className='mb-2.5 flex items-center gap-2 text-[11.5px] font-bold tracking-[.06em] text-red-ink uppercase'>{value.label}</div>
          <p className='text-[15.5px] leading-[1.6] text-ink'>
            <Rich value={value.text} />
          </p>
        </div>
      ),
    pullQuote: ({ value }: { value: { text?: string } }) => (
      <div className='rv relative my-9 rounded-2xl border border-l-[3px] border-line border-l-red bg-soft py-[30px] pr-8 pl-10'>
        <p className='font-display text-[19px] leading-[1.45] font-semibold tracking-[-.01em] text-ink'>{value.text}</p>
      </div>
    ),
    statGrid: ({ value }: { value: { stats?: { _key: string; value?: string; label?: string }[] } }) => (
      <div className='rv my-[30px] grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-line bg-line shadow-[0_20px_40px_-34px_rgba(14,14,18,.3)] max-[560px]:grid-cols-1'>
        {(value.stats ?? []).map((s) => (
          <div key={s._key} className='bg-white px-4 py-[18px] text-center'>
            <div className='font-display text-[22px] font-bold tracking-[-.02em] text-ink'>{s.value}</div>
            <div className='mt-1 text-[11.5px] leading-[1.4] text-dim'>{s.label}</div>
          </div>
        ))}
      </div>
    ),
    inlineCta: ({ value }: { value: { eyebrow?: string; title?: string; text?: string; cta?: Parameters<typeof btn>[0] } }) => {
      const cta = btn(value.cta);
      return (
        <div className="rv relative isolate my-11 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(420px_200px_at_100%_0%,rgba(255,57,81,.5),transparent_70%),radial-gradient(360px_180px_at_0%_120%,rgba(255,120,90,.2),transparent_70%),linear-gradient(135deg,#1c1c24_0%,#0d0d12_100%)] px-[30px] py-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_30px_60px_-28px_rgba(14,14,18,.55),0_50px_80px_-50px_rgba(255,57,81,.5)] before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgba(255,255,255,.13)_1px,transparent_1.4px)] before:bg-size-[20px_20px] before:mask-[linear-gradient(100deg,transparent_40%,#000)] before:content-['']">
          <div className='relative z-2'>
            <div className='mb-2 flex items-center gap-[7px] text-[11px] font-bold tracking-[.1em] text-[#FF8A98] uppercase'>{value.eyebrow}</div>
            <h4 className='font-display text-[19px] font-bold tracking-[-.02em] text-white'>{value.title}</h4>
            <p className='mt-1.5 text-sm text-white/72'>{value.text}</p>
          </div>
          {cta && (
            <Link href={cta.href} className={cn(btnRed, 'relative z-2 shrink-0 px-6! py-3.5! text-[14.5px]! hover:bg-white hover:text-red-ink')}>
              {cta.label} <Arrow />
            </Link>
          )}
        </div>
      );
    },
  },
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const [article, site] = await Promise.all([getArticle(slug), getSite()]);
  // An article without a body is a card in the kennisbank, not a page.
  if (!article?.body?.length) notFound();

  const { ui } = site;
  const path = pathForSlug(slug, 'article');
  const faqs = (article.faqs ?? []).map((f) => ({ q: f.question, a: f.answer }));
  const toc: [string, string][] = article.body.filter((b) => 'style' in b && b.style === 'h2').map((b) => [anchor(textOf(b)), textOf(b)]);
  if (faqs.length && ui.faqEyebrow) toc.push(['faq', ui.faqEyebrow]);
  const avatar = pic(article.author?.photo, 136);
  const crumb = article.crumbLabel || article.title;

  const jsonLd = jsonLdGraph([
    {
      '@type': 'Article',
      '@id': `${absoluteUrl(path)}#article`,
      headline: article.title,
      description: article.seo?.description || article.excerpt,
      author: article.author && { '@type': 'Person', name: article.author.name, jobTitle: article.author.authorTitle },
      publisher: { '@id': `${absoluteUrl('/')}#organization` },
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: site.language,
      mainEntityOfPage: absoluteUrl(path),
    },
    breadcrumbJsonLd(path, [
      { name: site.ui.crumbKennisbank ?? '', path: '/kennisbank' },
      { name: crumb, path },
    ]),
    faqs.length ? { '@type': 'FAQPage', '@id': `${absoluteUrl(path)}#faq`, mainEntity: faqQuestions(article.faqs) } : null,
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className='relative overflow-hidden pt-[140px] pb-10'>
        <div className='absolute inset-0 mask-[linear-gradient(#000_65%,transparent)]'>
          <Ambient />
        </div>
        <Wrap>
          <div className='mx-auto max-w-205 text-left'>
            <Crumb
              home={ui.crumbHome}
              items={[[ui.crumbKennisbank ?? '', '/kennisbank'], ...(article.category ? [[article.category.title, '/kennisbank'] as [string, string]] : []), [crumb]]}
            />
            {article.featured && (
              <div className='rv inline-flex items-center gap-[7px] rounded-full border border-red/30 bg-red-tint px-[15px] py-[7px] font-display text-xs font-bold text-red-ink'>
                {ui.pillarBadge} · {article.category?.title}
              </div>
            )}
            <h1 className='rv mt-5 mb-[22px] text-[clamp(30px,4.4vw,50px)] leading-[1.08] tracking-[-.04em] text-ink'>{article.title}</h1>
            <p className='rv max-w-170 text-lg leading-[1.6] text-dim'>{article.intro}</p>
            <div className='rv mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-line py-5'>
              {article.author && (
                <div className='flex items-center gap-3'>
                  {avatar && <Image src={avatar.src} alt={article.author.name} width={44} height={44} className='size-11 rounded-full border border-line-2 object-cover' />}
                  <div>
                    <div className='font-display text-[14.5px] font-bold'>{article.author.name}</div>
                    <div className='text-xs text-dim'>{article.author.authorTitle}</div>
                  </div>
                </div>
              )}
              <div className='flex flex-wrap gap-[22px] text-[12.5px] text-dim [&_b]:font-semibold [&_b]:text-ink'>
                {article.publishedAt && (
                  <div>
                    {ui.published} <b>{shortDate(article.publishedAt, site.language)}</b>
                  </div>
                )}
                {article.updatedAt && (
                  <div>
                    {ui.lastUpdated} <b>{shortDate(article.updatedAt, site.language)}</b>
                  </div>
                )}
                {article.minutes && (
                  <div>
                    <b>{article.minutes}</b> {ui.readingTime}
                  </div>
                )}
              </div>
              <Share url={absoluteUrl(path)} linkedInLabel={ui.shareLinkedIn} copyLabel={ui.copyLink} copiedLabel={ui.linkCopied} />
            </div>
          </div>
        </Wrap>
      </header>

      <Wrap>
        <div className='mx-auto grid max-w-270 grid-cols-[230px_1fr] items-start gap-15 pt-14 max-[900px]:grid-cols-1 max-[900px]:pt-6'>
          <Toc label={ui.toc} items={toc} />
          <article className={prose}>
            <PortableText value={article.body} components={components} />

            {!!article.sources?.length && (
              <div className='rv mt-[50px] border-t border-line pt-[26px]'>
                <div className='mb-3 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>{ui.sources}</div>
                <ol className='list-decimal pl-5 text-[13px] leading-normal text-dim [&_a]:underline [&_a]:decoration-line-2 [&_a:hover]:text-red [&_li]:mb-[7px]'>
                  {article.sources.map((s) => (
                    <li key={s._key}>
                      {s.url ? (
                        <a href={s.url} target='_blank' rel='noopener'>
                          {s.label}
                        </a>
                      ) : (
                        s.label
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {!!article.tags?.length && (
              <div className='rv mt-11 flex flex-wrap gap-2'>
                {article.tags.map((t) => (
                  <Link
                    key={t}
                    href='/kennisbank'
                    className='rounded-full border border-line bg-white px-[15px] py-2 text-[12.5px] text-dim transition-all duration-200 hover:border-red hover:text-red-ink'
                  >
                    {t}
                  </Link>
                ))}
              </div>
            )}

            {article.author?.authorBio && (
              <div className='rv mt-[50px] flex gap-5 rounded-[18px] border border-line bg-soft p-[26px]'>
                {avatar && <Image src={avatar.src} alt={article.author.name} width={68} height={68} className='size-[68px] shrink-0 rounded-full object-cover' />}
                <div>
                  <div className='mb-1.5 text-[11px] font-bold tracking-[.08em] text-dim-2 uppercase'>{ui.aboutAuthor}</div>
                  <h4 className='font-display text-[17px] font-bold'>{article.author.name}</h4>
                  <div className='mt-[3px] mb-2.5 text-[12.5px] font-semibold text-red-ink'>{article.author.authorTitle}</div>
                  <p className='text-[13.5px] leading-[1.55] text-dim'>{article.author.authorBio}</p>
                </div>
              </div>
            )}
          </article>
        </div>
      </Wrap>

      {!!faqs.length && (
        <section id='faq' className='relative z-2 mx-auto max-w-270 scroll-mt-[100px] py-30 max-sm:py-20 max-[1120px]:px-10 max-sm:px-[22px]'>
          <Eyebrow>{ui.faqEyebrow}</Eyebrow>
          <h2 className='rv mt-4 text-[28px] tracking-[-.035em]'>{ui.faqTitle}</h2>
          <FaqList items={faqs} className='mt-[26px] max-w-170' />
        </section>
      )}

      {!!article.related?.length && (
        <section className='relative z-2 mx-auto mt-[70px] max-w-270 py-30 max-sm:py-20 max-[1120px]:px-10 max-sm:px-[22px]'>
          <Eyebrow>{ui.relatedEyebrow}</Eyebrow>
          <h2 className='rv mt-4 text-[26px] tracking-[-.035em]'>{ui.relatedTitle}</h2>
          <div className='mt-[34px] grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1'>
            {(article.related as ArticleCardData[]).map((a) => (
              <ArticleCard key={a._id} a={a} ui={ui} excerpt={false} />
            ))}
          </div>
        </section>
      )}

      {article.ctaTitle && (
        <section className='relative z-2 pb-[90px]'>
          <div className='mx-auto max-w-270 max-[1120px]:px-10 max-sm:px-[22px]'>
            <CtaBand className='mt-0!' title={article.ctaTitle} sub={article.ctaText} cta={{ label: ui.ctaLabel ?? '', href: '/groeiplan' }} />
          </div>
        </section>
      )}
    </>
  );
}
