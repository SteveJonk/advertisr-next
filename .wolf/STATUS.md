# STATUS — advertisr-next

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Update this file at the end of every work phase so the next `/clear` resumes in 1 read.
> Last updated: 2026-11-11

---

## ✅ Done

### WordPress posts imported into Sanity (2026-11-11)
- `npm run import:wp` (`app/scripts/import-wordpress.ts`, `--dry` to preview) pulls the 13 posts from the advertisr.nl WP REST API; 12 imported as `article-<wp slug>` (the Google Ads MKB guide was already seeded and is skipped).
- First WP tag = category (merged: Google Ads→Google Ads, SEO→SEO & GEO, AI→AI & Automatisering; new: Online marketing, Social advertising, Strategie); other tags → `tags`. Seeded placeholder articles kept.
- WP cover CTA → `inlineCta`, blockquote → `pullQuote`, table → bullets, closing "Ben jij op zoek…" → `ctaTitle`; old advertisr.nl links mapped to new paths; featured image → new `article.image` ("Card image", shown on cards instead of category art).
- Re-running replaces the imported articles (studio edits to them are lost).

### Sanity page builder wired to every page (2026-11-11)
- All 15 pages are `page` documents built from ~33 blocks (`studio/schemaTypes/blocks.ts` ↔ `app/src/components/PageBuilder.tsx` + `components/advertisr/sections.tsx`). Routes: `(site)/page.tsx` (home), `(site)/[slug]`, `(site)/kennisbank` (+ `[slug]` for articles), `(landing)/groeiplan`. Static page files and `lib/advertisr/*` deleted.
- Documents: page, article (+ articleCategory), faq (referenced from `faqs` blocks), caseStudy, review, client, teamMember. Singletons: siteInformation (incl. ~50 `interfaceText` strings: buttons, form labels, badges, 404), navigation, footer, googleReviews.
- No copy in code: everything comes from Sanity via `getSite()` (`lib/site.ts`) and `PAGE_QUERY`; no fallback strings. Exceptions: the animated illustrations' mock text (`visuals.tsx`) and the internal lead mail labels (`api/lead`).
- Google reviews sync ported from SteveJonk/schuijt: `lib/google-reviews.ts`, `/api/google-reviews` (secret), studio panel `tools/GoogleReviewsSync.tsx`, daily cron in `app/vercel.json`, `npm run reviews:backfill` (SerpApi).
- Removed template: old blocks, form builder (form/formField/formGeneralSettings, /api/submit-form, /api/test-mail, captcha), `(cms)` route, components/ui|layout|blocks|form, hooks, demo-content.
- Seeded `y2l1clva/production` with the real copy (`npm run seed`: 138 docs, 75 FAQs, all images uploaded). Service pages were extracted from the old JSX into `app/scripts/seed/pages/*.json`; the rest is in `scripts/seed/content.ts`.
- `next build` + `sanity build` pass; tsc/eslint clean; `npm run check:jsonld` passes.

### Advertisr. site from `app/design/*.html` → Next.js + Tailwind (2026-11-11)
- 15 static routes, flat URLs: `/`, `/meta-ads`, `/google-ads`, `/seo-geo`, `/social-media-organisch`, `/web-development`, `/data-analytics`, `/marketing-automation`, `/ai-agent-workflows`, `/resultaten`, `/team`, `/contact`, `/kennisbank`, `/kennisbank/google-ads-voor-mkb`, `/groeiplan`
- Route groups: `(site)` (Advertisr nav/footer), `(landing)` (/groeiplan: slim nav, slim footer, sticky mobile CTA), `(cms)` (the untouched Sanity template: `[slug]` + its header/footer). Root `layout.tsx` = html/body/fonts/tracking only.
- Template's Sanity home `app/page.tsx` removed (`/` is now the static Advertisr home). Template blocks, studio and `[slug]` kept.
- Components in `src/components/advertisr/` (ui, Nav, Footer, LeadForm, FinalCta, Logos, Reviews, Marquee, CaseCard, Compare, service sections, hero visuals, ArticleCard, Toc, SiteEffects). Copy for shared lists in `src/lib/advertisr/`.
- Tokens in `globals.css` `@theme` (repo convention, no tailwind.config). Template role tokens now point at Advertisr colours.
- 43 images extracted from base64 into `public/images/advertisr/`.
- Lead form → `POST /api/lead` (reuses `lib/mail.ts`, env-only settings, honeypot `fax`). Newsletter reuses it.
- `next build` passes (all Advertisr routes static); sitemap lists static routes + CMS pages and survives an unreachable CMS.

---

## 🚀 Next phase

**Deploy to own server (code done, not yet run):** `.github/workflows/build-app-image.yml` now has a `deploy` job (SSH → `~/advertisr`, `deploy/compose.yml`, `docker compose up -d --wait`). To do by user: GitHub vars SSH_HOST/SSH_USER(+SSH_PORT), secrets SSH_PRIVATE_KEY/SSH_KNOWN_HOSTS, new NEXT_PUBLIC_* vars (SITE_URL!), `~/advertisr/app.env` on server, stop old app container on :3000, crontab for `/api/google-reviews?trigger=schedule` (Vercel cron doesn't run there). Coolify secrets can be deleted.

**Goal:** User reviews the CMS-driven site + studio; fill the remaining real data.

### Open items / decisions for the user
- 301 redirects from the old WP URLs (`/<post-slug>/` → `/kennisbank/<post-slug>`) before go-live, or the posts' Google rankings break.
- Imported articles have no `intro`, FAQs or related articles; WP excerpts were poor so `excerpt` = Yoast meta description.
- Deploy the studio (`cd studio && npm run deploy`) so the new schema is live for editors; `studio/.env` was created locally (project y2l1clva).
- Google reviews: set `GOOGLE_PLACES_API_KEY`, `GOOGLE_REVIEWS_SYNC_SECRET` (+ `CRON_SECRET` on Vercel) and fill the Place ID + website address on the studio's "Google reviews" page. The cron is in `app/vercel.json` (Vercel); on Netlify a scheduled function is needed instead. Badge score is seeded as 5,0 until the first sync.
- Mail env for `/api/lead` still missing (returns 503).
- Placeholders still in the content (now editable in the studio): phone/WhatsApp, booking link, LinkedIn/Instagram, legal links, article sources, the 10 kennisbank articles without a body (shown as cards linking to `#`).
- Root `README.md` / `studio/README.md` still describe the template (seed:site, Form settings, check:form): rewrite.
- Re-running `npm run seed` overwrites studio edits to the seeded documents: only for setting up a dataset.

---

## 📁 Active architecture

- **Stack:** Next.js 16 App Router, React 19, Tailwind v4 (`@theme` in `app/src/app/globals.css`), Sanity page builder for every page (typegen: `npm run typegen` in app), next/font (Bricolage Grotesque + Inter)
- **Patterns:** reveal = `rv` utility + `<SiteEffects>` sets `data-in` (sibling-staggered); count-up = `<Count to>` / `[data-to]`; parallax = `[data-parallax]` + `[data-depth]`; inline-style paddings from the design are `!` utilities (e.g. `pt-5!`) so they beat the `max-sm:` defaults; breakpoints `max-dsk` (1080), `max-sm` (760), `max-mob` (520), others arbitrary `max-[900px]`.

---

## ⚠️ External blockers (don't block coding)

- Real Sanity project id + mail credentials (see above).

---

## 🔧 Useful commands

```bash
cd app && npm run dev          # http://localhost:3000
cd app && npx tsc --noEmit && npx eslint src
cd app && npx next build
```

---

## 📚 References (read IF needed)

- `.wolf/cerebrum.md` — User Preferences + Do-Not-Repeat + Decision Log
- `.wolf/anatomy.md` — token-efficient file index
- `.wolf/buglog.json` — known bugs + fixes
