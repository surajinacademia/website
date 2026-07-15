---
name: cv-sync
description: "Keeps the full academic CV and condensed résumé synchronized from their LaTeX sources. Use when the user updates CV content, asks to sync or rebuild the CV, résumé, or PDFs, or changes what is served from /cv/."
---

# CV Sync

## Source of Truth

`resume/cv.tex` is authoritative for academic and professional content. Always read it fresh before
making changes. Keep the relevant condensed content in `resume/resume.tex` synchronized with it.

## Website Contract

The webpage at `src/pages/cv.astro` is intentionally minimal and PDF-only:

- `/cv.pdf` is the long academic CV generated from `resume/cv.tex`.
- `/resume.pdf` is the short résumé generated from `resume/resume.tex`.
- Do not copy CV content into Astro, Markdown, or a TypeScript data file.
- Preserve the two document choices unless the user explicitly requests a different information
  architecture.

`scripts/copy-resume-pdfs.js` copies the compiled PDFs from `resume/` to `public/` during
`pnpm build`.

## Workflow

1. Read `resume/cv.tex` and `resume/resume.tex` in full.
2. Update `resume/cv.tex` with the requested source-of-truth changes.
3. Mirror the relevant condensed content in `resume/resume.tex`.
4. Compile the long document with `pdflatex` and the short document with `xelatex` from the
   `resume/` directory. Run each compiler twice when cross-references require it.
5. Run `pnpm check` and `pnpm build`; confirm `/cv.pdf` and `/resume.pdf` are copied and served.
6. Verify `/cv/` still presents exactly the long and short PDF choices.

## LaTeX Notes

- `cv.tex` uses EB Garamond and compiles with `pdflatex`.
- `resume.tex` uses CMU Sans Serif and compiles with `xelatex`.
- Preserve LaTeX commands and template structure unless a formatting change is explicitly requested.
- Never treat generated `.aux`, `.log`, or `.out` files as content sources.
