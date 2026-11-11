# Memory

> Chronological action log. Hooks and AI append to this file automatically.
> Old sessions are consolidated by the daemon weekly.

## Session: 2026-11-11 12:02

| Time | Action | File(s) | Outcome | ~Tokens |
| ---- | ------ | ------- | ------- | ------- |

## Session: 2026-11-11 12:05

| Time  | Action                                                                                  | File(s)                                      | Outcome                                                    | ~Tokens |
| ----- | --------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------- | ------- |
| 12:10 | Audited 15 design HTML files, planned, asked 4 questions                                | app/design/\*                                | answered: static+keep template, flat URLs, mail, build all | ~30k    |
| 12:30 | Extracted 43 base64 images, tokens/fonts in @theme, route groups (site)/(landing)/(cms) | globals.css, layouts                         | ok                                                         | ~20k    |
| 13:00 | Shared components + homepage                                                            | components/advertisr/\* , (site)/page.tsx    | ok                                                         | ~40k    |
| 13:20 | Service template + 8 service pages (generated from design HTML)                         | service.tsx, visuals.tsx, (site)/\*/page.tsx | ok                                                         | ~50k    |
| 13:35 | team, resultaten, contact, groeiplan, kennisbank, article                               | pages                                        | ok                                                         | ~45k    |
| 13:45 | Sitemap fix, tsc+eslint clean, next build passes, visual pass desktop+mobile            | sitemap.ts                                   | ok                                                         | ~20k    |

## Session: 2026-11-11 13:21

| Time  | Action                                                                                                                        | File(s)                                       | Outcome                  | ~Tokens |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------ | ------- |
| 13:24 | wire-sanity: content map + page-builder schema proposal (no code yet); dataset y2l1clva/production empty, write token missing | studio/schemaTypes, app/src/app               | proposal sent for review | ~60k    |
| 14:08 | wire-sanity: page builder + docs/singletons, Google reviews sync, template removed, dataset seeded, builds pass               | studio/schemaTypes, app/src, app/scripts/seed | done                     | ~250k   |

## Session: 2026-11-11 14:24

| Time  | Action                                                          | File(s)                                                                                       | Outcome                            | ~Tokens |
| ----- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------- | ------- |
| 14:34 | WP → Sanity import: 12 articles, 3 categories, card image field | app/scripts/import-wordpress.ts, studio/schemaTypes/documents.ts, ArticleCard.tsx, queries.ts | imported + verified on /kennisbank | ~60k    |

## Session: 2026-11-11 14:39

| Time  | Action                                                                                                  | File(s)                                                                                       | Outcome                          | ~Tokens |
| ----- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| 14:00 | Fix studio deploy npm ci lockfile error: CI Node 22->24                                                 | .github/workflows/deploy-sanity-studio.yml                                                    | fixed                            | ~3k     |
| 14:30 | Kennisbank search + category filtering (client context, hide-not-unmount), noResults field              | app/src/components/advertisr/kennisbank.tsx, sections.tsx, studio/schemaTypes/blocks.ts, seed | done, verified via JS in preview | ~25k    |
| 14:45 | Set noResults on page-kennisbank (block de02089e033a) in production dataset; verified after dev restart | sanity dataset                                                                                | done                             | ~6k     |
| 14:55 | Studio npm ci still failing on CI (npm 12): regenerated lockfile with @emnapi entries                   | studio/package-lock.json                                                                      | verified npm 10/11/12            | ~5k     |

## Session: 2026-11-11 15:13

| Time  | Action                                                                                      | File(s) | Outcome       | ~Tokens                                                                                                              |
| ----- | ------------------------------------------------------------------------------------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --- |
| 16:00 | Deploy to own server: build-args, deploy/compose.yml, SSH deploy job, dropped Coolify; ?? → |         | env fallbacks | .github/workflows/build-app-image.yml, app/Dockerfile, deploy/compose.yml, app/src/lib/env.ts, app/sentry.options.ts | tsc ok, compose valid, not run in CI yet | ~6k |

## Session: 2026-11-11 16:01

| Time  | Action                                                                                                                                                                                                | File(s)                                                                                         | Outcome                                                                    | ~Tokens |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- |
| 15:30 | Restored Sanity form builder (form/formField/Form settings/MailTest), /api/submit-form + /api/test-mail, FormRenderer restyled; blocks reference forms; /api/lead removed; dataset migrated (5 forms) | studio/schemaTypes/form*.ts, app/src/components/form/*, LeadForm.tsx, queries.ts, seed/forms.ts | tsc/eslint/check:form/check:jsonld/schema validate pass; verified on :3000 | ~60k    |
| 16:30 | Build App Image npm ci EUSAGE @emnapi: pinned npm@11.6.2 in app/Dockerfile deps stage                                                                                                                 | app/Dockerfile                                                                                  | dry-run ci ok on 11.6.2; docker build not run (daemon off)                 | ~3k     |

## Session: 2026-11-11 16:52

| Time  | Action                                                                                                              | File(s)                              | Outcome | ~Tokens |
| ----- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- | ------- |
| 16:54 | Mobile hamburger menu in Nav (dropdown, X morph, Esc/link close, CTA in panel <520px); verified 375px + desktop     | app/src/components/advertisr/Nav.tsx | done    | ~6k     |
| 17:01 | Nav mobile menu → right slide-in drawer, breakpoint ≤769px (tablets); focus/Esc/scroll lock verified at 375/769/770 | app/src/components/advertisr/Nav.tsx | done    | ~8k     |

## Session: 2026-11-11 17:01

| Time | Action | File(s) | Outcome | ~Tokens |
| ---- | ------ | ------- | ------- | ------- |

## Session: 2026-11-11 20:55

| Time  | Action                                                                                                | File(s)                                                                                                                       | Outcome                                 | ~Tokens |
| ----- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------- |
| 17:00 | Mobile parity fix: FAQ line-height + Meta phone stage min-height                                      | service.tsx, visuals.tsx                                                                                                      | verified at 375px vs design             | ~8k     |
| 17:30 | Nav drawer clipped in fixed overflow-hidden layer (mobile zoom-out flip)                              | Nav.tsx                                                                                                                       | verified in emulation                   | ~6k     |
| 18:00 | Deliverables photo: max-dsk:static -> relative+top-0 (fill image escaped over ledger)                 | service.tsx                                                                                                                   | verified 375 + 1280                     | ~10k    |
| 18:20 | FlowVisual: step line moved to left 4.75px so it runs through dot centers                             | visuals.tsx                                                                                                                   | measured 0px offset                     | ~3k     |
| 18:40 | Homepage Stages: arrow width + band line-height to match design                                       | sections.tsx                                                                                                                  | measured equal to design at 1360        | ~12k    |
| 19:10 | /case/[slug] page + caseStudy slug/body/seo + shared prose.tsx; dataset patch blocked (needs user OK) | case/[slug]/page.tsx, prose.tsx, queries.ts, documents.ts, singletons.ts, sections.tsx, sitemap.ts, links.ts, seed/content.ts | tsc+eslint clean; 404 until slugs exist | ~40k    |

## Session: 2026-11-11 21:30

| Time  | Action                                                                                                 | File(s)                                   | Outcome                 | ~Tokens |
| ----- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------- | ----------------------- | ------- |
| 19:30 | Case slugs + labels written to Sanity; /case pages verified 1360 + 375; more-cases grid sized to count | case/[slug]/page.tsx                      | done                    | ~15k    |
| 21:31 | Restored Sanity image wrapper, swapped 8 next/image imports                                            | app/src/components/ui/Image.tsx + 8 files | fixed low image quality | ~3k     |

## Session: 2026-11-11 21:38

| Time  | Action                                                                                | File(s)                                                    | Outcome | ~Tokens |
| ----- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------- | ------- |
| 21:39 | Article body required, related refs weak, 10 body-less articles unpublished to drafts | studio/schemaTypes/documents.ts, app/src/sanity/queries.ts | done    | ~4k     |

## Session: 2026-11-11 21:45

| Time  | Action                                                                                  | File(s)                               | Outcome                           | ~Tokens |
| ----- | --------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------- | ------- |
| 21:46 | deploy job: keep only current+previous app image on server (docker rmi from 3rd newest) | .github/workflows/build-app-image.yml | yaml valid, not run on server yet | ~2k     |

## Session: 2026-11-11 21:52

| Time | Action | File(s) | Outcome | ~Tokens |
| ---- | ------ | ------- | ------- | ------- |

## Session: 2026-11-11 21:54

| Time | Action | File(s) | Outcome | ~Tokens |
| ---- | ------ | ------- | ------- | ------- |

## Session: 2026-11-11 21:59

| Time  | Action                                                                                                                                                                                  | File(s)                                                                                                                                                  | Outcome                                   | ~Tokens |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------- |
| 22:00 | Kennisbank load-more: ArticleFilter pages 'latest' 9 at a time, LoadMore button hides when done; ghost class exported from ui.tsx                                                       | kennisbank.tsx, sections.tsx, ui.tsx                                                                                                                     | verified 9→12, button hides               | ~4k     |
| 22:06 | Design vs app side-by-side audit (15 pages, desktop+mobile, puppeteer+sharp in scratchpad)                                                                                              | app/design/\*.html vs :3000                                                                                                                              | report delivered in chat; no code changed | ~60k    |
| 22:38 | Fixed 8 design mismatches (font opsz, Bewijs lead, bridge translate, contact reviews pt, form leading+gap, groeiplan steps, seo overlay, article header) + hero widths; dataset patched | layout.tsx, service.tsx, sections.tsx, PageBuilder.tsx, fields.tsx, FormRenderer.tsx, ArticleCard.tsx, kennisbank/[slug]/page.tsx, blocks.ts, seed pages | verified by recapture; tsc+eslint clean   | ~90k    |
