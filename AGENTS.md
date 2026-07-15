# AGENTS.md

This file provides durable repository guidance to OpenAI Codex.

## Codex Configuration

- Keep repository instructions in this `AGENTS.md` file.
- Keep reusable repository workflows in `.agents/skills/`; the `cv-sync` skill owns synchronization of the full CV and condensed résumé PDFs.
- Do not recreate `CLAUDE.md` or `.claude/`. Claude-specific permissions, plugin toggles, and hooks are not part of this repository's Codex configuration.
- Keep machine-specific permissions, plugins, MCP servers, and credentials out of the repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Prebuild (portfolio thumbnails) + Astro build + Pagefind indexing
pnpm preview      # Preview production build
pnpm check        # Astro type check + Biome lint check
pnpm lint         # Biome lint with auto-fix (--write)
pnpm format       # Prettier format
pnpm optimize:portfolio  # Regenerate WebP thumbnails from public/portfolio/
```

Package manager: **pnpm** (v10). Node v22 required.

## Architecture

This is an **Astro 5** personal academic website using:
- **TailwindCSS v4** (via `@tailwindcss/vite` plugin, not the Astro integration)
- **TypeScript** with path alias `@/` → `src/`
- **Biome** for linting/formatting (tabs, 100 char line width); **Prettier** for `.astro` files

### Site Configuration

All global site metadata and navigation lives in [src/site.config.ts](src/site.config.ts):
- `siteConfig` — author, URL, title, description, locale, date format
- `menuLinks` — drives header and footer navigation links
- `expressiveCodeOptions` — syntax highlighting themes (Dracula dark / GitHub light)

### Content Collections

Defined in [src/content.config.ts](src/content.config.ts). Three collections:
- **`post`** — blog posts at `src/content/post/**/*.{md,mdx}`. Required frontmatter: `title` (max 60 chars), `description`, `publishDate`. Optional: `tags`, `draft`, `coverImage`, `ogImage`, `updatedDate`, `pinned`.
- **`note`** — short notes at `src/content/note/**/*.{md,mdx}`. `publishDate` must be ISO 8601 with timezone offset.
- **`tag`** — optional tag metadata at `src/content/tag/**/*.{md,mdx}` (keyed by tag slug).

Draft posts (`draft: true`) are excluded in production but visible in dev.

### Pages & Routing

| Route | Page |
|-------|------|
| `/` | About (index.astro) |
| `/cv/` | CV |
| `/research/` | Research |
| `/posts/` | Blog listing |
| `/notes/` | Notes listing |
| `/tags/` | Tag index |
| `/photography/` | Photography gallery |
| `/og-image/[slug].png` | Server-rendered OG images (Satori) |
| `/rss.xml`, `/notes/rss.xml` | RSS feeds |

### Layouts

- [src/layouts/Base.astro](src/layouts/Base.astro) — root shell with `<html>`, `<head>` (via `BaseHead`), Header, Footer, ThemeProvider. All pages use this as `PageLayout`.
- [src/layouts/BlogPost.astro](src/layouts/BlogPost.astro) — wraps `Base.astro` with blog-specific chrome (masthead, TOC, webmentions).

### Photography

Photos go in `public/portfolio/`. The prebuild step (`scripts/optimize-portfolio.js`) generates WebP thumbnails into `public/portfolio-thumbs/` using `sharp`. The gallery page reads the filesystem at build time and uses **Fancybox** (`@fancyapps/ui`) for the lightbox.

### Custom Remark/Rehype Plugins

Located in [src/plugins/](src/plugins/):
- `remark-reading-time` — adds reading time to frontmatter
- `remark-admonitions` — `:::note`, `:::tip`, `:::caution`, `:::warning`, `:::important` directives
- `remark-github-card` — GitHub repo card embeds via directives

### OG Image Generation

[src/pages/og-image/[...slug].png.ts](src/pages/og-image/[...slug].png.ts) generates social preview images at build time using **Satori** + **satori-html**. Fonts are loaded via a custom Vite plugin (`rawFonts`) that inlines `.ttf`/`.woff` as base64.

### Search

**Pagefind** runs post-build (`pagefind --site dist`) to create the static search index. The `Search.astro` component loads the Pagefind UI client-side.

### Webmentions (Optional)

Configured via env vars in `.env` (copy from `.example.env`):
```
WEBMENTION_API_KEY=   # server-only secret
WEBMENTION_URL=       # public client var
WEBMENTION_PINGBACK=  # optional
```

### Resume / CV (LaTeX)

The `resume/` directory contains two LaTeX documents:
- **`cv.tex`** — the full academic CV; this is the **source of truth** for all content (experience, publications, education, etc.)
- **`resume.tex`** — a condensed industry resume; content should mirror `cv.tex` but is a different template (Jake Gutierrez / CMU Sans Serif, compile with `xelatex`)

When the user updates `cv.tex`, keep `resume.tex` in sync with the relevant content changes. `cv.tex` uses `pdflatex` + EB Garamond; `resume.tex` uses `xelatex` + CMU Sans Serif.

The `/cv/` webpage is intentionally PDF-only. Keep its two choices mapped to `/cv.pdf` (long academic CV) and `/resume.pdf` (short résumé); do not duplicate the document content in Astro or TypeScript.

### Deployment

GitHub Actions CI ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs `astro check` and `pnpm build` on push/PR to `main`. Deploy via GitHub Pages with source set to GitHub Actions.

When the user explicitly asks to publish or deploy:

1. Run `pnpm check` and `pnpm build`; do not publish a failing build.
2. Never force-push. Only commit or push changes the user intends to publish.
3. A push to `main` triggers [the deployment workflow](.github/workflows/deploy.yml).
4. Verify the live site at `https://www.sahusuraj.com/` and, if deployment is still running, check `https://github.com/surajinacademia/website/actions`. GitHub Pages updates may take a minute or two; use a hard refresh or private window when checking a newly deployed version.
