# anatomy.md

> Auto-maintained by OpenWolf. Last scanned: 2026-11-11T11:40:22.954Z
> Files: 207 tracked | Anatomy hits: 0 | Misses: 0

## ./

- `.DS_Store` (~2732 tok)
- `AGENTS.md` — OpenWolf (~68 tok)
- `CLAUDE.md` — OpenWolf (~57 tok)
- `README.md` — Project documentation (~7775 tok)

## .claude/

- `launch.json` (~48 tok)
- `settings.json` (~514 tok)

## .claude/commands/

- `reframe.md` — Mode: migrate [framework] (~551 tok)
- `security-audit.md` — Layer 1 — Dependencies (~510 tok)

## .claude/rules/

- `openwolf.md` (~328 tok)

## .cursor/rules/

- `openwolf.mdc` (~87 tok)

## .github/workflows/

- `build-app-image.yml` — CI: Build App Image (~887 tok)
- `deploy-sanity-studio.yml` — CI: Deploy Sanity Studio (~802 tok)

## .opencode/command/

- `reframe.md` — Mode: migrate [framework] (~551 tok)
- `security-audit.md` — Layer 1 — Dependencies (~510 tok)

## .opencode/plugin/

- `openwolf.ts` — OpenWolf plugin entry — installed by `openwolf init --agent opencode`. (~74 tok)

## .opencode/plugin/openwolf/

- `anatomy.ts` — Exports parseAnatomy, serializeAnatomy, extractDescription, STORE_FILE + 12 more (~2922 tok)
  - fn `parseAnatomy` L5-28 (~207 tok)
  - fn `serializeAnatomy` L29-53 (~240 tok)
  - fn `extractDescription` L54-106 (~577 tok)
  - fn `sha256` L107-110 (~33 tok)
  - section `StoreFileEntry` L111-121 (~83 tok)
  - section `AnatomyStoreData` L122-127 (~63 tok)
  - fn `newStore` L128-132 (~64 tok)
  - fn `loadStore` L133-142 (~92 tok)
  - fn `saveStore` L143-157 (~162 tok)
  - fn `renderStore` L158-188 (~380 tok)
  - fn `renderToFile` L189-202 (~146 tok)
  - fn `importFromMarkdown` L203-227 (~305 tok)
  - fn `loadStoreReconciled` L228-240 (~137 tok)
  - fn `lockSleep` L241-244 (~31 tok)
  - fn `withAnatomyLock` L245-276 (~373 tok)
- `fs.ts` — Exports getWolfDir, wolfDirExists, readJSON, writeJSON + 6 more (~538 tok)
  - fn `getWolfDir` L5-8 (~28 tok)
  - fn `wolfDirExists` L9-12 (~31 tok)
  - fn `readJSON` L13-20 (~50 tok)
  - fn `writeJSON` L21-33 (~144 tok)
  - fn `readMarkdown` L34-41 (~41 tok)
  - fn `appendMarkdown` L42-47 (~64 tok)
  - fn `timeShort` L48-52 (~46 tok)
  - fn `timestamp` L53-56 (~22 tok)
  - fn `normalizePath` L57-60 (~24 tok)
  - fn `estimateTokens` L61-64 (~60 tok)
- `index.ts` — Exports OpenWolf (~1081 tok)
- `post-read.ts` — Exports handlePostRead (~629 tok)
  - fn `handlePostRead` L7-57 (~553 tok)
- `post-write.ts` — Exports handlePostWrite, summarizeEdit, autoDetectBugFix, detectFixPattern (~3226 tok)
  - fn `handlePostWrite` L8-39 (~302 tok)
  - fn `updateAnatomy` L40-86 (~473 tok)
  - fn `appendToMemory` L87-114 (~302 tok)
  - fn `trackSession` L115-150 (~338 tok)
  - fn `summarizeEdit` L151-184 (~471 tok)
  - fn `autoDetectBugFix` L185-228 (~523 tok)
  - fn `detectFixPattern` L229-265 (~610 tok)
  - fn `extractChangedLines` L266-270 (~88 tok)
- `pre-read.ts` — Exports handlePreRead (~685 tok)
  - fn `handlePreRead` L7-63 (~613 tok)
- `pre-write.ts` — Exports handlePreWrite (~1167 tok)
  - fn `tokenize` L14-21 (~63 tok)
  - fn `handlePreWrite` L22-35 (~132 tok)
  - fn `checkCerebrum` L36-65 (~369 tok)
  - section `BugEntry` L66-74 (~37 tok)
  - fn `checkBugLog` L75-105 (~399 tok)
- `session.ts` — Exports getSessionState, setSessionState, deleteSession, handleSessionStart (~952 tok)
  - fn `getSessionState` L8-11 (~33 tok)
  - fn `setSessionState` L12-15 (~33 tok)
  - fn `deleteSession` L16-19 (~26 tok)
  - fn `handleSessionStart` L20-89 (~783 tok)
- `stop.ts` — Exports handleStop (~1444 tok)
  - fn `handleStop` L6-35 (~262 tok)
  - fn `checkForMissingBugLogs` L36-50 (~165 tok)
  - fn `buildLedgerEntry` L51-114 (~743 tok)
  - fn `appendSessionSummary` L115-126 (~218 tok)
- `types.ts` — Exports FileRead, FileWrite, SessionState, PartialSessionState + 2 more (~217 tok)

## app/

- `.DS_Store` (~2186 tok)
- `.gitignore` — Git ignore rules (~147 tok)
- `Dockerfile` — Docker container definition (~294 tok)
- `eslint.config.mjs` — ESLint flat configuration (~124 tok)
- `netlify.toml` (~228 tok)
- `next-env.d.ts` — / <reference types="next" /> (~72 tok)
- `next.config.ts` — Next.js configuration (~518 tok)
- `package-lock.json` — npm lock file (~208179 tok)
- `package.json` — Node.js package manifest (~389 tok)
- `postcss.config.mjs` — Declares config (~26 tok)
- `sentry.edge.config.ts` — Sentry for the edge runtime (middleware, edge routes). Imported by (~74 tok)
- `sentry.options.ts` — One source of Sentry settings for the client, the server and the edge (~291 tok)
- `sentry.server.config.ts` — Sentry for the Node.js server runtime. Imported by `src/instrumentation.ts`, (~69 tok)
- `tsconfig.json` — TypeScript configuration (~192 tok)
- `tsconfig.tsbuildinfo` (~89355 tok)

## app/design/

- `contact.html` — Contact | Advertisr. (~18654 tok)
- `google-ads-voor-mkb.html` — Google Ads voor MKB: complete gids voor winstgevende campagnes in 2026 | Advertisr. (~235787 tok)
- `resultaten.html` — Resultaten | Advertisr. (~263956 tok)

## app/public/images/advertisr/

- `groovy-anton.webp` (~14840 tok)
- `maxim-s-fashion-plus.webp` (~20856 tok)

## app/scripts/

- `check-form.ts` — The smallest thing that fails when the CMS-driven form breaks. (~2733 tok)
  - fn `names` L34-114 (~746 tok)
  - fn `runFormQuery` L115-124 (~110 tok)
  - fn `checkAllowList` L125-206 (~948 tok)
  - fn `checkCaptcha` L207-251 (~527 tok)
- `check-jsonld.ts` — The smallest thing that fails when the structured data quietly changes. (~2615 tok)
  - fn `node` L37-230 (~2266 tok)
- `seed.ts` — Seed Sanity content. Runs every target, or only the ones you name. (~630 tok)
  - fn `parseTargets` L40-51 (~106 tok)
  - fn `main` L52-68 (~119 tok)

## app/scripts/seed/

- `about.ts` — Seeds the second page — /about. (~980 tok)
  - fn `buildAboutContent` L29-113 (~753 tok)
  - fn `seedAbout` L114-124 (~76 tok)
- `contact.ts` — Seeds /contact — the page the demo form actually lives on. (~527 tok)
  - fn `buildContactContent` L12-51 (~352 tok)
  - fn `seedContact` L52-56 (~40 tok)
- `forms.ts` — Seeds the shared form settings and one working contact form. (~588 tok)
  - fn `upsertFormSettings` L19-35 (~151 tok)
  - fn `upsertContactForm` L36-58 (~191 tok)
  - fn `seedForms` L59-64 (~34 tok)
- `home.ts` — Seeds the home page. (~902 tok)
  - fn `buildHomeContent` L13-104 (~798 tok)
  - fn `seedHome` L105-109 (~36 tok)
- `navigation.ts` — Seeds the navigation and footer singletons. (~684 tok)
  - fn `navLinkExternal` L10-18 (~47 tok)
  - fn `navLinkInternal` L19-27 (~66 tok)
  - fn `pageIdBySlug` L28-35 (~70 tok)
  - fn `pageLink` L36-40 (~50 tok)
  - fn `upsertNavigation` L41-56 (~140 tok)
  - fn `upsertFooter` L57-82 (~192 tok)
  - fn `seedNavigation` L83-88 (~38 tok)
- `shared.ts` — Shared Sanity write helpers for the per-page seed scripts in this folder. (~1358 tok)
  - fn `key` L44-50 (~48 tok)
  - fn `externalLink` L51-54 (~34 tok)
  - fn `cta` L55-66 (~87 tok)
  - fn `contentTypeFor` L67-70 (~36 tok)
  - fn `uploadImage` L71-105 (~253 tok)
  - fn `upsertFaq` L106-138 (~276 tok)
  - fn `upsertPage` L139-162 (~191 tok)
- `site-information.ts` — The `siteInformation` singleton, filled from the defaults in (~356 tok)

## app/src/

- `instrumentation-client.ts` — Sentry in the browser. (~279 tok)
- `instrumentation.ts` — Server-side instrumentation hook. Without `NEXT_PUBLIC_SENTRY_DSN` both (~207 tok)

## app/src/app/

- `global-error.tsx` — Last-resort error boundary: it replaces the root layout, so it renders its (~239 tok)
- `globals.css` — Styles: 6 rules, 73 vars, 2 media queries, 7 animations, 1 layers (~2286 tok)
- `layout.tsx` — display (~428 tok)
- `manifest.json` (~46 tok)
- `not-found.tsx` — NotFound (~246 tok)
- `robots.ts` — Served at `/robots.txt`. (~150 tok)
- `sitemap.ts` — The static Advertisr. routes, plus every CMS page listed from the CMS itself. (~467 tok)

## app/src/app/(cms)/

- `layout.tsx` — Site-wide metadata defaults, from the `siteInformation` singleton. (~914 tok)
  - fn `generateMetadata` L22-53 (~193 tok)
  - fn `asNavLinks` L54-58 (~74 tok)
  - fn `CmsLayout` L59-92 (~348 tok)

## app/src/app/(cms)/[slug]/

- `page.tsx` — Every CMS page except the home page renders through this one route — there (~603 tok)
  - fn `generateMetadata` L23-32 (~69 tok)
  - fn `SanityPage` L33-74 (~292 tok)

## app/src/app/(landing)/

- `layout.tsx` — Stripped-down chrome for the /groeiplan landing page: no menu, a slim footer and a sticky CTA on phones. (~522 tok)
  - fn `LandingLayout` L8-43 (~419 tok)

## app/src/app/(landing)/groeiplan/

- `page.tsx` — metadata (~3255 tok)
  - fn `GrowthPlanPage` L69-242 (~2345 tok)

## app/src/app/(site)/

- `layout.tsx` — Chrome for the Advertisr. pages (everything except /groeiplan and the CMS routes). (~132 tok)
- `page.tsx` — STAGES (~5312 tok)
  - fn `Hero` L123-218 (~1327 tok)
  - fn `Services` L219-281 (~1206 tok)
  - fn `Cases` L282-300 (~147 tok)
  - fn `Approach` L301-335 (~522 tok)
  - fn `StatBand` L336-358 (~214 tok)
  - fn `Team` L359-405 (~667 tok)
  - fn `HomePage` L406-434 (~186 tok)

## app/src/app/(site)/ai-agent-workflows/

- `page.tsx` — metadata (~3532 tok)
  - fn `Page` L14-244 (~3337 tok)

## app/src/app/(site)/contact/

- `page.tsx` — metadata (~2194 tok)
  - fn `ContactPage` L51-161 (~1523 tok)

## app/src/app/(site)/data-analytics/

- `page.tsx` — metadata (~3189 tok)
  - fn `Page` L14-232 (~2996 tok)

## app/src/app/(site)/google-ads/

- `page.tsx` — metadata (~3549 tok)
  - fn `Page` L14-244 (~3362 tok)

## app/src/app/(site)/kennisbank/

- `page.tsx` — metadata (~1402 tok)
  - fn `KnowledgeBasePage` L13-115 (~1229 tok)

## app/src/app/(site)/kennisbank/google-ads-voor-mkb/

- `page.tsx` — Long-form body styles, as the design's `.art-prose`. (~6888 tok)
  - fn `InlineCta` L105-124 (~423 tok)
  - fn `Box` L125-133 (~61 tok)
  - fn `ArticlePage` L134-466 (~5197 tok)

## app/src/app/(site)/marketing-automation/

- `page.tsx` — metadata (~3116 tok)
  - fn `Page` L14-230 (~2922 tok)

## app/src/app/(site)/meta-ads/

- `page.tsx` — metadata (~3482 tok)
  - fn `Page` L14-244 (~3300 tok)

## app/src/app/(site)/resultaten/

- `page.tsx` — metadata (~2924 tok)
  - fn `ResultsPage` L102-225 (~1569 tok)

## app/src/app/(site)/seo-geo/

- `page.tsx` — Browser-framed screenshot of the Advertisr portal. (~6029 tok)
  - fn `Shot` L19-47 (~287 tok)
  - fn `HeroShot` L48-232 (~2401 tok)
  - fn `Tools` L233-289 (~787 tok)
  - fn `Steps` L290-318 (~365 tok)
  - fn `Tick` L319-328 (~112 tok)
  - fn `Features` L329-368 (~438 tok)
  - fn `Page` L369-483 (~1385 tok)

## app/src/app/(site)/social-media-organisch/

- `page.tsx` — metadata (~4228 tok)
  - fn `Pillars` L38-65 (~322 tok)
  - fn `Output` L66-87 (~259 tok)
  - fn `Month` L88-98 (~69 tok)
  - fn `Page` L99-322 (~2976 tok)

## app/src/app/(site)/team/

- `page.tsx` — metadata (~2544 tok)
  - fn `TeamPage` L58-189 (~1742 tok)

## app/src/app/(site)/web-development/

- `page.tsx` — metadata (~3430 tok)
  - fn `Page` L14-241 (~3246 tok)

## app/src/app/api/health/

- `route.ts` — Liveness check for uptime monitors and load balancers: 200 while the server (~105 tok)

## app/src/app/api/lead/

- `route.ts` — The Advertisr. lead form ("Ontvang je gratis groeiplan"), posted by (~804 tok)
  - fn `POST` L24-77 (~566 tok)

## app/src/app/api/revalidate/

- `route.ts` — Expires the cached Sanity reads. Two callers: (~732 tok)
  - fn `reply` L30-33 (~36 tok)
  - fn `OPTIONS` L34-40 (~89 tok)
  - fn `expire` L41-45 (~42 tok)
  - fn `POST` L46-71 (~264 tok)

## app/src/app/api/sentry-test/

- `route.ts` — Always fails, on purpose: called from `/sentry-test` to check that server (~163 tok)

## app/src/app/api/submit-form/

- `route.ts` — Bigger uploads are rejected rather than silently dropped from the mail. (~2065 tok)
  - fn `fail` L15-19 (~57 tok)
  - fn `splitEmails` L20-26 (~42 tok)
  - fn `POST` L27-198 (~1795 tok)

## app/src/app/api/test-mail/

- `route.ts` — Sends one test mail with the published Form settings — the "Send test mail" (~1033 tok)
  - fn `reply` L31-34 (~39 tok)
  - fn `OPTIONS` L35-38 (~28 tok)
  - fn `POST` L39-91 (~644 tok)

## app/src/app/sentry-test/

- `page.tsx` — Served at `/sentry-test?secret=<SENTRY_TEST_SECRET>`: checks the Sentry connection (~380 tok)

## app/src/components/

- `JsonLd.tsx` — Put one graph into the page. (~98 tok)
- `PageBuilder.tsx` — Map one Sanity block onto its React component. (~3274 tok)
  - fn `toCta` L27-45 (~229 tok)
  - fn `renderBlock` L46-313 (~2622 tok)
  - fn `PageBuilder` L314-326 (~92 tok)
- `SentryTest.tsx` — Buttons that raise a deliberate error in the browser and on the server, so (~686 tok)
  - fn `SentryTest` L14-70 (~556 tok)
- `TrackingScripts.tsx` — Google Tag Manager and the Meta (Facebook) pixel, both opt-in. (~866 tok)
  - fn `TrackingScriptsHead` L21-62 (~399 tok)
  - fn `TrackingScriptsBody` L63-92 (~222 tok)

## app/src/components/advertisr/

- `ArticleCard.tsx` — Placeholder art per category: tinted glow + line icon + dot grid. (~1711 tok)
  - fn `CategoryArt` L75-89 (~180 tok)
  - fn `Avatar` L90-106 (~143 tok)
  - fn `PillarCard` L107-133 (~372 tok)
  - fn `ArticleCard` L134-156 (~336 tok)
- `CaseCard.tsx` — Dark photo card with a category pill, title and two stats. (~628 tok)
  - fn `CaseCard` L13-49 (~553 tok)
- `Compare.tsx` — "Bureaus zetten er vaak een laag tussen. Wij niet." comparison table. (~784 tok)
  - fn `Compare` L16-66 (~549 tok)
- `FinalCta.tsx` — Extra background layer (seo-geo puts an ambient ring here). (~622 tok)
  - fn `FinalCta` L16-54 (~496 tok)
- `Footer.tsx` — COLUMNS (~603 tok)
  - fn `Footer` L29-61 (~370 tok)
- `kennisbank.tsx` — Category pills. Like the design, they only mark the active one; filtering comes with real content. (~728 tok)
  - fn `Pills` L8-30 (~226 tok)
  - fn `NewsletterForm` L31-73 (~435 tok)
- `LeadForm.tsx` — null drops the message field (the short groeiplan hero form). (~1536 tok)
  - fn `LeadForm` L31-129 (~1222 tok)
- `Logos.tsx` — The design has two exports of the logo set; the service pages use the second. (~894 tok)
  - fn `Logos` L28-64 (~588 tok)
- `Marquee.tsx` — Pill strip that scrolls forever (doubled so the loop is seamless). (~309 tok)
- `Nav.tsx` — Fixed top bar; frosted once the page scrolls past 20px. Links hide below (~878 tok)
  - fn `activeLabel` L10-19 (~115 tok)
  - fn `Nav` L20-74 (~687 tok)
- `Reviews.tsx` — Google-review masonry. The homepage shows all ten, other pages the first six. (~658 tok)
  - fn `Reviews` L17-63 (~531 tok)
- `service.tsx` — Dark "Wat levert … op?" band with a CTA button. (~6170 tok)
  - fn `CtaBand` L16-48 (~254 tok)
  - fn `FloatStat` L49-62 (~153 tok)
  - fn `ServiceHero` L63-114 (~535 tok)
  - fn `BridgeQuote` L115-137 (~414 tok)
  - fn `Pain` L138-184 (~566 tok)
  - fn `Funnel` L185-250 (~1005 tok)
  - fn `LedgerRow` L251-270 (~371 tok)
  - fn `Deliverables` L271-316 (~655 tok)
  - fn `Crea` L317-409 (~842 tok)
  - fn `CaseStudy` L410-449 (~414 tok)
  - fn `FaqList` L450-467 (~246 tok)
  - fn `Faq` L468-487 (~120 tok)
  - fn `ProcRow` L488-506 (~298 tok)
- `SiteEffects.tsx` — The designs' page script, ported once for every page: (~1080 tok)
  - fn `SiteEffects` L14-103 (~938 tok)
- `Toc.tsx` — Sticky table of contents with scrollspy; a toggle button replaces the label below 900px. (~628 tok)
  - fn `Toc` L7-53 (~574 tok)
- `ui.tsx` — Content width shell: 1240px, 40px gutter (22px on phones). (~1876 tok)
  - fn `Wrap` L6-10 (~68 tok)
  - fn `Sec` L11-14 (~49 tok)
  - fn `Eyebrow` L15-30 (~146 tok)
  - fn `SecHead` L31-59 (~248 tok)
  - fn `Arrow` L60-63 (~37 tok)
  - fn `BtnRed` L64-71 (~66 tok)
  - fn `BtnGhost` L72-102 (~171 tok)
  - fn `Brand` L103-120 (~191 tok)
  - fn `Check` L121-130 (~135 tok)
  - fn `Ambient` L131-140 (~202 tok)
  - fn `GoogleG` L141-164 (~280 tok)
  - fn `Count` L165-169 (~50 tok)
  - fn `Crumb` L170-191 (~176 tok)
- `visuals.tsx` — Index that advances every `ms`, unless the visitor prefers reduced motion. (~4996 tok)
  - fn `useCycle` L12-21 (~91 tok)
  - fn `Stage` L22-29 (~138 tok)
  - fn `Live` L30-38 (~89 tok)
  - fn `Browser` L39-52 (~175 tok)
  - fn `PhoneVisual` L53-97 (~711 tok)
  - fn `SerpVisual` L98-136 (~624 tok)
  - fn `SiteVisual` L137-173 (~321 tok)
  - fn `DashVisual` L174-236 (~764 tok)
  - fn `JourneyVisual` L237-286 (~637 tok)
  - fn `FlowVisual` L287-344 (~631 tok)
  - fn `SocialVisual` L345-403 (~700 tok)

## app/src/components/blocks/

- `Benefits.tsx` — DEFAULTS — renders chart (~1257 tok)
  - fn `BenefitIcon` L32-117 (~570 tok)
  - fn `Benefits` L118-165 (~501 tok)
- `ContactForm.tsx` — The form itself, from the referenced `form` document. (~1272 tok)
  - fn `ContactForm` L50-130 (~852 tok)
- `CrossLinks.tsx` — DEFAULTS (~631 tok)
  - fn `CrossLinks` L21-63 (~502 tok)
- `CtaBand.tsx` — DEFAULTS (~668 tok)
  - fn `CtaBand` L30-83 (~478 tok)
- `Faq.tsx` — DEFAULTS (~1065 tok)
  - fn `Faq` L26-100 (~890 tok)
- `Hero.tsx` — DEFAULTS (~1682 tok)
  - fn `Hero` L40-185 (~1424 tok)
- `Intro.tsx` — DEFAULTS (~1316 tok)
  - fn `renderHighlightedTitle` L40-63 (~136 tok)
  - fn `Intro` L64-158 (~921 tok)
- `MediaText.tsx` — Text column with a supporting photo on the right. (~620 tok)
  - fn `MediaText` L32-82 (~411 tok)
- `PageHero.tsx` — DEFAULTS (~1058 tok)
  - fn `PageHero` L31-125 (~864 tok)
- `Services.tsx` — Under each card; `{{service}}` becomes the card label. (~1642 tok)
  - fn `ServiceCardItem` L61-110 (~469 tok)
  - fn `Services` L111-175 (~733 tok)
- `Steps.tsx` — DEFAULTS (~1660 tok)
  - fn `stepImageSrc` L34-37 (~34 tok)
  - fn `Steps` L38-159 (~1403 tok)

## app/src/components/form/

- `Captcha.tsx` — Public half of the spam-check settings — the secret stays server-side. (~1344 tok)
  - fn `loadScript` L38-64 (~309 tok)
  - fn `Captcha` L65-142 (~644 tok)
- `fields.tsx` — `stacked` is the roomy page form, `compact` fits a narrow card or sidebar. (~1728 tok)
  - fn `selectCaret` L41-51 (~128 tok)
  - fn `linkify` L52-73 (~153 tok)
  - fn `FormField` L74-180 (~965 tok)
- `FormRenderer.tsx` — Shared copy from Form settings — button fallbacks, progress, errors. (~3475 tok)
  - fn `IconArrowRight` L67-74 (~66 tok)
  - fn `SuccessPanel` L75-118 (~459 tok)
  - fn `FormRenderer` L119-340 (~2291 tok)

## app/src/components/layout/

- `SiteFooter.tsx` — From `getSiteInformation()`; the defaults stand in when not passed. (~1223 tok)
  - fn `FooterLinkList` L14-37 (~204 tok)
  - fn `SiteFooter` L38-127 (~932 tok)
- `SiteHeader.tsx` — isActivePath (~1525 tok)
  - fn `isActivePath` L11-15 (~53 tok)
  - fn `DesktopNav` L16-57 (~350 tok)
  - fn `Burger` L58-110 (~342 tok)
  - fn `SiteHeader` L111-175 (~681 tok)

## app/src/components/ui/

- `ArrowLink.tsx` — Standalone text link with circular arrow (renders as `<a>`). (~546 tok)
  - fn `ArrowLink` L34-57 (~154 tok)
  - fn `ArrowLinkLabel` L58-73 (~93 tok)
- `Button.tsx` — Class string for anything that should look like a button (e.g. a `<button>`). (~520 tok)
  - fn `buttonClass` L34-41 (~60 tok)
  - fn `Button` L42-68 (~126 tok)
- `ContactIcon.tsx` — Phone / WhatsApp / mail / map-pin, for the contact panel beside a form. (~570 tok)
  - fn `ContactIcon` L9-60 (~507 tok)
- `Eyebrow.tsx` — Accent tone for dark backgrounds where plain white reads too cold. (~192 tok)
- `IconArrow.tsx` — IconArrow (~203 tok)
- `Image.tsx` — next/image, but Sanity images are resized by the Sanity CDN (see (~196 tok)
- `Lead.tsx` — Lead (~91 tok)
- `LogoMark.tsx` — From `siteInformation`; falls back to the default when not passed. (~478 tok)
- `Reveal.tsx` — delayClass (~252 tok)
- `RevealLink.tsx` — delayClass (~277 tok)
- `SectionHead.tsx` — SectionHead (~160 tok)
- `Wrap.tsx` — Site content width shell. (~119 tok)

## app/src/hooks/

- `useActiveStep.ts` — Tracks which step list item is closest to ~42% viewport height. (~316 tok)
- `useMobileNav.ts` — Exports useMobileNav (~282 tok)
- `useRevealOnScroll.ts` — Exports useRevealOnScroll (~259 tok)
- `useStickyTopbar.ts` — Exports useStickyTopbar (~236 tok)

## app/src/lib/

- `captcha.ts` — Server half of the form spam check. No Next.js in here, so the verdicts can (~498 tok)
- `chrome.ts` — Scroll threshold (px) before the topbar gets the stuck state. (~62 tok)
- `cn.ts` — Exports cn (~37 tok)
- `demo-content.ts` — Demo copy for every block. (~3960 tok)
- `env.ts` — Sanity connection details and analytics ids, read from the environment. (~380 tok)
- `form-fields.ts` — Shape and layout rules for CMS-authored forms. No React in here, so the (~1976 tok)
  - fn `resolveFormText` L30-106 (~619 tok)
  - fn `toRedirect` L107-121 (~159 tok)
  - fn `toSteps` L122-133 (~123 tok)
  - fn `fillTokens` L134-145 (~126 tok)
  - fn `toFieldRows` L146-164 (~182 tok)
  - fn `toFormDefinition` L165-208 (~446 tok)
- `form-mail.ts` — The mails `POST /api/submit-form` sends. (~1688 tok)
  - fn `escapeHtml` L16-27 (~92 tok)
  - fn `color` L28-32 (~62 tok)
  - fn `tint` L33-50 (~156 tok)
  - fn `renderText` L51-82 (~230 tok)
  - fn `renderFormMail` L83-169 (~990 tok)
- `json-ld.ts` — Structured data (schema.org JSON-LD), built from what is in the CMS. (~2953 tok)
  - fn `absoluteUrl` L32-42 (~123 tok)
  - fn `prune` L43-67 (~295 tok)
  - fn `serializeJsonLd` L68-72 (~54 tok)
  - fn `jsonLdGraph` L73-96 (~278 tok)
  - fn `postalAddress` L97-123 (~287 tok)
  - fn `organizationJsonLd` L124-138 (~129 tok)
  - fn `websiteJsonLd` L139-150 (~82 tok)
  - fn `siteJsonLd` L151-161 (~126 tok)
  - fn `breadcrumbJsonLd` L162-180 (~154 tok)
  - fn `faqQuestions` L181-198 (~192 tok)
  - fn `pageFaqs` L199-215 (~188 tok)
  - fn `pageBreadcrumbLabel` L216-242 (~257 tok)
  - fn `webPageJsonLd` L243-269 (~341 tok)
  - fn `pageJsonLd` L270-276 (~59 tok)
- `links.ts` — The slug of the page that renders at `/`. (~446 tok)
- `mail.ts` — Mail sending for `/api/submit-form` and `/api/test-mail`: Mailjet's or (~2219 tok)
  - fn `sendViaMailjet` L40-77 (~359 tok)
  - fn `sendViaResend` L78-114 (~388 tok)
  - fn `sendViaSmtp` L115-143 (~264 tok)
  - fn `sendMail` L144-154 (~137 tok)
  - fn `resolveMailSettings` L155-207 (~684 tok)
  - fn `missingMailMessage` L208-211 (~67 tok)
- `secret.ts` — Constant-time compare; hashing first evens out the lengths. (~94 tok)
- `sentry-test.ts` — Guards `/sentry-test` and `/api/sentry-test`: both answer 404 unless (~182 tok)
- `site.ts` — Site-wide details, and the defaults they fall back to. (~1562 tok)
  - fn `text` L87-90 (~33 tok)
  - fn `list` L91-105 (~154 tok)
  - fn `resolveSiteInformation` L106-122 (~230 tok)
  - fn `withDefaults` L123-135 (~116 tok)
  - fn `telHref` L136-139 (~29 tok)
  - fn `mailtoHref` L140-150 (~63 tok)

## app/src/lib/advertisr/

- `articles.ts` — Kennisbank content. Only the Google Ads guide has a page so far; the rest link to '#' as in the design. (~1164 tok)
- `nav.ts` — Every service page, in the footer's order. (~362 tok)
- `reviews.ts` — Exports REVIEWS (~583 tok)

## app/src/sanity/

- `client.ts` — Fetch that degrades instead of throwing. (~301 tok)
- `fetch.ts` — Every Sanity read that feeds a page carries this one tag. A publish in the (~243 tok)
- `image-loader.ts` — Quality for the Sanity CDN; with `auto=format` that usually ends up WebP/AVIF. (~426 tok)
- `image.ts` — An image field can exist in Sanity without a file — only an `alt` filled (~480 tok)
- `metadata.ts` — The OG image for a page's `seo` object, sized for social cards. (~678 tok)
  - fn `seoImageUrl` L19-40 (~228 tok)
  - fn `pageMetadata` L41-70 (~305 tok)
- `queries.ts` — Resolve internal page references on link/cta objects. (~1540 tok)
- `sanity.types.ts` — --------------------------------------------------------------------------------- (~10644 tok)
- `schema.json` (~27621 tok)
- `site-information.ts` — The site's details, with defaults filled in where the CMS is empty. (~316 tok)

## studio/

- `.gitignore` — Git ignore rules (~143 tok)
- `eslint.config.mjs` — ESLint flat configuration (~21 tok)
- `package-lock.json` — npm lock file (~171738 tok)
- `package.json` — Node.js package manifest (~301 tok)
- `README.md` — Project documentation (~427 tok)
- `sanity.cli.ts` — Typegen runs from the studio — the CLI needs a studio project root — but (~270 tok)
- `sanity.config.ts` — Project id and dataset come from the environment so the studio and the app (~267 tok)
- `structure.ts` — Documents that exist exactly once. They get a fixed `_id` and a top-level (~799 tok)
- `tsconfig.json` — TypeScript configuration (~120 tok)

## studio/schemaTypes/

- `faqType.ts` — Exports faqType (~238 tok)
- `footerType.ts` — Exports footerType (~584 tok)
- `formGeneralSettingsType.ts` — Mail and spam settings shared by every `form`. A singleton. (~3396 tok)
  - fn `captchaOf` L19-23 (~72 tok)
  - fn `captchaKeyFields` L24-335 (~3098 tok)
- `formType.ts` — Multi-step forms keep their fields under `steps`, simple ones under `fields`. (~2578 tok)
  - fn `isSteps` L5-274 (~2520 tok)
- `index.ts` — Every schema type the studio knows about. (~527 tok)
- `navigationType.ts` — Exports navigationType (~363 tok)
- `pageBuilderType.ts` — The block list editors can insert on a page. (~238 tok)
- `pageType.ts` — Exports pageType (~213 tok)
- `siteInformationType.ts` — Who the site belongs to: the details that appear in the header, the footer (~1300 tok)

## studio/schemaTypes/blocks/

- `benefitsType.ts` — Exports benefitsType (~643 tok)
- `contactFormType.ts` — A form from Forms, with a contact panel beside it. (~798 tok)
- `crossLinksType.ts` — Exports crossLinksType (~319 tok)
- `ctaBandType.ts` — Exports ctaBandType (~338 tok)
- `faqsType.ts` — Exports faqsType (~264 tok)
- `heroType.ts` — Exports heroType (~640 tok)
- `introType.ts` — Exports introType (~687 tok)
- `mediaTextType.ts` — Exports mediaTextType (~346 tok)
- `pageHeroType.ts` — Exports pageHeroType (~483 tok)
- `servicesType.ts` — Exports servicesType (~753 tok)
- `stepsType.ts` — Exports stepsType (~457 tok)

## studio/schemaTypes/objects/

- `ctaType.ts` — Exports ctaType (~94 tok)
- `formFieldType.ts` — Hide a setting unless the field's input type is one of these. (~1306 tok)
- `linkFields.ts` — Shared internal/external link fields for `link` and `cta` objects. (~407 tok)
- `linkType.ts` — Exports linkType (~54 tok)
- `seoType.ts` — Exports seoType (~245 tok)

## studio/tools/

- `ClearCache.tsx` — "Refresh website": expires the website's cached Sanity content right now, (~1023 tok)
  - fn `readSecret` L26-33 (~35 tok)
  - fn `ClearCache` L34-116 (~754 tok)
- `MailTest.tsx` — "Send test mail" on Form settings → Mail. Calls the app's `/api/test-mail`, (~1421 tok)
  - fn `readStored` L30-37 (~36 tok)
  - fn `store` L38-45 (~51 tok)
  - fn `MailTest` L46-158 (~1070 tok)
- `mediaData.ts` — Queries, types and formatting helpers for the Media panel (`MediaTool.tsx`). (~2190 tok)
  - fn `chunk` L61-129 (~516 tok)
  - fn `typeLabel` L130-133 (~25 tok)
  - fn `isImage` L134-138 (~71 tok)
  - fn `uploadKind` L139-142 (~38 tok)
  - fn `formatBytes` L143-151 (~103 tok)
  - fn `formatDate` L152-158 (~74 tok)
  - fn `formatDimensions` L159-164 (~70 tok)
  - fn `displayName` L165-176 (~95 tok)
  - fn `matchesSearch` L177-202 (~213 tok)
  - fn `matchesFilter` L203-218 (~136 tok)
  - fn `dedupeUsage` L219-234 (~165 tok)
  - fn `thumbnailUrl` L235-238 (~36 tok)
- `mediaStyles.ts` — The Media panel's own styles, on top of `panelStyles.ts`. Same approach — (~1416 tok)
- `MediaTool.tsx` — The media library in the studio: every upload in one place, searchable, with (~5698 tok)
  - fn `MediaLibrary` L78-421 (~3196 tok)
  - fn `MediaCard` L422-457 (~284 tok)
  - fn `MediaDetail` L458-629 (~1435 tok)
- `panelStyles.ts` — Shared inline styles for custom studio panels — the parts that any panel (~335 tok)
