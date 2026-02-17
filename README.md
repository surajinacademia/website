# Website

Personal site built with Astro. Deploy via GitHub Actions (Settings → Pages → Source: GitHub Actions).

## Repo structure

```
├── public/                 # Static assets (served at /)
│   ├── portfolio/          # Photography page images
│   ├── icons/              # Favicons, profile image
│   ├── icon.svg
│   └── CNAME
├── src/
│   ├── assets/             # Processed assets (fonts, etc.)
│   ├── components/         # Reusable UI
│   │   ├── layout/         # Header, Footer
│   │   ├── blog/           # Post layout, TOC, webmentions, previews
│   │   └── note/           # Note layout
│   ├── content/            # Content collections (see src/content/README.md)
│   │   ├── post/           # Blog posts
│   │   ├── note/           # Notes
│   │   └── tag/            # Tag metadata
│   ├── data/               # Structured data for pages
│   │   ├── pages/          # CV, Research, Resources copy (cv.ts, research.ts, resources.ts)
│   │   └── post.ts         # Blog helpers (getAllPosts, tags, etc.)
│   ├── layouts/            # Base.astro, BlogPost.astro
│   ├── pages/              # Routes (file-based)
│   ├── plugins/            # Remark/rehype plugins
│   ├── styles/             # Global and component CSS
│   ├── utils/              # Date, TOC, webmentions, etc.
│   ├── content.config.ts
│   ├── site.config.ts     # Site title, menu, expressive-code options
│   └── types.ts
├── docs/                   # Repo docs (not part of build)
├── astro.config.ts
├── package.json
└── .github/workflows/      # CI, deploy, stale
```

**Where to edit**

- **Site config & nav:** `src/site.config.ts`
- **Blog / notes / tags:** `src/content/post/`, `src/content/note/`, `src/content/tag/`
- **CV, Research, Resources text:** `src/data/pages/cv.ts`, `research.ts`, `resources.ts`
- **About (homepage):** `src/pages/index.astro`
