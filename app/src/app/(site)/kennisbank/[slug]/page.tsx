import type { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import Image from '@/components/ui/Image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { ArticleCard, shortDate, type ArticleCardData } from '@/components/advertisr/ArticleCard';
import { pic } from '@/components/advertisr/cms';
import { anchor, prose, proseComponents as components, textOf } from '@/components/advertisr/prose';
import { CtaBand, FaqList } from '@/components/advertisr/service';
import { Share } from '@/components/advertisr/Share';
import { Toc } from '@/components/advertisr/Toc';
import { Ambient, Crumb, Eyebrow, Wrap } from '@/components/advertisr/ui';
import { absoluteUrl, breadcrumbJsonLd, faqQuestions, jsonLdGraph } from '@/lib/json-ld';
import { pathForSlug } from '@/lib/links';
import { getSite } from '@/lib/site';
import { client, safeFetch } from '@/sanity/client';
import { sanityCache } from '@/sanity/fetch';
import { seoMetadata } from '@/sanity/metadata';
import { ARTICLE_QUERY, ARTICLE_SLUGS_QUERY } from '@/sanity/queries';
import type { ARTICLE_SLUGS_QUERY_RESULT } from '@/sanity/sanity.types';

type Props = { params: Promise<{ slug: string }> };

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
