# Website

Personal academic site built with Astro, Tailwind CSS, and TypeScript. [AGENTS.md](AGENTS.md) defines the minimal visual style, protected page choices, CV synchronization, and publishing rules.

## Local setup

Use Node 22, at least 22.12.0 for the declared Astro version, and pnpm 10. The Node major is recorded in [.nvmrc](.nvmrc); package versions are in [package.json](package.json) and [pnpm-lock.yaml](pnpm-lock.yaml). From this repository root:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Use the localhost URL and port printed by Astro. A local preview does not publish the site.

## Commands and checks

| Command | Effect |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm check` | Run Astro checks and Biome checks without applying fixes |
| `pnpm build` | Generate portfolio thumbnails, copy compiled CV PDFs, build Astro, then index `dist/` with Pagefind |
| `pnpm preview` | Preview the existing production build |
| `pnpm lint` | Apply Biome fixes; this changes files |
| `pnpm format` | Apply Prettier formatting; this changes files |
| `pnpm optimize:portfolio` | Regenerate portfolio thumbnails |

For site implementation changes, run the applicable checks and inspect affected pages. Before an authorized publication, both `pnpm check` and `pnpm build` must pass. For instruction and README changes alone, check affected links and `git diff --check`; no preview server or production build is needed.

## Architecture

This is an **Astro 7** personal academic website using:
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
| `/resources/skills/` | Skill collections |
| `/resources/skills/computational-modeling-skills/` | Computational Modeling Skills catalog |
| `/posts/` | Blog listing |
| `/notes/` | Notes listing |
| `/tags/` | Tag index |
| `/photography/` | Photography gallery |
| `/og-image/[slug].png` | Server-rendered OG images (Satori) |
| `/rss.xml`, `/notes/rss.xml` | RSS feeds |

### Layouts

- [src/layouts/Base.astro](src/layouts/Base.astro) — root shell with `<html>`, `<head>` (via `BaseHead`), Header, and Footer. Its `reading` prop hides the shared Header and Footer. `ThemeProvider` loads the theme script in the head.
- [src/layouts/Reading.astro](src/layouts/Reading.astro) — shared single-column layout for blog posts, guides, and resource listings, with breadcrumb navigation and a theme control. Citations use native footnotes with return links; the literature guide keeps image credits in its endnotes.
- [src/layouts/BlogPost.astro](src/layouts/BlogPost.astro) — wraps `Reading.astro` with the blog masthead and webmentions.

### Styles and theme

[public/styles/site.css](public/styles/site.css) owns the shared typography and theme rules. [public/fonts/cmu.css](public/fonts/cmu.css) loads self-hosted CMU Serif for body text and CMU Sans Serif for headings and controls. The site uses two text sizes, 16px and 24px, without underlines. Research uses 24px `h2` headings, 16px bold `h3` subheadings, and 16px serif body text while retaining its content and layout.

Light mode uses white with Tailwind rose-600 accents; dark mode uses black with rose-400 accents. [public/styles/theme.js](public/styles/theme.js) defaults to dark mode, remembers the choice under the local-storage key `theme`, and supports `?theme=light` and `?theme=dark`.

### Skills

[src/data/pages/resources.ts](src/data/pages/resources.ts) lists skill collections. The Computational Modeling Skills subpage uses [src/data/pages/computational-modeling-skills.ts](src/data/pages/computational-modeling-skills.ts), with descriptions checked against the collection's [GitHub README and skill instructions](https://github.com/surajinacademia/Computational_modeling_skills). Its logo in `public/images/skills/computational-modeling-logo.svg` is the repository's original `assets/logo.svg`. Update the catalog and logo from that source when the collection changes.

### Photography

Photos go in `public/portfolio/`. The prebuild step (`scripts/optimize-portfolio.js`) generates WebP thumbnails into `public/portfolio-thumbs/` using `sharp`. The gallery page reads the filesystem at build time and uses **Fancybox** (`@fancyapps/ui`) for the lightbox.

Add a description of each photo to `src/data/pages/photography.ts`; these descriptions supply accessible image text and lightbox captions. Do not use camera filenames as descriptions.

Bundled theme demonstration posts, notes, and tag metadata are archived in `docs/theme-examples/`, outside the published content collections.

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

## CV and résumé

The maintained sources are [resume/cv.tex](resume/cv.tex) and [resume/resume.tex](resume/resume.tex). The academic CV is the content authority; the condensed résumé follows its relevant content. The local [cv-sync skill](.agents/skills/cv-sync/SKILL.md) owns synchronization and document compilation.

The build copies existing `resume/cv.pdf` and `resume/resume.pdf` into `public/`; it does not compile LaTeX. The `/cv/` page exposes these two PDFs without duplicating their content in the webpage. Follow the document and page rules in [AGENTS.md](AGENTS.md).

## Deployment

GitHub Pages uses GitHub Actions as its publishing source. [CI](.github/workflows/ci.yml) checks Astro and the build; [the deployment workflow](.github/workflows/deploy.yml) publishes pushes to `main`. Commit or push only work authorized for publication, never force-push, and verify the resulting site after an authorized deployment. A request for local documentation or Git checkpoints does not require publication.
