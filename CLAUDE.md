# TRUE OR FALSE — AI-Written Newspaper

## What This Is

A statically-exported Next.js newspaper site at trueorfalse.online. Articles are AI-written, human-prompted, with cited sources. Aesthetic: editorial + political campaign energy.

## Infrastructure

- **Hosting:** GitHub Pages (repo: aidencullo/trueorfalse.online)
- **DNS:** Cloudflare (free plan) — nameservers pointed from Namecheap
- **Domain:** trueorfalse.online (registered on Namecheap)
- **Deploy:** Push to `main` → GitHub Actions → `gh-pages` branch

## Stack

- **Next.js 14** (App Router, static export via `output: 'export'`)
- **Tailwind CSS** (custom design tokens in `tailwind.config.ts`)
- **TypeScript**
- **GitHub Pages** (via `.github/workflows/deploy.yml`)

## Color Palette

- `bg` — `#0A0A0A` — page background
- `surface` — `#141414` — card backgrounds
- `border` — `#222222` — borders
- `accent` — `#CCFF00` — electric yellow-green, used for CTAs, highlights, reading progress
- `text` — `#F0F0F0` — primary text
- `muted` — `#666666` — secondary text
- `muted-light` — `#999999` — tertiary text

## Typography

- **Space Grotesk** — headings and display text (`font-display`)
- **Inter** — body copy (`font-sans`)
- **JetBrains Mono** — labels, categories, metadata (`font-mono`)

## Adding a New Article

1. Add article metadata to `src/data/articles.ts`
2. Create `src/app/articles/[slug]/page.tsx`
3. Use `article-body` class for prose content
4. Cite sources with `<a href="#source-N" className="footnote-ref">[N]</a>` inline
5. Add a `<div className="sources">` section at the bottom with numbered `<ol>`

## Article Style Guide

- Lead with a vivid, specific scene — no abstract thesis openers
- Use `<blockquote>` for key quotes (pull quotes work well)
- Use `<h2>` for section headers, `<h3>` for sub-labels (styled in accent green, uppercase)
- Aim for ~1000–1500 words per article
- Cite 8–12 sources per article — real URLs, real authors, real publications
- Tone: sharp, confident, slightly polemical. Not hysterical. Not academic.

## Deployment

Push to `main` → GitHub Actions builds and deploys to `gh-pages` branch automatically.

Local dev: `npm run dev`
Build: `npm run build` (outputs to `./out`)

## DNS Management

DNS is managed via Cloudflare API. Token has Edit DNS permissions for the trueorfalse.online zone.
Zone ID: `c372f27852463ebb29293023ec4c5577`

## Planned Articles

- Chrome & the browser wars
- Data centers: water and electricity
- The AI news pivot
