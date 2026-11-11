import { defineQuery } from 'next-sanity';

/** A button: pull the referenced page's type and slug up so `resolveHref` can build the path. */
const link = /* groq */ `{
  ...,
  internalLink->{ _type, "slug": slug.current }
}`;

const articleCard = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  image,
  featured,
  minutes,
  updatedAt,
  "hasBody": count(body) > 0,
  category->{ title, color, icon },
  author->{ name, photo }
}`;

const faqs = /* groq */ `faqs[]->{ _id, question, answer }`;

const caseDocs = /* groq */ `cases[]->{ _id, name, category, badge, eyebrow, headline, summary, image, stats, tags, url }`;

/**
 * One page and its blocks. Blocks are spread wholesale (`...`); what follows
 * resolves the parts that are references or live in other documents:
 * buttons, FAQs, case studies, team members, client logos, reviews, articles.
 */
export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    seo,
    content[]{
      ...,
      primaryCta${link},
      secondaryCta${link},
      cta${link},
      band{ ..., cta${link} },
      closing{ ..., cta${link} },
      _type == "faqs" => { "faqs": ${faqs} },
      _type == "caseCards" => { "cases": ${caseDocs} },
      _type == "caseList" => { "cases": ${caseDocs} },
      _type == "teamGrid" => { "members": members[]->{ _id, name, role, bio, photo } },
      _type == "logos" => {
        "clients": *[_type == "client" && defined(logo.asset)] | order(coalesce(sortOrder, 999) asc){ _id, name, logo }
      },
      _type == "reviews" => {
        "items": *[_type == "review" && hidden != true] | order(coalesce(sortOrder, 9999) asc, publishedAt desc)[0...30]{ _id, name, text, tone }
      },
      _type == "articleIndex" => {
        "articles": *[_type == "article" && defined(slug.current)] | order(coalesce(updatedAt, publishedAt, _createdAt) desc)${articleCard},
        "categories": *[_type == "articleCategory"] | order(coalesce(sortOrder, 999) asc).title
      }
    }
  }
`);

export const PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)]{ "slug": slug.current, _updatedAt }
`);

export const ARTICLE_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    intro,
    excerpt,
    minutes,
    publishedAt,
    updatedAt,
    featured,
    crumbLabel,
    tags,
    sources,
    ctaTitle,
    ctaText,
    seo,
    category->{ title, color, icon },
    author->{ name, photo, authorTitle, authorBio },
    body[]{ ..., _type == "inlineCta" => { cta${link} } },
    "faqs": ${faqs},
    "related": related[]->${articleCard}
  }
`);

/** Only articles with a body get a page; the rest are cards. */
export const ARTICLE_SLUGS_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current) && count(body) > 0]{ "slug": slug.current, _updatedAt }
`);

/** Everything around the content: site details, interface text, nav, footer and the Google score. */
export const SITE_QUERY = defineQuery(`{
  "info": *[_type == "siteInformation" && _id == "siteInformation"][0]{
    name,
    defaultTitle,
    description,
    language,
    email,
    phone,
    city,
    address,
    addressCountry,
    socialLinks,
    "logoUrl": logo.asset->url,
    interfaceText
  },
  "nav": *[_type == "navigation" && _id == "navigation"][0]{ links, ctaLabel, landingCtaLabel },
  "footer": *[_type == "footer" && _id == "footer"][0]{ columns, legal, copyright },
  "google": *[_type == "googleReviews" && _id == "googleReviews"][0]{ rating, userRatingCount, googleMapsUri }
}`);
