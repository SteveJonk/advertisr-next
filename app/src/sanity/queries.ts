import { defineQuery } from 'next-sanity';

/** A link: pull the referenced page's type and slug up so `resolveHref` can build the path. */
const link = /* groq */ `{
  ...,
  internalLink->{ _type, "slug": slug.current }
}`;

/**
 * Which spam check Form settings picked. Older documents only have the
 * `recaptchaEnabled` switch; they keep reCAPTCHA until a provider is chosen.
 */
const captchaProvider = /* groq */ `"captchaProvider": coalesce(captchaProvider, select(recaptchaEnabled => "recaptcha", "none"))`;

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

/**
 * Everything the renderer needs to draw a form. Fields are flat objects, so
 * they are spread wholesale; only the redirect button needs resolving.
 */
const formDoc = /* groq */ `form->{
  _id,
  title,
  showTitle,
  mode,
  fields[],
  steps[]{ title, fields[] },
  submitButtonText,
  nextButtonText,
  backButtonText,
  note,
  successTitle,
  successBody,
  redirectAfterSubmit,
  redirectLink${link}
}`;

const faqs = /* groq */ `faqs[]->{ _id, question, answer }`;

const caseFields = /* groq */ `_id, name, "slug": slug.current, category, badge, eyebrow, headline, summary, image, stats, tags`;
const caseDocs = /* groq */ `cases[]->{ ${caseFields} }`;

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
      defined(form) => { "form": ${formDoc} },
      defined(newsletter) => { newsletter{ ..., "form": ${formDoc} } },
      _type == "contactHero" => { quick[]${link} },
      _type == "stages" => { stages[]{ ..., links[]${link} } },
      _type == "contactMethods" => { methods[]${link} },
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
    body[]{ ..., _type == "block" => { markDefs[]${link} }, _type == "inlineCta" => { cta${link} } },
    "faqs": ${faqs},
    "related": related[defined(@->_id)]->${articleCard}
  }
`);

/** Only articles with a body get a page; the rest are cards. */
export const ARTICLE_SLUGS_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current) && count(body) > 0]{ "slug": slug.current, _updatedAt }
`);

export const CASE_QUERY = defineQuery(`
  *[_type == "caseStudy" && slug.current == $slug][0]{
    ${caseFields},
    seo,
    body[]{ ..., _type == "block" => { markDefs[]${link} }, _type == "inlineCta" => { cta${link} } },
    "others": *[_type == "caseStudy" && defined(slug.current) && slug.current != $slug] | order(coalesce(sortOrder, 999) asc)[0...3]{ ${caseFields} }
  }
`);

export const CASE_SLUGS_QUERY = defineQuery(`
  *[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current, _updatedAt }
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
  "nav": *[_type == "navigation" && _id == "navigation"][0]{ links[]${link}, ctaLabel, landingCtaLabel },
  "footer": *[_type == "footer" && _id == "footer"][0]{ columns[]{ title, links[]${link} }, legal[]${link}, copyright },
  "google": *[_type == "googleReviews" && _id == "googleReviews"][0]{ rating, userRatingCount, googleMapsUri },
  // The public half of Form settings; the secrets stay in FORM_SETTINGS_QUERY.
  "forms": *[_type == "formGeneralSettings" && _id == "formGeneralSettings"][0]{
    ${captchaProvider},
    recaptchaSiteKey,
    turnstileSiteKey,
    formText
  }
}`);

/**
 * What the submit route needs: the mail settings plus a flat list of every
 * field the form declares (both modes collapse to one list). That list is the
 * server's allow-list: a key the browser posts that is not in it never
 * reaches the mail.
 */
export const FORM_QUERY = defineQuery(`
  *[_id == $formId && _type == "form"][0]{
    _id,
    title,
    mailRecipients,
    mailSubject,
    mailMessage,
    sendCopyToSubmitter,
    copySubject,
    copyMessage,
    "fields": select(
      mode == "steps" => steps[].fields[]{label, name, type, isRequired},
      fields[]{label, name, type, isRequired}
    )
  }
`);

/** Shared mail and spam settings. Server-side only: it carries secrets. */
export const FORM_SETTINGS_QUERY = defineQuery(`
  *[_type == "formGeneralSettings" && _id == "formGeneralSettings"][0]{
    adminEmail,
    fromEmail,
    fromName,
    mailLogo,
    primaryColor,
    textColor,
    mailProvider,
    mailjetApiKey,
    mailjetApiSecret,
    resendApiKey,
    smtpHost,
    smtpPort,
    smtpSecurity,
    smtpUser,
    smtpPassword,
    confirmationSubject,
    confirmationMessage,
    ${captchaProvider},
    recaptchaSecretKey,
    turnstileSecretKey,
    formText
  }
`);
