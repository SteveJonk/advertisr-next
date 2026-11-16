# anatomy.md

> Auto-maintained by OpenWolf. Last scanned: 2026-11-13T17:00:00.167Z
> Files: 165 tracked | Anatomy hits: 0 | Misses: 0

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

- `build-app-image.yml` — CI: Build App Image (~1497 tok)
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

- `.DS_Store` (~3824 tok)
- `.gitignore` — Git ignore rules (~163 tok)
- `Dockerfile` — Docker container definition (~547 tok)
- `eslint.config.mjs` — ESLint flat configuration (~124 tok)
- `netlify.toml` (~228 tok)
- `next-env.d.ts` — / <reference types="next" /> (~72 tok)
- `next.config.ts` — Next.js configuration (~518 tok)
- `package-lock.json` — npm lock file (~208545 tok)
- `package.json` — Node.js package manifest (~388 tok)
- `postcss.config.mjs` — Declares config (~26 tok)
- `sentry.edge.config.ts` — Sentry for the edge runtime (middleware, edge routes). Imported by (~74 tok)
- `sentry.options.ts` — One source of Sentry settings for the client, the server and the edge (~291 tok)
- `sentry.server.config.ts` — Sentry for the Node.js server runtime. Imported by `src/instrumentation.ts`, (~69 tok)
- `tsconfig.json` — TypeScript configuration (~192 tok)
- `tsconfig.tsbuildinfo` (~87272 tok)
- `vercel.json` (~42 tok)

## app/design/

- `contact.html` — Contact | Advertisr. (~18654 tok)
- `google-ads-voor-mkb.html` — Google Ads voor MKB: complete gids voor winstgevende campagnes in 2026 | Advertisr. (~235787 tok)
- `resultaten.html` — Resultaten | Advertisr. (~263956 tok)

## app/public/images/advertisr/

- `groovy-anton.webp` (~14840 tok)
- `maxim-s-fashion-plus.webp` (~20856 tok)

## app/scripts/

- `backfill-google-reviews.ts` — One-off: imports ALL Google reviews (the daily sync only sees the 5 most relevant). (~310 tok)
- `check-form.ts` — The smallest thing that fails when the CMS-driven form breaks. (~2709 tok)
  - fn `names` L34-114 (~746 tok)
  - fn `runFormQuery` L115-124 (~110 tok)
  - fn `checkAllowList` L125-203 (~930 tok)
  - fn `checkCaptcha` L204-248 (~527 tok)
- `check-jsonld.ts` — The smallest thing that fails when the structured data quietly changes. (~2331 tok)
  - fn `node` L37-213 (~1994 tok)
- `import-wordpress.ts` — One-off: imports the advertisr.nl WordPress posts as articles (first tag = category, HTML → Portable Text). `npm run import:wp [-- --dry]`. (~2725 tok)
  - fn `doc` L73-73 (~18 tok)
  - fn `text` L74-86 (~170 tok)
  - fn `mapHref` L87-97 (~100 tok)
  - fn `span` L98-102 (~27 tok)
  - fn `bullet` L103-111 (~42 tok)
  - fn `toBody` L112-185 (~805 tok)
  - fn `main` L186-259 (~811 tok)
- `seed.ts` — Fills the dataset with the site's real content: settings, shared documents (~772 tok)
  - fn `main` L23-59 (~465 tok)

## app/scripts/seed/

- `content.ts` — The site's real copy, as it was in the approved designs. The service pages (~17043 tok)
  - fn `link` L17-221 (~3475 tok)
  - fn `inlineCta` L222-392 (~3648 tok)
  - fn `reviewsBlock` L393-393 (~45 tok)
  - fn `logos` L394-394 (~41 tok)
  - fn `faqs` L395-395 (~46 tok)
  - fn `finalCta` L396-406 (~156 tok)
  - fn `steps` L407-741 (~5459 tok)
  - fn `shot` L742-959 (~4011 tok)
- `forms.ts` — The form documents and Form settings. No Sanity client in here, so `check:form` can import it. (~1138 tok)
  - fn `field` L2-13 (~230 tok)
  - fn `message` L14-93 (~878 tok)
- `lib.ts` — Helpers for the seed: a write client, Portable Text from a light markup, (~1399 tok)
  - fn `hash` L29-33 (~59 tok)
  - fn `t` L34-47 (~112 tok)
  - fn `block` L48-59 (~104 tok)
  - fn `p` L60-60 (~19 tok)
  - fn `h2` L61-61 (~26 tok)
  - fn `li` L62-63 (~29 tok)
  - fn `cta` L64-64 (~31 tok)
  - fn `img` L65-65 (~21 tok)
  - fn `ref` L66-69 (~28 tok)
  - fn `upload` L70-92 (~286 tok)
  - fn `resolve` L93-122 (~356 tok)

## app/scripts/seed/pages/

- `ai-agent-workflows.json` (~4171 tok)
- `data-analytics.json` (~3834 tok)
- `google-ads.json` (~4128 tok)
- `marketing-automation.json` (~3775 tok)
- `meta-ads.json` (~4060 tok)
- `social-media-organisch.json` (~4714 tok)
- `web-development.json` (~4006 tok)

## app/src/

- `.DS_Store` (~2186 tok)
- `instrumentation-client.ts` — Sentry in the browser. (~279 tok)
- `instrumentation.ts` — Server-side instrumentation hook. Without `NEXT_PUBLIC_SENTRY_DSN` both (~207 tok)

## app/src/app/

- `global-error.tsx` — Last-resort error boundary: it replaces the root layout, so it renders its (~239 tok)
- `globals.css` — Styles: 6 rules, 73 vars, 2 media queries, 7 animations, 1 layers (~2286 tok)
- `layout.tsx` — Site-wide defaults from Site information; each page's `seo` layers on top. (~482 tok)
- `manifest.ts` — Declares manifest (~197 tok)
- `not-found.tsx` — NotFound (~188 tok)
- `robots.ts` — Served at `/robots.txt`. (~150 tok)
- `sitemap.ts` — Every page, case study and article with a body, straight from the CMS, with (~446 tok)

## app/src/app/(landing)/

- `layout.tsx` — Stripped-down chrome for the /groeiplan landing page: no menu, a slim footer and a sticky CTA on phones. (~533 tok)
  - fn `LandingLayout` L9-43 (~415 tok)

## app/src/app/(landing)/groeiplan/

- `page.tsx` — The `groeiplan` page document, in the landing layout of this route group. (~82 tok)

## app/src/app/(site)/

- `layout.tsx` — Chrome for the Advertisr. pages (everything except /groeiplan). (~155 tok)
- `page.tsx` — generateMetadata (~70 tok)

## app/src/app/(site)/[slug]/

- `page.tsx` — Pages with a route of their own: the home page, the kennisbank and the landing page. (~356 tok)

## app/src/app/(site)/case/[slug]/

- `page.tsx` — Case study page: hero from the card fields, results, optional story (prose.tsx), CTA band, other cases. (~1708 tok)
  - fn `getCase` L26-27 (~24 tok)
  - fn `generateStaticParams` L28-32 (~57 tok)
  - fn `generateMetadata` L33-43 (~156 tok)
  - fn `CasePage` L44-148 (~1132 tok)

## app/src/app/(site)/kennisbank/

- `page.tsx` — A route of its own because `kennisbank/[slug]` claims the segment. (~81 tok)

## app/src/app/(site)/kennisbank/[slug]/

- `page.tsx` — getArticle (~3049 tok)
  - fn `getArticle` L25-26 (~26 tok)
  - fn `generateStaticParams` L27-31 (~60 tok)
  - fn `generateMetadata` L32-41 (~135 tok)
  - fn `ArticlePage` L42-217 (~2465 tok)

## app/src/app/api/google-reviews/

- `route.ts` — Syncs the Google reviews into Sanity — see `src/lib/google-reviews.ts`. (~787 tok)
  - fn `reply` L29-32 (~36 tok)
  - fn `OPTIONS` L33-36 (~28 tok)
  - fn `POST` L37-68 (~402 tok)

## app/src/app/api/health/

- `route.ts` — Liveness check for uptime monitors and load balancers: 200 while the server (~105 tok)

## app/src/app/api/revalidate/

- `route.ts` — Expires the cached Sanity reads. Two callers: (~732 tok)
  - fn `reply` L30-33 (~36 tok)
  - fn `OPTIONS` L34-40 (~89 tok)
  - fn `expire` L41-45 (~42 tok)
  - fn `POST` L46-71 (~264 tok)

## app/src/app/api/sentry-test/

- `route.ts` — Always fails, on purpose: called from `/sentry-test` to check that server (~163 tok)

## app/src/app/api/submit-form/

- `route.ts` — Bigger uploads are rejected rather than silently dropped from the mail. (~2131 tok)
  - fn `fail` L16-20 (~57 tok)
  - fn `splitEmails` L21-27 (~42 tok)
  - fn `POST` L28-203 (~1850 tok)

## app/src/app/api/test-mail/

- `route.ts` — Sends one test mail with the published Form settings — the "Send test mail" (~1051 tok)
  - fn `reply` L32-35 (~39 tok)
  - fn `OPTIONS` L36-39 (~28 tok)
  - fn `POST` L40-92 (~650 tok)

## app/src/app/sentry-test/

- `page.tsx` — Served at `/sentry-test?secret=<SENTRY_TEST_SECRET>`: checks the Sentry connection (~382 tok)

## app/src/components/

- `CmsPage.tsx` — Every page is a `page` document rendered through the page builder; the (~560 tok)
  - fn `getPage` L18-19 (~24 tok)
  - fn `cmsMetadata` L20-26 (~115 tok)
  - fn `CmsPage` L27-50 (~201 tok)
- `JsonLd.tsx` — Put one graph into the page. (~98 tok)
- `PageBuilder.tsx` — Map one Sanity block onto its component. `prev` is the block before it: (~2990 tok)
  - fn `ServiceHeroBlock` L27-73 (~487 tok)
  - fn `render` L74-274 (~2117 tok)
  - fn `PageBuilder` L275-284 (~75 tok)
- `SentryTest.tsx` — Buttons that raise a deliberate error in the browser and on the server, so (~679 tok)
  - fn `SentryTest` L14-70 (~549 tok)
- `TrackingScripts.tsx` — Google Tag Manager and the Meta (Facebook) pixel, both opt-in. (~866 tok)
  - fn `TrackingScriptsHead` L21-62 (~399 tok)
  - fn `TrackingScriptsBody` L63-92 (~222 tok)

## app/src/components/advertisr/

- `ArticleCard.tsx` — Line icons for the category art; the category document picks one and a colour. (~2602 tok)
  - fn `shortDate` L170-180 (~94 tok)
  - fn `hrefOf` L181-184 (~48 tok)
  - fn `CardArt` L185-200 (~132 tok)
  - fn `CategoryIcon` L201-209 (~111 tok)
  - fn `CategoryArt` L210-240 (~232 tok)
  - fn `Avatar` L241-258 (~163 tok)
  - fn `PillarCard` L259-308 (~449 tok)
  - fn `ArticleCard` L309-345 (~365 tok)
- `CaseCard.tsx` — Dark photo card with a category pill, title and two stats. (~657 tok)
  - fn `CaseCard` L14-52 (~568 tok)
- `cms.tsx` — Helpers that turn Sanity field values into what the design components take. (~672 tok)
  - fn `Rich` L17-31 (~139 tok)
  - fn `plain` L32-38 (~79 tok)
  - fn `pic` L39-44 (~68 tok)
  - fn `btn` L45-54 (~116 tok)
  - fn `Animated` L55-66 (~76 tok)
- `Compare.tsx` — "Bureaus zetten er vaak een laag tussen. Wij niet." comparison table. (~614 tok)
  - fn `Compare` L7-63 (~541 tok)
- `FinalCta.tsx` — Extra background layer (seo-geo puts the dot grid here). (~526 tok)
  - fn `FinalCta` L15-45 (~402 tok)
- `Footer.tsx` — Footer (~468 tok)
- `kennisbank.tsx` — Search + category state for the kennisbank. `categories[0]` is the "all" pill. (~1385 tok)
  - fn `useFilter` L20-27 (~106 tok)
  - fn `ArticleFilter` L28-61 (~334 tok)
  - fn `LoadMore` L62-73 (~126 tok)
  - fn `FilterItem` L74-78 (~68 tok)
  - fn `FilterGroup` L79-83 (~65 tok)
  - fn `FilterEmpty` L84-87 (~54 tok)
  - fn `SearchBox` L88-111 (~282 tok)
  - fn `Pills` L112-134 (~210 tok)
- `LeadForm.tsx` — The block's resolved `form->` reference. (~631 tok)
  - fn `LeadForm` L22-59 (~314 tok)
  - fn `NewsletterForm` L60-77 (~114 tok)
- `Logos.tsx` — "Vertrouwd door" band with the endless logo strip. (~563 tok)
  - fn `Logos` L6-46 (~511 tok)
- `Marquee.tsx` — Pill strip that scrolls forever (doubled so the loop is seamless). (~309 tok)
- `Nav.tsx` — Fixed top bar; frosted once the page scrolls past 20px. Up to 769px links move into a right-side slide-in drawer (rendered outside <nav>, with backdrop, scroll lock, focus handling); bar CTA hides below 520px. Links hide below (~2477 tok)
  - fn `Nav` L20-189 (~2204 tok)
- `prose.tsx` — Long-form Portable Text: `prose` styles, `proseComponents`, `anchor`/`textOf` for the TOC. Used by articles and case pages. (~1503 tok)
  - fn `anchor` L11-19 (~67 tok)
  - fn `textOf` L20-89 (~1300 tok)
- `Reviews.tsx` — A tone for reviews without one (Google imports), stable per name. (~798 tok)
  - fn `toneFor` L20-25 (~64 tok)
  - fn `Reviews` L26-81 (~573 tok)
- `sections.tsx` — The default red button: the block's own, else "Ontvang mijn groeiplan" to the page's form. (~16063 tok)
  - fn `HomeHero` L64-169 (~1260 tok)
  - fn `Stages` L170-232 (~1216 tok)
  - fn `CaseCards` L233-257 (~238 tok)
  - fn `Approach` L258-298 (~558 tok)
  - fn `StatBand` L299-321 (~234 tok)
  - fn `HomeTeam` L322-371 (~560 tok)
  - fn `PageHero` L372-451 (~929 tok)
  - fn `TeamGrid` L452-493 (~519 tok)
  - fn `Story` L494-553 (~639 tok)
  - fn `CaseList` L554-644 (~1072 tok)
  - fn `ContactHero` L645-700 (~628 tok)
  - fn `ContactMethods` L701-730 (~340 tok)
  - fn `InfoCard` L731-760 (~401 tok)
  - fn `GroeiplanHero` L761-839 (~890 tok)
  - fn `ValueGrid` L840-863 (~290 tok)
  - fn `StepsMedia` L864-928 (~845 tok)
  - fn `QuoteBand` L929-951 (~204 tok)
  - fn `Dots` L952-961 (~67 tok)
  - fn `Shot` L962-1002 (~298 tok)
  - fn `ToolCards` L1003-1066 (~785 tok)
  - fn `StepCards` L1067-1098 (~370 tok)
  - fn `Tick` L1099-1115 (~132 tok)
  - fn `Features` L1116-1187 (~877 tok)
  - fn `Pillars` L1188-1211 (~295 tok)
  - fn `Output` L1212-1231 (~235 tok)
  - fn `ProcSteps` L1232-1246 (~132 tok)
  - fn `ArticleIndex` L1247-1383 (~1457 tok)
- `service.tsx` — Dark "Wat levert … op?" band with a CTA button. (~6570 tok)
  - fn `CtaBand` L18-52 (~249 tok)
  - fn `FloatStat` L53-76 (~162 tok)
  - fn `ServiceHero` L77-145 (~579 tok)
  - fn `BridgeQuote` L146-176 (~442 tok)
  - fn `Pain` L177-235 (~598 tok)
  - fn `Funnel` L236-312 (~1033 tok)
  - fn `LedgerRow` L313-345 (~383 tok)
  - fn `Deliverables` L346-408 (~735 tok)
  - fn `Crea` L409-518 (~948 tok)
  - fn `CaseStudy` L519-569 (~457 tok)
  - fn `FaqList` L570-593 (~251 tok)
  - fn `Faq` L594-615 (~116 tok)
  - fn `ProcRow` L616-634 (~298 tok)
- `Share.tsx` — Share on LinkedIn and copy-link buttons in the article header. (~322 tok)
- `SiteEffects.tsx` — The designs' page script, ported once for every page: (~1080 tok)
  - fn `SiteEffects` L14-103 (~938 tok)
- `Toc.tsx` — Sticky table of contents with scrollspy; a toggle button replaces the label below 900px. (~631 tok)
  - fn `Toc` L7-53 (~577 tok)
- `ui.tsx` — Content width shell: 1240px, 40px gutter (22px on phones). (~1883 tok)
  - fn `Wrap` L6-10 (~68 tok)
  - fn `Sec` L11-14 (~49 tok)
  - fn `Eyebrow` L15-30 (~146 tok)
  - fn `SecHead` L31-59 (~248 tok)
  - fn `Arrow` L60-63 (~37 tok)
  - fn `BtnRed` L64-73 (~113 tok)
  - fn `BtnGhost` L74-98 (~120 tok)
  - fn `Brand` L99-116 (~196 tok)
  - fn `Check` L117-126 (~135 tok)
  - fn `Ambient` L127-136 (~202 tok)
  - fn `GoogleG` L137-160 (~280 tok)
  - fn `Count` L161-165 (~50 tok)
  - fn `Crumb` L166-187 (~183 tok)
- `visuals.tsx` — Index that advances every `ms`, unless the visitor prefers reduced motion. (~5006 tok)
  - fn `useCycle` L12-21 (~91 tok)
  - fn `Stage` L22-29 (~138 tok)
  - fn `Live` L30-38 (~89 tok)
  - fn `Browser` L39-52 (~175 tok)
  - fn `PhoneVisual` L53-97 (~716 tok)
  - fn `SerpVisual` L98-136 (~624 tok)
  - fn `SiteVisual` L137-173 (~321 tok)
  - fn `DashVisual` L174-236 (~764 tok)
  - fn `JourneyVisual` L237-286 (~637 tok)
  - fn `FlowVisual` L287-344 (~632 tok)
  - fn `SocialVisual` L345-403 (~700 tok)

## app/src/components/form/

- `Captcha.tsx` — Public half of the spam-check settings — the secret stays server-side. (~1344 tok)
  - fn `loadScript` L38-64 (~309 tok)
  - fn `Captcha` L65-142 (~644 tok)
- `fields.tsx` — `card` is the lead-form card, `inline` a single row (the newsletter). (~1518 tok)
  - fn `autoComplete` L30-39 (~113 tok)
  - fn `linkify` L40-57 (~140 tok)
  - fn `FormField` L58-157 (~920 tok)
- `FormRenderer.tsx` — Shared copy from Form settings: button fallbacks, progress, errors. (~3249 tok)
  - fn `SuccessPanel` L58-97 (~357 tok)
  - fn `FormRenderer` L98-338 (~2352 tok)

## app/src/components/ui/

- `Image.tsx` — next/image, but Sanity images are resized by the Sanity CDN (see (~196 tok)

## app/src/lib/

- `captcha.ts` — Server half of the form spam check. No Next.js in here, so the verdicts can (~498 tok)
- `cn.ts` — Exports cn (~37 tok)
- `env.ts` — Sanity connection details and analytics ids, read from the environment. (~380 tok)
- `form-fields.ts` — Shape and layout rules for CMS-authored forms. No React in here, so the (~1937 tok)
  - fn `resolveFormText` L29-105 (~649 tok)
  - fn `toRedirect` L106-120 (~167 tok)
  - fn `toSteps` L121-132 (~123 tok)
  - fn `fillTokens` L133-144 (~126 tok)
  - fn `toFieldRows` L145-163 (~182 tok)
  - fn `toFormDefinition` L164-209 (~464 tok)
- `form-mail.ts` — The mails `POST /api/submit-form` sends. (~1688 tok)
  - fn `escapeHtml` L16-27 (~92 tok)
  - fn `color` L28-32 (~62 tok)
  - fn `tint` L33-50 (~156 tok)
  - fn `renderText` L51-82 (~230 tok)
  - fn `renderFormMail` L83-169 (~990 tok)
- `google-reviews.ts` — Pulls the business's rating and reviews from the Google Places API (New) (~3395 tok)
  - class `SyncError` L81-89 (~39 tok)
  - fn `writeClient` L90-105 (~156 tok)
  - fn `documentId` L106-110 (~57 tok)
  - fn `fetchPlace` L111-133 (~318 tok)
  - fn `fetchAllReviews` L134-179 (~544 tok)
  - fn `toFields` L180-198 (~208 tok)
  - fn `differs` L199-210 (~153 tok)
  - fn `syncGoogleReviews` L211-292 (~1096 tok)
  - fn `patchConfig` L293-300 (~122 tok)
- `json-ld.ts` — Structured data (schema.org JSON-LD), built from what is in the CMS. (~2941 tok)
  - fn `absoluteUrl` L33-43 (~123 tok)
  - fn `prune` L44-68 (~295 tok)
  - fn `serializeJsonLd` L69-73 (~54 tok)
  - fn `jsonLdGraph` L74-97 (~278 tok)
  - fn `postalAddress` L98-124 (~279 tok)
  - fn `organizationJsonLd` L125-139 (~160 tok)
  - fn `websiteJsonLd` L140-151 (~113 tok)
  - fn `siteJsonLd` L152-162 (~158 tok)
  - fn `breadcrumbJsonLd` L163-181 (~154 tok)
  - fn `faqQuestions` L182-198 (~174 tok)
  - fn `pageFaqs` L199-209 (~121 tok)
  - fn `pageBreadcrumbLabel` L210-233 (~248 tok)
  - fn `webPageJsonLd` L234-260 (~333 tok)
  - fn `pageJsonLd` L261-267 (~59 tok)
- `links.ts` — The slug of the page that renders at `/`. (~284 tok)
- `mail.ts` — Mail sending for `/api/submit-form` and `/api/test-mail`: Mailjet's or (~2209 tok)
  - fn `sendViaMailjet` L39-76 (~359 tok)
  - fn `sendViaResend` L77-113 (~388 tok)
  - fn `sendViaSmtp` L114-142 (~264 tok)
  - fn `sendMail` L143-153 (~137 tok)
  - fn `resolveMailSettings` L154-206 (~686 tok)
  - fn `missingMailMessage` L207-210 (~67 tok)
- `secret.ts` — Constant-time compare; hashing first evens out the lengths. (~94 tok)
- `sentry-test.ts` — Guards `/sentry-test` and `/api/sentry-test`: both answer 404 unless (~182 tok)
- `site-url.ts` — The site's public origin, without a trailing slash. From the environment: (~85 tok)
- `site.ts` — The site's public origin, without a trailing slash. From the environment: (~1104 tok)
  - fn `mailtoHref` L96-99 (~24 tok)

## app/src/sanity/

- `client.ts` — Fetch that degrades instead of throwing. (~301 tok)
- `fetch.ts` — Every Sanity read that feeds a page carries this one tag. A publish in the (~243 tok)
- `image-loader.ts` — Quality for the Sanity CDN; with `auto=format` that usually ends up WebP/AVIF. (~426 tok)
- `image.ts` — An image field can exist in Sanity without a file — only an `alt` filled (~480 tok)
- `metadata.ts` — The OG image for a `seo` object, sized for social cards. (~444 tok)
- `queries.ts` — A link: pull the referenced page's type and slug up so `resolveHref` can build the path. (~1944 tok)
- `sanity.types.ts` — --------------------------------------------------------------------------------- (~27278 tok)
- `schema.json` (~66726 tok)

## deploy/

- `compose.yml` — Production compose for the app on the own server (127.0.0.1:3000, healthcheck on /api/health, env_file app.env, image from .env APP_IMAGE) (~219 tok)

## studio/

- `.gitignore` — Git ignore rules (~143 tok)
- `eslint.config.mjs` — ESLint flat configuration (~21 tok)
- `package-lock.json` — npm lock file (~179098 tok)
- `package.json` — Node.js package manifest (~301 tok)
- `README.md` — Project documentation (~427 tok)
- `sanity.cli.ts` — Typegen runs from the studio — the CLI needs a studio project root — but (~270 tok)
- `sanity.config.ts` — Project id and dataset come from the environment so the studio and the app (~394 tok)
- `structure.ts` — Documents that exist exactly once. They get a fixed `_id` and a top-level (~776 tok)
- `tsconfig.json` — TypeScript configuration (~120 tok)
- `tsconfig.tsbuildinfo` (~43531 tok)

## studio/.sanity/runtime/

- `app.js` — This file is auto-generated on 'sanity dev' (~88 tok)
- `index.html` — Sanity Studio (~2522 tok)

## studio/schemaTypes/

- `blocks.ts` — Every section of the Advertisr. design is one block here. The renderer is (~2892 tok)
  - fn `plain` L13-15 (~41 tok)
  - fn `block` L16-28 (~105 tok)
  - fn `anchor` L29-31 (~39 tok)
  - fn `badge` L32-32 (~18 tok)
  - fn `band` L33-33 (~45 tok)
  - fn `steps` L34-34 (~18 tok)
  - fn `quote` L35-37 (~50 tok)
  - fn `formRef` L38-45 (~71 tok)
  - fn `form` L46-198 (~2336 tok)
- `documents.ts` — Fields the Google sync owns: read-only on a synced review, it would overwrite them anyway. (~2746 tok)
  - fn `slug` L12-160 (~1870 tok)
  - fn `fromGoogle` L161-234 (~718 tok)
- `fields.ts` — Short-hands for the field shapes every block repeats. They return plain (~1372 tok)
  - fn `rules` L19-19 (~31 tok)
  - fn `common` L20-27 (~79 tok)
  - fn `str` L28-30 (~39 tok)
  - fn `txt` L31-34 (~66 tok)
  - fn `inline` L35-37 (~41 tok)
  - fn `img` L38-82 (~369 tok)
  - fn `cta` L83-85 (~38 tok)
  - fn `bool` L86-88 (~42 tok)
  - fn `num` L89-92 (~57 tok)
  - fn `strings` L93-96 (~57 tok)
  - fn `paragraphs` L97-100 (~70 tok)
  - fn `list` L101-116 (~136 tok)
  - fn `refs` L117-119 (~57 tok)
  - fn `obj` L120-123 (~65 tok)
  - fn `head` L124-125 (~30 tok)
  - fn `stat` L126-127 (~75 tok)
- `form.ts` — Multi-step forms keep their fields under `steps`, simple ones under `fields`. (~2633 tok)
  - fn `isSteps` L5-281 (~2575 tok)
- `formField.ts` — Hide a setting unless the field's input type is one of these. (~1306 tok)
- `formSettings.ts` — Mail and spam settings shared by every `form`. A singleton. (~3391 tok)
  - fn `captchaOf` L19-23 (~72 tok)
  - fn `captchaKeyFields` L24-335 (~3093 tok)
- `index.ts` — Every schema type the studio knows about. Blocks live in `blocks.ts`. (~287 tok)
- `objects.ts` — A line of text where a phrase can be highlighted. In headings `em` is the (~1046 tok)
- `singletons.ts` — One fieldset per area of the site, so the long list stays findable. (~2298 tok)
  - fn `link` L9-204 (~2183 tok)

## studio/tools/

- `ClearCache.tsx` — "Refresh website": expires the website's cached Sanity content right now, (~1023 tok)
  - fn `readSecret` L26-33 (~35 tok)
  - fn `ClearCache` L34-116 (~754 tok)
- `GoogleReviewsSync.tsx` — The buttons on the "Google reviews" page: a dry run (shows what the sync (~1864 tok)
  - fn `readSecret` L47-54 (~35 tok)
  - fn `GoogleReviewsSync` L55-176 (~1439 tok)
- `MailTest.tsx` — "Send test mail" on Form settings → Mail. Calls the app's `/api/test-mail`, (~1421 tok)
  - fn `readStored` L30-37 (~36 tok)
  - fn `store` L38-45 (~51 tok)
  - fn `MailTest` L46-158 (~1070 tok)
- `mediaData.ts` — Queries, types and formatting helpers for the Media panel (`MediaTool.tsx`). (~2204 tok)
  - fn `chunk` L61-131 (~530 tok)
  - fn `typeLabel` L132-135 (~25 tok)
  - fn `isImage` L136-140 (~71 tok)
  - fn `uploadKind` L141-144 (~38 tok)
  - fn `formatBytes` L145-153 (~103 tok)
  - fn `formatDate` L154-160 (~74 tok)
  - fn `formatDimensions` L161-166 (~70 tok)
  - fn `displayName` L167-178 (~95 tok)
  - fn `matchesSearch` L179-204 (~213 tok)
  - fn `matchesFilter` L205-220 (~136 tok)
  - fn `dedupeUsage` L221-236 (~165 tok)
  - fn `thumbnailUrl` L237-240 (~36 tok)
- `mediaStyles.ts` — The Media panel's own styles, on top of `panelStyles.ts`. Same approach — (~1416 tok)
- `MediaTool.tsx` — The media library in the studio: every upload in one place, searchable, with (~5698 tok)
  - fn `MediaLibrary` L78-421 (~3196 tok)
  - fn `MediaCard` L422-457 (~284 tok)
  - fn `MediaDetail` L458-629 (~1435 tok)
- `panelStyles.ts` — Shared inline styles for custom studio panels — the parts that any panel (~335 tok)
