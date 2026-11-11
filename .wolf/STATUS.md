# STATUS — advertisr-next

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Update this file at the end of every work phase so the next `/clear` resumes in 1 read.
> Last updated: 2026-11-11

---

## ✅ Done

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

**Goal:** User reviews the built site against the designs and gives parity feedback.

### Open items / decisions for the user
- Fill mail env (`MAIL_PROVIDER`, credentials, `MAIL_FROM_EMAIL`, `CONTACT_ADMIN_EMAIL`) so `/api/lead` sends; currently returns 503.
- `app/.env` was created from `.env.example` with `NEXT_PUBLIC_SANITY_PROJECT_ID=placeholder` so dev/build run; replace with real Sanity project.
- Placeholders straight from the designs: phone/WhatsApp numbers, booking link, LinkedIn/Instagram, voorwaarden/privacy, article share/source links, kennisbank cards except the Google Ads guide (`href='#'`). Search + "Meer artikelen laden" are visual only.
- Case-study images still load from advertisr.nl (remotePatterns added).
- Later: wire content to Sanity (`wire-sanity` skill) if the CMS should drive these pages.

---

## 📁 Active architecture

- **Stack:** Next.js 16 App Router, React 19, Tailwind v4 (`@theme` in `app/src/app/globals.css`), Sanity (template pages only), next/font (Bricolage Grotesque + Inter)
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
