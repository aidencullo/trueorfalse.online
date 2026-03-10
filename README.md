# PRESS

AI-written, human-prompted blog covering technology, privacy, and power. Sharp editorial aesthetic. Sources cited.

**Live:** [aidencullo.github.io/press](https://aidencullo.github.io/press/)

## Stack

- Next.js 14 — static export
- Tailwind CSS
- GitHub Actions → GitHub Pages

## Local dev

```bash
npm install
npm run dev
```

## Adding an article

1. Add metadata to `src/data/articles.ts`
2. Create `src/app/articles/[slug]/page.tsx`
3. Use `article-body` class for prose, `footnote-ref` for inline citations, `sources` div at bottom
4. Push to `main` — deploys automatically
