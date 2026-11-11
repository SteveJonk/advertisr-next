# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-11-11

## User Preferences
- Infra: wants the minimal "just renew the app on push" setup; doesn't want existing server pieces (Caddy) reworked.

<!-- How the user likes things done. Code style, tools, patterns, communication. -->
- Wants plan + questions first, then autonomous build; when away, "go with the recommended answers".
- Chose: static Next routes next to the kept Sanity template, flat URLs, lead form mails via existing mail setup.
- [2026-11-11] No textual content hard-coded: every string (buttons, form labels, badges) lives in Sanity (Site information → Interface text), no fallback copy in code.
- FAQs are separate `faq` documents referenced from blocks (reusable), not inline.
- Google reviews import follows the SteveJonk/schuijt pattern (Places API sync route + studio panel + cron + SerpApi backfill).

## Key Learnings
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
- [2026-11-11] Env fallbacks must use `||`, not `??`: the Dockerfile turns every unset build-arg into an empty-string env var.

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-11-11] Regex-editing package.json left a trailing comma (every tsx/next run then fails with "Error parsing package.json"). Edit JSON with json.load/dump or check with `node -e "require('./package.json')"`.
- [2026-11-11] react-hooks/set-state-in-effect: don't setState from DOM checks in useEffect; use a click handler (Nav CTA scrolls to #groeiplan if present, else /groeiplan).
- [2026-11-11] Don't put `bg-[url("data:image/svg+xml,…")]` in className: Tailwind emits an unparsable `url(\"…\")` and the dev CSS breaks (even after removal, until `.next/dev` is cleared). Use an inline `<svg>` instead.

- [2026-11-11] BSD `sed` doesn't turn `\n` in the replacement into a newline: the edit silently did nothing. Use python for multi-line edits.

## Decision Log
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
