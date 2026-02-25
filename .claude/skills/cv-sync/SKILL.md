---
name: cv-sync
description: "Syncs the academic CV webpage (/cv/) with the LaTeX source of truth at resume/cv.tex. Use when the user says 'update the CV page', 'sync the CV', 'my CV page is out of date', 'I updated my CV', or asks to reflect cv.tex changes on the website. Reads resume/cv.tex, extracts all sections, updates src/data/pages/cv.ts with structured content, and updates src/pages/cv.astro to render any new sections."
---

# CV Sync

## Source of Truth

`resume/cv.tex` is authoritative. Always read it fresh before making changes.

## Data Layer

All CV content for the webpage lives in `src/data/pages/cv.ts`. The page at
`src/pages/cv.astro` reads from it. Edit `cv.ts` to change what appears on `/cv/`.

See `references/cv-structure.md` for the full TypeScript schema and the section-by-section
mapping from LaTeX → TypeScript fields.

## Workflow

1. **Read** `resume/cv.tex` in full
2. **Parse** each section using the mapping in `references/cv-structure.md`
3. **Update** `src/data/pages/cv.ts` — replace changed content, add new sections
4. **Update** `src/pages/cv.astro` — add render blocks for any sections not yet displayed
5. **Run** `pnpm check` to verify no TypeScript errors

## LaTeX Parsing Notes

- `\item[date] \tab{} content` — date is the bracketed label, content follows
- `\href{url}{text}` — extract both; use as `{ url, text }` for links
- `\textbf{text}` — bold; strip markup for plain text fields
- `\section*{NAME}` / `\subsection*{NAME}` — section and subsection markers
- Parenthetical draft notes like `(I have deep interest... ?)` in personal statement → **omit from webpage**
- `\textit{*In preparation}` → set `inPreparation: true` on the item
- The page offers two links that open in a new tab: `/cv.pdf` (full CV) and `/resume.pdf` (condensed resume). Both are copied from `resume/` to `public/` by `scripts/copy-resume-pdfs.js` during prebuild.
