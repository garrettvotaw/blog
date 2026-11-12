# Sunrise Development blog

Personal dev blog for Garrett Votaw (Sunrise Development, Lawton, Oklahoma). Goal: be found and known as a leading voice on agentic AI development. SEO is a top priority. Minimal cost: static Astro site on GitHub Pages plus a custom domain (~$12/yr). No paid services.

## Stack and commands

- Astro 5, TypeScript strict, Markdown/MDX content collections, system fonts, no client JS unless needed.
- Author background: Angular, NestJS, Nx. Explain Astro-specific concepts in those terms when useful.
- `npm run dev`: local server; drafts visible in dev only.
- `npm run build`: `astro check` + build. Run it after any change and fix all errors before calling something done.
- `npm run new -- "Title"`: new draft post in `src/content/blog/`.
- Deploy: push to `main`; `.github/workflows/deploy.yml` publishes to GitHub Pages.

## Where things live

- URL: `SITE` and `BASE` in `astro.config.mjs`. No domain yet, so the site is served at https://garrettvotaw.github.io/blog/ (`BASE = '/blog'`). When a domain is bought: set `SITE` to it, `BASE` to `'/'`, and add `public/CNAME` with the bare domain.
- Internal links and absolute URLs: always use `url()` / `absUrl()` from `src/utils/url.ts`, never a hardcoded `/path/`, so they work under any base.
- Identity, socials, newsletter, giscus: `src/consts.ts`. Empty values hide those features.
- All SEO tags and JSON-LD: `src/components/BaseHead.astro`; post schema in `src/layouts/BlogPost.astro`.
- Post frontmatter schema with SEO length limits: `src/content.config.ts`.
- Design: editorial minimal. Small system-font type, whitespace, near-monochrome (`src/styles/global.css`). Detail lives in subtle CSS motion: post lists (`.posts`: date, title, summary, "Read post" cue; whole entry clickable, others dim on hover), sliding arrows, drawn underlines, staggered entrance, cross-page view transitions. Keep motion subtle and behind `prefers-reduced-motion`; no illustrations or decorative gradients.
- Asides: `:aside[Who even does?]` in a post renders in muted text between faint code-comment marks (`src/utils/remark-aside.mjs` plus `.aside` in `global.css`). The marks are CSS-only, so RSS, search snippets and screen readers get just the words.

## SEO rules (keep these intact)

- Every page needs a unique title and a 50–160 character description.
- Keep canonical URLs, sitemap, robots.txt, RSS, Open Graph/X tags, and JSON-LD working on every page.
- Trailing slashes everywhere (`trailingSlash: 'always'`); internal links end in `/`.
- Posts target specific long-tail searches and answer the question in the first paragraph.
- Keep performance near-perfect: no web fonts, no heavy client-side frameworks.

## Content rules (important)

- Never include code, screenshots, internal metrics, or identifying details from Love's Travel Stops or Fleetzero. Both have strict non-competes and confidentiality expectations; describe methods, not employer work.
- Orbit (github.com/garrettvotaw/orbit): never name it, link it, or show its code or screenshots. Garrett has OK'd describing its architecture as a pattern (PM agents, story owners with file claims, product questioner, API researcher, coder, QA agents on Playwright scripts).
- The enterprise SAP app built at Love's: publish no details at all, not even anonymized. Planned post 2 is off unless Garrett says otherwise.
- Internal links inside Markdown posts must be relative (e.g. `../../work-with-me/`) so they survive a base-path change.
- Garrett writes first drafts (typed, dictated, or his answers to an interview); Claude edits them (see Writing and voice). Never invent numbers, results, or stories: leave a [bracketed prompt] wherever he must supply a fact.

## Writing and voice

- Workflow: Garrett drafts, Claude edits. To start a post from nothing, interview him with questions in chat and use his answers as the draft. Don't write prose for him to rewrite.
- Editing means structure, cuts, clarity, title and description, and fact and confidentiality checks. Keep his wording: tighten his sentences, don't swap in smoother ones. The test for any line: would Garrett say it out loud to another developer?
- Every post needs at least one specific story from his own work, one thing that went wrong, and one opinion a reader could disagree with. If a draft lacks one, ask for it; don't fill it in.
- Avoid these patterns, and flag them in his drafts:
  - Lines that announce the post's value ("Most X posts stop at Y. This one covers Z.").
  - "Not X, it's Y" contrasts and colon reveals ("The rule underneath all of this: ...").
  - One-liners that close a paragraph or section ("You're building the team before the team builds the software.").
  - Lists of three for rhythm ("the scope, the history, and the traps"), and recaps that chain verbs ("specified, questioned, researched, built...").
  - Summary sections that repeat the intro, and bullet lists where every item opens with a bold phrase.
  - Superlatives and promises with nothing behind them ("the hardest possible environment", "you'll notice the difference immediately").
- His voice, to keep: plain and casual, short asides and jabs ("Who even does?"), "honestly", italics for emphasis ("*way* faster").
- When editing, wrap his sarcastic asides in `:aside[...]`, but only ones a reader could skip without losing the point. Never write new asides for him.

## Open TODOs

- Choose and set a domain (see URL above), then set it in the repo's Settings → Pages.
- Fill LinkedIn/X links, newsletter form action, and giscus IDs in `src/consts.ts`.
- Replace `hello@example.com` on `src/pages/work-with-me.astro` with a real contact method.
- Confirm the About page wording about the day job.
- Later: auto-generated per-post Open Graph images (currently one default image).

## Planned first posts

1. My AI development workflow, end to end (published 2026-11-10)
2. ~~How I built an enterprise app in 2 months~~ (dropped: Love's work, no details may be published)
3. Where AI coding fails, and how I catch it
4. Building and shipping an iOS app in a weekend
5. Why I'm starting a dev business in Lawton, Oklahoma
