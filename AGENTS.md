# AGENTS.md

This file provides durable repository guidance to OpenAI Codex.

## Main Design Rule: Always Use Minimalism, Consistency, and Simplicity

- Treat minimalism, consistency, and simplicity as the standing goals for this website. Judge design proposals and audit findings by how well they support all three; favor removing unnecessary complexity and reusing established patterns over adding novelty or decoration.
- Always keep this website minimal, readable, and focused on its academic content. Apply this rule to every page, component, and design change.
- Prefer the simplest layout that communicates the content clearly. Use typography, spacing, and alignment to establish hierarchy; remove elements that do not help visitors read, navigate, or understand.
- Preserve the existing visual language and reuse shared components and design tokens. Keep colors, typefaces, font sizes, and decorative treatments limited and consistent.
- Avoid generic AI-generated styling: decorative gradients, glass effects, gratuitous shadows, oversized marketing heroes, repetitive card grids, unnecessary badges or icons, and animations added only for visual flair.
- Use cards, borders, backgrounds, and motion only when they serve a clear content or interaction purpose. Prefer straightforward text, lists, and links where sufficient.
- Keep copy direct and specific. Do not add marketing filler, invented statistics, redundant section labels, or placeholder content to fill space.
- Minimalism must preserve usability: readable text, sufficient contrast, visible keyboard focus, semantic HTML, responsive layouts, and reduced-motion support.
- Before completing a visual change, review desktop and mobile views and remove unnecessary decoration, repetition, and complexity.
- When using design skills, apply their guidance within this minimal aesthetic. Suggestions for novelty, boldness, or elaborate visuals must not override this rule unless the user explicitly requests a different direction.
- Preserve the Research page's content and layout during general website audits or design changes. Change `src/pages/research.astro` or `src/data/pages/research.ts` only when the user explicitly requests changes to Research.
- Preserve the Resources category artwork and overlays as part of the user's visual style: keep category labels inside the image and show only the artist's name and year at the bottom inside each image. Do not move captions outside, add visible artwork titles or license details, remove the images, or replace the image-based navigation with plain text unless explicitly requested.
- Preserve the About profile photo's tilted frame and hover-to-straighten animation as part of the user's personal style, including reduced-motion support, unless explicitly asked to change it.

## Codex Configuration

- End a completed task response with a clickable localhost preview link only when the task edits the website. Omit it for questions, read-only audits, and instruction- or skill-only changes. Use the running server's actual port and the relevant page path when applicable; the default is `http://localhost:4321/`. Verify availability before describing the preview as running, and state clearly if the server is not running.
- Keep repository instructions in this `AGENTS.md` file.
- Keep reusable repository workflows in `.agents/skills/`; the `cv-sync` skill owns synchronization of the full CV and condensed résumé PDFs.
- Do not recreate `CLAUDE.md` or `.claude/`. Claude-specific permissions, plugin toggles, and hooks are not part of this repository's Codex configuration.
- Keep machine-specific permissions, plugins, MCP servers, and credentials out of the repository.

## Coding principles

- Keep implementations simple, readable, and focused on the requested change.
- Reuse existing routines and established libraries. Introduce abstractions only for demonstrated reuse or a clearer expression of the computation.
- Keep comments and docstrings current with changed behavior. Explain non-obvious scientific, numerical, or programming choices rather than restating syntax.
- Use portable paths with an explicit project, script, or caller-supplied base; avoid new machine-specific absolute paths in reusable code.

## Debugging and verification

- When debugging code, isolate a representative failing case and identify the cause before choosing a fix.
- Use the smallest decisive checks for the changed behavior or material claim, and complete applicable required checks. Reuse valid evidence; rerun affected checks when code, inputs, or assumptions change, and broaden verification only for unsupported claims or unresolved uncertainty.
- For input and data validation, use one check per distinct plausible failure mode; do not re-check invariants guaranteed by the preceding operation.
- Expose unexpected warnings, failed checks, and missing required results. Fix the cause or report it with context; do not suppress or silently skip failures to claim success.
- Preserve source files and stored outputs during read-only checks; use temporary copies or isolated checks when needed. Existing outputs alone do not establish that the current code ran.
- Report the checks actually performed, their outcomes, and any remaining verification gaps or uncertainty.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Prebuild (thumbnails + CV PDFs) + Astro build + Pagefind indexing
pnpm preview      # Preview production build
pnpm check        # Astro type check + Biome lint check
pnpm lint         # Biome lint with auto-fix (--write)
pnpm format       # Prettier format
pnpm optimize:portfolio  # Regenerate WebP thumbnails from public/portfolio/
```

Package manager: **pnpm** (v10). Use Node v22, at least 22.12.0 for the declared Astro version.

## Repository navigation

Use [README.md](README.md#architecture) for the source map, content collections, and build behavior. [package.json](package.json), [pnpm-lock.yaml](pnpm-lock.yaml), and [.nvmrc](.nvmrc) define the maintained dependency and runtime versions. Update the README when those entrypoints change.

## Resume / CV (LaTeX)

The `resume/` directory contains two LaTeX documents:
- **`cv.tex`** — the full academic CV; this is the **source of truth** for all content (experience, publications, education, etc.)
- **`resume.tex`** — a condensed industry resume; content should mirror `cv.tex` but is a different template (Jake Gutierrez / CMU Sans Serif, compile with `xelatex`)

When the user updates `cv.tex`, keep `resume.tex` in sync with the relevant content changes. `cv.tex` uses `pdflatex` + EB Garamond; `resume.tex` uses `xelatex` + CMU Sans Serif.

The `/cv/` webpage is intentionally PDF-only. Keep its two choices mapped to `/cv.pdf` (long academic CV) and `/resume.pdf` (short résumé); do not duplicate the document content in Astro or TypeScript.

## Deployment

GitHub Actions CI ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs `astro check` and `pnpm build` on push/PR to `main`. Deploy via GitHub Pages with source set to GitHub Actions.

When the user explicitly asks to publish or deploy:

1. Run `pnpm check` and `pnpm build`; do not publish a failing build.
2. Never force-push. Only commit or push changes the user intends to publish.
3. A push to `main` triggers [the deployment workflow](.github/workflows/deploy.yml).
4. Verify the live site at `https://www.sahusuraj.com/` and, if deployment is still running, check `https://github.com/surajinacademia/website/actions`. GitHub Pages updates may take a minute or two; use a hard refresh or private window when checking a newly deployed version.
