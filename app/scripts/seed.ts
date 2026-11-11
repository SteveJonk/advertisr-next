/**
 * Fills the dataset with the site's real content: settings, shared documents
 * and every page. Idempotent: fixed ids, `createOrReplace`, images reused by
 * filename. Re-running it OVERWRITES edits made in the studio to these
 * documents, so run it to set up a dataset, not on a live one.
 *
 *   npm run seed
 *
 * Needs NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in app/.env.
 * Leaves alone what it did not write (Google reviews from the sync, say).
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { articles, cases, categories, clients, googleReviews, pages, reviews, singletons, team } from './seed/content';
import { client, faqDocs, resolve } from './seed/lib';

type Page = { slug: string; title: string; seo: Record<string, unknown>; content: unknown[] };

const PAGES_DIR = path.join(process.cwd(), 'scripts/seed/pages');
const extracted: Page[] = readdirSync(PAGES_DIR).map((f) => JSON.parse(readFileSync(path.join(PAGES_DIR, f), 'utf8')));

async function main() {
  console.log(`Seeding ${client.config().projectId}/${client.config().dataset}`);

  const docs: Record<string, unknown>[] = [];
  const add = async (doc: Record<string, unknown>) => docs.push((await resolve(doc, doc._id as string)) as Record<string, unknown>);

  for (const doc of [...singletons, ...reviews, ...clients, ...team, ...cases, ...categories]) await add(doc);
  for (const page of [...pages, ...extracted]) {
    await add({
      _id: `page-${page.slug}`,
      _type: 'page',
      title: page.title,
      slug: { _type: 'slug', current: page.slug },
      seo: { _type: 'seo', ...page.seo },
      content: page.content,
    });
  }
  for (const doc of articles) await add(doc);

  // The Google settings are partly the sync's: only create them, never overwrite.
  const tx = client.transaction().createIfNotExists(googleReviews);
  for (const doc of [...faqDocs.values(), ...docs.filter((d) => d._type !== 'article')]) tx.createOrReplace(doc as never);
  await tx.commit({ visibility: 'async' });

  // Articles one by one, last first: the kennisbank lists the undated ones by
  // creation time, so this keeps the order of the design.
  for (const doc of docs.filter((d) => d._type === 'article').reverse()) await client.createOrReplace(doc as never);

  console.log(`Done: ${docs.length + faqDocs.size + 1} documents (${faqDocs.size} FAQs).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
