# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-11-11

## User Preferences
- [2026-11-11] Mobile nav: user dislikes dropdown menus; prefers a drawer sliding in from the side. Hamburger nav must also cover tablets (≤769px).
- Infra: wants the minimal "just renew the app on push" setup; doesn't want existing server pieces (Caddy) reworked.

<!-- How the user likes things done. Code style, tools, patterns, communication. -->
- Wants plan + questions first, then autonomous build; when away, "go with the recommended answers".
- Chose: static Next routes next to the kept Sanity template, flat URLs, lead form mails via existing mail setup.
- [2026-11-11] No textual content hard-coded: every string (buttons, form labels, badges) lives in Sanity (Site information → Interface text), no fallback copy in code.
- FAQs are separate `faq` documents referenced from blocks (reusable), not inline.
- Google reviews import follows the SteveJonk/schuijt pattern (Places API sync route + studio panel + cron + SerpApi backfill).

## Key Learnings

- [2026-11-11] Design HTML loads Bricolage Grotesque with the opsz axis (12..96) from Google Fonts; app's next/font loads static weights only, so headings render wider and wrap one line earlier than the design (+20..80px per section). Fix = next/font `axes: ['opsz']` with variable weight.
- [2026-11-11] Design-vs-app screenshots: puppeteer-core lives in the global openwolf package; next/image lazy images need `img.loading='eager'` + wait before fullPage screenshots or they render blank.
- Forms are Sanity documents again (`form` + `formField`, singleton `formGeneralSettings` = Form settings with mail/spam/interface text). Blocks (`contactHero`, `groeiplanHero`, `finalCta`, `articleIndex.newsletter`) hold a `form` reference + `interesse`; a hidden field `{{interesse}}` / `{{path}}` picks those up. Everything posts to `/api/submit-form` (FORM_QUERY is the allow-list); mail env wins over the studio fallbacks. `npm run check:form` checks the round trip.
- Shared form copy + public captcha key come via `getSite().forms` (SITE_QUERY), not per block.
- Page content = `page` docs + page builder. Add a block: `studio/schemaTypes/blocks.ts` → resolve refs in `app/src/sanity/queries.ts` → `npm run typegen` (in app) → case in `PageBuilder.tsx` (+ component in `sections.tsx`). Block types come from `B<'type'>` in sections.tsx (generated PAGE_QUERY_RESULT).
- Spacing that differs by neighbour (Funnel after Pain-with-quote, Faq after caseHighlight, Reviews after caseList) is derived from `prev` in PageBuilder, not an editor field.
- `inlineText` (one-line Portable Text, em/strong) renders via `<Rich>` in `components/advertisr/cms.tsx`; `<Animated>` counts up the first number of a stat string.
- Typegen: `*[_id == "x"]` types as a union of every document; add `_type == "x" &&`. `_type in [a, b] => {...}` doesn't narrow either: write one condition per type.
- `getSite()` (React cache) is the single source for chrome text; `lib/site-url.ts` holds SITE_URL so json-ld stays importable without Sanity env (check:jsonld).
- One-off content extraction trick: calling a server page's default export returns the element tree with literal props (no render), so section props can be mapped to seed data.
- Advertisr pages live in route groups `(site)` / `(landing)`; template CMS routes in `(cms)`. Root layout has no chrome.
- Tailwind v4 `max-w-<name>` resolves `--spacing-<name>` too: `--container-wrap` collided with template `--spacing-wrap` (44px). Use `--container-page` / `max-w-page`.
- `SITE_URL` must use `||` not `??`: `.env.example` ships `NEXT_PUBLIC_SITE_URL=` (empty string) → `new URL('')` throws.
- Design inline `style="padding-top:…"` beats media queries; port as `pt-5!` so `max-sm:py-20` from `<Sec>` doesn't override.
- Hidden Claude browser pane throttles IntersectionObserver/rAF: `.rv` content looks invisible; force `data-in` via JS to verify.

- **Project:** advertisr-next
- **Description:** A block-based website scaffold: Next.js 16 (App Router, React 19, Tailwind v4)

- HTML → Portable Text: `@portabletext/html` (`htmlToPortableText` + `compileSchema` from `@portabletext/schema`, jsdom as `parseHtml`); custom `rules` map WP blocks to our objects. advertisr.nl WP REST API is public (`/wp-json/wp/v2/posts|tags|users|media`).
- No prettier config in app: format with `--single-quote --print-width 160` to match the repo style.

## Do-Not-Repeat
- [2026-11-11] `fixed` children inside the Nav break once it gets `backdrop-blur` (backdrop-filter makes it their containing block). Render overlays/drawers outside <nav>.
- [2026-11-11] Don't toggle `visibility` on a panel you focus into on open: focus() runs before it's visible and silently fails. Use `inert` for the closed state.
- [2026-11-11] No Prettier config in the repo: bare `npx prettier --write` rewrites files to double quotes. Code style is single quotes + jsx single quotes + long lines; use `--single-quote --jsx-single-quote --print-width 180` or don't run it.
- [2026-11-11] Browser pane hidden ⇒ CSS transitions/timers throttled; computed opacity/visibility lag. Don't mistake it for a bug.
- [2026-11-11] Lockfiles are written by local npm 11.6.2 (Node 24); npm 10 and 12 reject them (@emnapi missing). In CI/Docker pin npm 11 (`npm i -g npm@11.6.2`) rather than regenerating the lock.
- [2026-11-11] zsh: `"$R:app/x"` applies the `:a` modifier (and `:s`, `:h`, …) and unquoted `$args` is not word-split. Write `${R}:path`, and run arg-list loops under `bash -c`.
- [2026-11-11] Only one `next dev` per folder (Next 16 lock): when another session's server holds :3000, verify against it (curl / browser on :3000) instead of starting a second one.
- [2026-11-11] Env fallbacks must use `||`, not `??`: the Dockerfile turns every unset build-arg into an empty-string env var.

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-11-11] Regex-editing package.json left a trailing comma (every tsx/next run then fails with "Error parsing package.json"). Edit JSON with json.load/dump or check with `node -e "require('./package.json')"`.
- [2026-11-11] react-hooks/set-state-in-effect: don't setState from DOM checks in useEffect; use a click handler (Nav CTA scrolls to #groeiplan if present, else /groeiplan).
- [2026-11-11] Don't put `bg-[url("data:image/svg+xml,…")]` in className: Tailwind emits an unparsable `url(\"…\")` and the dev CSS breaks (even after removal, until `.next/dev` is cleared). Use an inline `<svg>` instead.

- [2026-11-11] BSD `sed` doesn't turn `\n` in the replacement into a newline: the edit silently did nothing. Use python for multi-line edits.

## Decision Log
- [2026-11-11] Restored the template form builder at the user's request ("like it was when the repo started"), replacing the fixed LeadForm//api/lead. Per-service message placeholders were folded into 5 shared forms (groeiplan, groeiplan-landing, groeiplan-kort, contact, nieuwsbrief) instead of one form per page.
- [2026-11-11] Hosting: plain Docker on own server (root@178.104.248.151), host-installed Caddy (user manages it, don't touch) proxies to 127.0.0.1:3000. Coolify dropped. Deploy = GH Actions SSH → ~/advertisr: scp deploy/compose.yml, pull, `up -d --wait`. User chose simple restart (~1-3s gap) over replica swap. GHCR package is public (no docker login). Runtime secrets live in ~/advertisr/app.env on the server; NEXT_PUBLIC_* are build-args from GitHub Variables.
- [2026-11-11] WP import: single `category` kept (first WP tag), rest of tags as plain strings; categories merged with the seeded ones; placeholders kept (user choices).
- [2026-11-11] Page builder with one block per design section (~33) rather than a few generic blocks: design parity; illustrations stay code (`visual` select).
- [2026-11-11] Case cards show a case study's first two stats (one source for cards + results list); articles without a body are cards only (route 404s, card links to #).
- [2026-11-11] Form builder removed: LeadForm → /api/lead with env-only mail settings.

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
- [2026-11-11] Tokens stay in `@theme` (globals.css), not tailwind.config.ts: repo convention beats skill default; template role tokens alias the Advertisr palette.
- [2026-11-11] Reveal as a global `<SiteEffects>` + `rv` utility instead of per-element `<Reveal>` wrappers: hundreds of `.rv` grid children; wrappers would break layouts and the sibling stagger.
- [2026-11-11] Service pages generated from the design HTML with a scratch extractor into typed props of shared section components (one template, 8 pages).
- [2026-11-11] npm 11 (local) writes lockfiles missing optional wasm deps (@emnapi/*); npm 10 and 12 reject them in `npm ci`. Fix the lockfile (regen with `npx npm@12 install --package-lock-only`), don't pin Node. Verify `npm ci --dry-run` with npm@10/11/12 in a clean copy WITHOUT node_modules.
- [2026-11-11] Never conditionally unmount/remount `.rv` elements client-side: SiteEffects observes `.rv` once per pathname, so a remounted one stays opacity 0. Hide with className `hidden`/`contents` instead.
- [2026-11-11] There's no prettier config; running `npx prettier --write` reformats whole files (double quotes, 80 cols). Don't run it; match the style by hand (single quotes, jsx single quotes, ~160 cols).
- [2026-11-11] The browser pane may be hidden → IntersectionObserver never fires there, so `.rv` content looks blank in screenshots. Check tabs_context before concluding reveal is broken.
- [2026-11-11] Locally, Sanity edits don't show in `next dev`: reads are cached under tag `sanity` (24h) and SANITY_REVALIDATE_SECRET is empty in app env, so /api/revalidate refuses. Clearing .next fetch-cache isn't enough; restart the dev server. Patch the dataset via `npx sanity exec <file> --with-user-token` (getCliClient from 'sanity/cli'), script file must sit inside studio/.

- [2026-11-11] `cn` is plain join (no tailwind-merge): a className passed to Stage/etc. cannot override a same-variant base class; and `max-mob:` sorts after `max-sm:`, so base `max-mob:*` beats caller `max-sm:*`. Use `!` or restructure.

- [2026-11-11] Never leave a position:fixed element translated off-screen (drawers): body overflow-x:hidden does not clip it and mobile browsers zoom out the whole page. Clip it in a fixed inset-0 overflow-hidden wrapper with the panel absolute.

- [2026-11-11] Porting design `position:static` overrides: a box holding a next/image `fill` (or any absolute child) must stay positioned. Use `max-*:relative max-*:top-0` instead of `max-*:static` (top-0 cancels a sticky top offset). When verifying, scroll lazy images into view; unloaded images hide layout bugs.

- [2026-11-11] next/font Inter has no → (U+2192) in any subset; CSS `content:"→"` renders in the fallback font ~15% wider than the design. Size the pseudo explicitly (`after:w-[.92em]`) where width matters. Also: Tailwind `text-base`/`text-lg` set their own line-height; the design inherits body 1.65 — use `text-base/[1.65]`.

- [2026-11-11] Case studies have their own route /case/[slug] (pathForSlug(slug, "caseStudy")). Long-form Portable Text renderers live in components/advertisr/prose.tsx (shared by articles and cases).
- [2026-11-11] Never import `next/image` directly: use `@/components/ui/Image` (applies sanityLoader so the Sanity CDN resizes at q=85). A global images.loaderFile breaks /_next/image for local images.
