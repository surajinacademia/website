This is a dirty, cheap, and easy way to maintain notes with equations and sources in Markdown or a Jupyter notebook and export them to <a href="/examples/markdown-citations/model.html" target="_blank" rel="noopener noreferrer">HTML<span class="sr-only"> (opens in a new tab)</span></a> or <a href="/examples/markdown-citations/model-pdf.html" target="_blank" rel="noopener noreferrer">PDF<span class="sr-only"> (opens in a new tab)</span></a> without needing LaTeX.

## 1. Install the tools

Install VS Code and [Pandoc](https://pandoc.org/installing.html).

## 2. Create your document `model.md`

```markdown frame="none" wrap
# Model notes

For this example, $c(x,t)$ is concentration, $x$ is position,
$t$ is time, and $D$ is a constant diffusion coefficient.

$$
\frac{\partial c}{\partial t}
= D\frac{\partial^2 c}{\partial x^2}.
\tag{1}
$$
```

Use `$...$` for inline math and `$$...$$` for display equations. `\tag{1}` numbers the equation manually.

## 3. Choose a citation method

Use direct links if you want to write the source labels yourself. Use Zotero if you want Pandoc to generate the citations and reference list.

### Option A: Direct links

Link the author's name beside the claim and add a short sources line for supporting references:

```markdown frame="none" wrap
In his 1905 paper, [Einstein](https://doi.org/10.1002/andp.19053220806)
connected the random motion of particles suspended in a liquid to molecular motion.

Sources: [Einstein (1905), Brownian motion](https://doi.org/10.1002/andp.19053220806).
```

This needs no Zotero or bibliography file. You can also link local PDFs using paths relative to the Markdown file. To display a literal `@` in a link label, escape it as `[\@einstein1905](https://doi.org/10.1002/andp.19053220806)`.

### Option B: Zotero bibliography

A citation key is a short label for a source. Here, `einstein1905` connects the citation in your document to the entry in `references.bib`.

1. Install <a href="https://www.zotero.org/download/">Zotero and its browser Connector</a>, then install <a href="https://retorque.re/zotero-better-bibtex/installation/">Better BibTeX</a> through **Zotero > Tools > Plugins > Install Plugin From File**.
2. Create a Zotero collection and save your papers or webpages into it. Check the imported authors, title, date, and URL.
3. For this example, import DOI `10.1002/andp.19053220806` and set its **Citation Key** to `einstein1905`. Keep automatic key regeneration off.
4. Right-click the collection and choose **Export Collection > Better BibLaTeX > Keep updated**. Save it as `references.bib` beside your document.
5. Cite the key in your text:

```markdown frame="none" wrap
In his 1905 paper, Einstein connected the random motion of particles
suspended in a liquid to molecular motion [@einstein1905].
```

6. Add this block at the end of the document where Pandoc should place the reference list:

```markdown frame="none" wrap
## References

::: {#refs}
:::
```

Keep Zotero running so `references.bib` updates automatically, and edit records in Zotero rather than in the exported `.bib` file. You can also use the [Zotero extension by mblode](https://open-vsx.org/extension/mblode/zotero) in VS Code to insert citation keys.

You can mix both citation methods in the same file. Use Option B's export command whenever the document includes bibliography keys.

## 4. Export to HTML

Save your document and run the matching command from that folder.

**Option A: Direct links**

```sh frame="none" wrap
pandoc model.md --standalone --mathjax --metadata pagetitle="Model" -o model.html
```

**Option B: Bibliography citations**

```sh frame="none" wrap
pandoc model.md --standalone --mathjax --citeproc --bibliography=references.bib --metadata link-citations=true --metadata pagetitle="Model" -o model.html
```

Both commands write `model.html` beside your document. `--mathjax` renders the equations, and `--citeproc` formats the citations from `references.bib`.

If you write in a Jupyter notebook instead of `.md` (with Microsoft's Python and Jupyter extensions in VS Code), replace `model.md` in any Pandoc command with:

```text frame="none" wrap
model.ipynb --from=ipynb+citations+fenced_divs
```

## 5. Save as PDF

Open `model.html` from Step 4 in your browser, wait for the equations to render, and choose **Print > Save as PDF**.[^mathjax]

For command-line PDF exports, pick one of the three options below. In the LaTeX and Typst commands, omit `--citeproc --bibliography=references.bib` if you only use direct links.

### With LaTeX

Install a [LaTeX distribution](https://www.latex-project.org/get/), then run:

```sh frame="none" wrap
pandoc model.md --citeproc --bibliography=references.bib -o model.pdf
```

### With Typst

To export directly from Markdown without LaTeX, install [Typst](https://github.com/typst/typst#installation) and run:

```sh frame="none" wrap
pandoc model.md --pdf-engine=typst --citeproc --bibliography=references.bib -o model.pdf
```

Typst renders the equations and citations, but drops the manual `\tag{1}` number in this example. Use LaTeX or the HTML script below to keep `\tag{1}`.

### From HTML with a script

To export from `model.html` without LaTeX, install [Python](https://www.python.org/downloads/) and run once:

```sh frame="none" wrap
python -m pip install playwright
python -m playwright install chromium
```

Save [html_to_pdf.py](/examples/markdown-citations/html_to_pdf.py) beside your document and run:

```sh frame="none" wrap
python html_to_pdf.py model.html model.pdf
```

On macOS or Linux, use `python3` if `python` is not on your PATH. The script waits for MathJax to finish rendering before printing `model.pdf`.

[^mathjax]: The HTML file needs internet access to load MathJax.
