# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-11-11

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->
- Wants plan + questions first, then autonomous build; when away, "go with the recommended answers".
- Chose: static Next routes next to the kept Sanity template, flat URLs, lead form mails via existing mail setup.

## Key Learnings
- Advertisr pages live in route groups `(site)` / `(landing)`; template CMS routes in `(cms)`. Root layout has no chrome.
- Tailwind v4 `max-w-<name>` resolves `--spacing-<name>` too: `--container-wrap` collided with template `--spacing-wrap` (44px). Use `--container-page` / `max-w-page`.
- `SITE_URL` must use `||` not `??`: `.env.example` ships `NEXT_PUBLIC_SITE_URL=` (empty string) → `new URL('')` throws.
- Design inline `style="padding-top:…"` beats media queries; port as `pt-5!` so `max-sm:py-20` from `<Sec>` doesn't override.
- Hidden Claude browser pane throttles IntersectionObserver/rAF: `.rv` content looks invisible; force `data-in` via JS to verify.

- **Project:** advertisr-next
- **Description:** A block-based website scaffold: Next.js 16 (App Router, React 19, Tailwind v4)

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-11-11] Don't put `bg-[url("data:image/svg+xml,…")]` in className: Tailwind emits an unparsable `url(\"…\")` and the dev CSS breaks (even after removal, until `.next/dev` is cleared). Use an inline `<svg>` instead.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
- [2026-11-11] Tokens stay in `@theme` (globals.css), not tailwind.config.ts: repo convention beats skill default; template role tokens alias the Advertisr palette.
- [2026-11-11] Reveal as a global `<SiteEffects>` + `rv` utility instead of per-element `<Reveal>` wrappers: hundreds of `.rv` grid children; wrappers would break layouts and the sibling stagger.
- [2026-11-11] Service pages generated from the design HTML with a scratch extractor into typed props of shared section components (one template, 8 pages).
