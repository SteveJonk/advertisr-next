/**
 * Helpers for the seed: a write client, Portable Text from a light markup,
 * image uploads (reused by filename) and the walk that turns the markers in
 * the seed data into real Sanity values.
 *
 * Markers in seed data:
 *   { $t: Span[] }               inline text (or write t('… *em* … **bold** …'))
 *   { $image: path|url, alt }    uploaded once, then referenced
 *   $faqs: [[question, answer]]  on a block: FAQ documents + references
 *   { $ref: id }                 a reference to another document
 */
import { createHash } from 'node:crypto';
import { createReadStream, existsSync } from 'node:fs';
import path from 'node:path';
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId || !token) throw new Error('Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN (Editor) in app/.env');

export const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-07-26',
  token,
  useCdn: false,
});

export const hash = (s: string) => createHash('sha1').update(s).digest('hex').slice(0, 12);

type Span = { text: string; marks: string[] };

/** "Groei met *bewijs*." → inline text; `*em*`, `**strong**`. */
export function t(markup: string) {
  const spans: Span[] = markup
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('**')
        ? { text: part.slice(2, -2), marks: ['strong'] }
        : part.startsWith('*')
          ? { text: part.slice(1, -1), marks: ['em'] }
          : { text: part, marks: [] },
    );
  return { $t: spans };
}

function block(spans: Span[], seed: string, extra: Record<string, unknown> = {}) {
  return {
    _type: 'block',
    _key: hash(seed),
    style: 'normal',
    markDefs: [],
    children: spans.map((s, i) => ({ _type: 'span', _key: hash(`${seed}${i}`), text: s.text, marks: s.marks })),
    ...extra,
  };
}

/** Portable Text paragraphs for the article body. */
export const p = (markup: string) => block(t(markup).$t, markup);
export const h2 = (text: string) => block([{ text, marks: [] }], text, { style: 'h2' });
export const li = (markup: string) => block(t(markup).$t, markup, { listItem: 'bullet', level: 1 });

export const cta = (label: string, href: string) => ({ _type: 'cta', label, linkType: 'external', href });
export const img = (src: string, alt: string) => ({ $image: src, alt });
export const ref = (id: string) => ({ $ref: id });

const uploaded = new Map<string, string>();

async function upload(src: string) {
  const filename = path.basename(new URL(src, 'file:///').pathname);
  if (uploaded.has(src)) return uploaded.get(src)!;
  let id = await client.fetch<string | null>(`*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id`, { filename });
  if (!id) {
    const body = /^https?:/.test(src)
      ? Buffer.from(await (await fetch(src)).arrayBuffer())
      : (() => {
          const file = path.join(process.cwd(), 'public', src);
          if (!existsSync(file)) throw new Error(`Image not found: ${file}`);
          return createReadStream(file);
        })();
    id = (await client.assets.upload('image', body, { filename }))._id;
    console.log(`  uploaded ${filename}`);
  }
  uploaded.set(src, id);
  return id;
}

/** FAQ documents collected while resolving, written with the rest. */
export const faqDocs = new Map<string, Record<string, unknown>>();

/** Replace the markers with Sanity values and give every array object a `_key`. */
export async function resolve(value: unknown, seed = ''): Promise<unknown> {
  if (Array.isArray(value)) {
    return Promise.all(
      value.map(async (item, i) => {
        const out = await resolve(item, `${seed}.${i}`);
        return out && typeof out === 'object' && !Array.isArray(out) && !('_key' in out) ? { _key: hash(`${seed}.${i}`), ...out } : out;
      }),
    );
  }
  if (!value || typeof value !== 'object') return value;
  const o = value as Record<string, unknown>;
  if ('$t' in o) return [block(o.$t as Span[], seed)];
  if ('$image' in o) return { _type: 'image', asset: { _type: 'reference', _ref: await upload(o.$image as string) }, alt: o.alt };
  if ('$ref' in o) return { _type: 'reference', _ref: o.$ref };
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined) continue;
    if (k === '$faqs') {
      out.faqs = (v as [string, string][]).map(([question, answer]) => {
        const _id = `faq-${hash(question + answer)}`;
        faqDocs.set(_id, { _id, _type: 'faq', question, answer });
        return { _type: 'reference', _ref: _id, _key: hash(_id) };
      });
      continue;
    }
    out[k] = await resolve(v, `${seed}.${k}`);
  }
  return out;
}
