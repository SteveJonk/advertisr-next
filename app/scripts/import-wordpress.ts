/**
 * One-off import of the WordPress posts (advertisr.nl) as `article` documents.
 *
 *   npm run import:wp          writes to the dataset
 *   npm run import:wp -- --dry prints what it would write
 *
 * - The post's first tag becomes its category (merged into the seeded ones,
 *   see CATEGORY), the other tags go to `tags`.
 * - Articles get `_id: article-<wp slug>`: a re-run replaces them, so studio
 *   edits to imported articles are lost. Categories are only created when missing.
 * - The WP "cover" block (the closing CTA) becomes an `inlineCta`, a blockquote a
 *   `pullQuote`, a table a bullet list; h1/h4 become h2/h3. Decorative images are dropped.
 */
import { htmlToPortableText } from '@portabletext/html';
import { compileSchema } from '@portabletext/schema';
import { JSDOM } from 'jsdom';
import { client, hash, resolve } from './seed/lib';

const WP = 'https://advertisr.nl/wp-json/wp/v2';
const dry = process.argv.includes('--dry');

/** WP tag slug → existing category id; tags not listed get `category-<slug>`. */
const CATEGORY: Record<string, string> = {
  'google-ads': 'category-google-ads',
  seo: 'category-seo-geo',
  ai: 'category-ai',
};
/** Card art for the new categories (editable in the studio). */
const NEW_ART: Record<string, [string, string]> = {
  'online-marketing': ['#F97316', 'target'],
  'social-advertising': ['#EC4899', 'play'],
  strategie: ['#64748B', 'bars'],
};
const AUTHOR: Record<string, string> = {
  dylanarnolds: 'team-dylan',
  jilles: 'team-jilles',
  marcjonk: 'team-marc',
  stevejonk: 'team-steve',
};
/** Already in the dataset (seeded, with a body) under a shorter slug. */
const SKIP = new Set(['google-ads-voor-mkb-complete-gids-voor-winstgevende-campagnes-in-2026']);
/** Old site paths → new site paths, for links inside the posts. */
const PATHS: Record<string, string> = {
  contact: '/contact',
  proefmaand: '/groeiplan',
  'sea-zoekmachine-adverteren': '/google-ads',
  'social-media-advertising': '/meta-ads',
  seo: '/seo-geo',
  'web-development': '/web-development',
  'marketing-automation': '/marketing-automation',
  'data-en-analytics': '/data-analytics',
};

type Post = {
  slug: string;
  date: string;
  modified: string;
  author: number;
  featured_media: number;
  tags: number[];
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: { title?: string; description?: string };
};

const get = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${WP}/${path}`);
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json() as Promise<T>;
};

const doc = (html: string) => new JSDOM(html).window.document;
const text = (html: string) => (doc(`<body>${html.replace(/<br\s*\/?>/g, ' ')}`).body.textContent ?? '').replace(/\s+/g, ' ').trim();

const schema = compileSchema({
  styles: [{ name: 'normal' }, { name: 'h2' }, { name: 'h3' }],
  lists: [{ name: 'bullet' }, { name: 'number' }],
  decorators: [{ name: 'strong' }, { name: 'em' }],
  annotations: [{ name: 'link', fields: [{ name: 'href', type: 'string' }] }],
  blockObjects: [{ name: 'inlineCta' }, { name: 'pullQuote' }],
});

const slugs = new Set<string>();

/** advertisr.nl links → the new site's paths; other links stay as they are. */
function mapHref(href: string) {
  if (href === '#') return '/contact';
  const m = href.match(/^https?:\/\/(?:www\.)?advertisr\.nl\/([^?#]*?)\/?$/);
  if (!m) return href;
  if (!m[1]) return '/';
  if (slugs.has(m[1])) return `/kennisbank/${m[1]}`;
  if (PATHS[m[1]]) return PATHS[m[1]];
  console.warn(`  unmapped link ${href}`);
  return href;
}

const span = (t: string, marks: string[] = []) => ({
  _type: 'span',
  text: t,
  marks,
});
const bullet = (t: string) => ({
  _type: 'block',
  style: 'normal',
  listItem: 'bullet',
  level: 1,
  markDefs: [],
  children: [span(t)],
});

function toBody(html: string) {
  const blocks = htmlToPortableText(html.replace(/<(\/?)h1\b/g, '<$1h2').replace(/<(\/?)h4\b/g, '<$1h3'), {
    schema,
    parseHtml: doc,
    keyGenerator: () => Math.random().toString(36).slice(2, 14),
    types: { image: () => undefined },
    rules: [
      {
        deserialize(el) {
          if (el.nodeType !== 1) return undefined;
          const e = el as Element;
          if (e.classList?.contains('wp-block-cover')) {
            const a = e.querySelector('a');
            const title = text(e.querySelector('h1,h2,h3,h4,p')?.innerHTML ?? '');
            return a
              ? {
                  _type: 'inlineCta',
                  title,
                  cta: {
                    _type: 'cta',
                    label: (a.textContent ?? '').trim(),
                    linkType: 'external',
                    href: mapHref(a.getAttribute('href') ?? '#'),
                  },
                }
              : undefined;
          }
          if (e.tagName === 'BLOCKQUOTE')
            return {
              _type: 'pullQuote',
              text: (e.textContent ?? '').replace(/\s+/g, ' ').trim(),
            };
          if (e.tagName === 'TABLE') {
            const rows = [...e.querySelectorAll('tr')].map((tr) => [...tr.children].map((c) => (c.textContent ?? '').trim()));
            const [head, ...body] = rows;
            // "Meta Ads: Startbudget per dag €10 – €20 · Maandbudget (advies) €300 – €600"
            return body.map((r) =>
              bullet(
                `${r[0]}: ${r
                  .slice(1)
                  .map((c, i) => `${head[i + 1]} ${c}`)
                  .join(' · ')}`,
              ),
            );
          }
          return undefined;
        },
      },
    ],
  });

  const body = blocks
    .map((b) => {
      if (b._type !== 'block') return b;
      const block = b as {
        markDefs?: { href?: string }[];
        children?: { text?: string }[];
      };
      for (const d of block.markDefs ?? []) if (d.href) d.href = mapHref(d.href);
      return b;
    })
    .filter((b) => b._type !== 'block' || ((b as { children?: { text?: string }[] }).children ?? []).some((c) => c.text?.trim()));

  // Every post ends with "Ben jij op zoek naar …?" + a lone "Gratis adviesgesprek"
  // link: that is the article's closing band (ctaTitle), not body.
  type Tb = { _type: string; style?: string; markDefs?: unknown[]; children?: { text?: string }[] };
  const textOf = (b?: Tb) => (b?.children ?? []).map((c) => c.text).join('');
  const [heading, link] = body.slice(-2) as Tb[];
  if (heading?.style === 'h2' && link?.markDefs?.length === 1 && link.children?.length === 1) {
    return { body: body.slice(0, -2), ctaTitle: textOf(heading) };
  }
  return { body, ctaTitle: undefined };
}

async function main() {
  const [posts, tags, users] = await Promise.all([
    get<Post[]>('posts?per_page=100'),
    get<{ id: number; name: string; slug: string }[]>('tags?per_page=100'),
    get<{ id: number; slug: string }[]>('users?per_page=100'),
  ]);
  posts.forEach((p) => slugs.add(p.slug));
  const tagById = new Map(tags.map((t) => [t.id, t]));
  const userById = new Map(users.map((u) => [u.id, u.slug]));
  const categoryId = (slug: string) => CATEGORY[slug] ?? `category-${slug}`;

  const categories = tags
    .filter((t) => !CATEGORY[t.slug])
    .map((t, i) => {
      const [color, icon] = NEW_ART[t.slug] ?? ['#FF3951', 'target'];
      return {
        _id: categoryId(t.slug),
        _type: 'articleCategory',
        title: t.name,
        color,
        icon,
        sortOrder: 7 + i,
      };
    });

  const articles = [];
  for (const p of posts.filter((p) => !SKIP.has(p.slug))) {
    const [first, ...rest] = p.tags.map((id) => tagById.get(id)!).filter(Boolean);
    const media = p.featured_media ? await get<{ source_url: string; alt_text: string }>(`media/${p.featured_media}`) : null;
    const { body, ctaTitle } = toBody(p.content.rendered);
    const words = text(p.content.rendered).split(' ').length;
    const description = p.yoast_head_json?.description || text(p.excerpt.rendered);
    const author = AUTHOR[userById.get(p.author) ?? ''];
    const article = {
      _id: `article-${p.slug}`,
      _type: 'article',
      title: text(p.title.rendered),
      slug: { _type: 'slug', current: p.slug },
      excerpt: description,
      image: media
        ? {
            $image: media.source_url,
            alt: media.alt_text || text(p.title.rendered),
          }
        : undefined,
      body,
      category: first && { $ref: categoryId(first.slug) },
      tags: rest.length ? rest.map((t) => t.name) : undefined,
      author: author && { $ref: author },
      minutes: Math.max(1, Math.round(words / 200)),
      publishedAt: p.date.slice(0, 10),
      updatedAt: p.modified.slice(0, 10),
      featured: false,
      ctaTitle,
      seo: { _type: 'seo', title: p.yoast_head_json?.title, description },
    };
    // resolve() uploads the image: not on a dry run.
    articles.push(dry ? article : await resolve(article, hash(p.slug)));
    console.log(`  ${p.slug}: ${body.length} blocks, ${first?.name ?? 'no tag'}`);
  }

  if (dry) return console.log(JSON.stringify({ categories, articles }, null, 2));
  const tx = client.transaction();
  categories.forEach((c) => tx.createIfNotExists(c));
  articles.forEach((a) => tx.createOrReplace(a as { _id: string; _type: string }));
  await tx.commit();
  console.log(`Imported ${articles.length} articles, ${categories.length} categories (created if missing).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
