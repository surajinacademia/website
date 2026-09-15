This is a dirty, cheap and easy way to maintain docs including equations and sources in Markdown or Jupyter notebook and export to HTML or PDF. You may choose not to use LaTeX at all.

## 1. Install the tools

- Install **VS Code** and [Pandoc](https://pandoc.org/installing.html).
- For notebooks, install Microsoft's **Python** and **Jupyter** extensions in VS Code.

## 2. Create your document `model.md`

Create a Markdown file `model.md`.

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

:::note
Use `$...$` for inline math and `$$...$$` for display equations. The `\tag{1}` adds a manually assigned equation number.
:::

:::note
For Jupyter Notebooks, put the text in **Markdown cells** in the same way.
:::

## 3. Choose a citation method

Use direct links if you want to write the source labels yourself. Use Zotero if you want Pandoc to generate the citations and reference list.

### Option A: direct links — simplest

Link the author's name beside the claim. Add a short **Sources:** line for supporting references. For example, from your model notes:

```markdown frame="none" wrap
In his 1905 paper, [Einstein](https://doi.org/10.1002/andp.19053220806)
connected the random motion of particles suspended in a liquid to molecular motion.

Sources: [Einstein (1905), Brownian motion](https://doi.org/10.1002/andp.19053220806).
```

This needs **no Zotero or bibliography file**. You write the labels and Sources line yourself. Local PDFs can also be linked using paths relative to the Markdown file.

To display an `@` in the label, escape it:

```markdown frame="none" wrap
[\@einstein1905](https://doi.org/10.1002/andp.19053220806)
```

### Option B: Zotero bibliography — automatic references

A citation key is a label for a source. Here, `einstein1905` connects the citation in your document to the paper in `references.bib`.

1. Install <a href="https://www.zotero.org/download/"><img class="tool-logo" src="/images/how-to/tool-logos/zotero.png" alt="" width="22" height="22" />Zotero and its browser Connector</a>, then <a href="https://retorque.re/zotero-better-bibtex/installation/"><img class="tool-logo" src="/images/how-to/tool-logos/better-bibtex.ico" alt="" width="22" height="22" />Better BibTeX</a> through **Zotero > Tools > Plugins > Install Plugin From File**.
2. Create a Zotero collection and save your papers or webpages into it. Check the imported authors, title, date, and URL.
3. For this example, import DOI `10.1002/andp.19053220806` and set its **Citation Key** to `einstein1905`. Keep automatic key regeneration off.
4. Right-click the collection: **Export Collection > Better BibLaTeX > Keep updated**. Save as `references.bib` beside your document.
5. Insert the matching citation key in your text:

```markdown frame="none" wrap
Example paper citation [@einstein1905].
```

6. Add this at the end of the document. Pandoc will place the reference list here:

```markdown frame="none" wrap
## References

::: {#refs}
:::
```

:::note
You can also use the [Zotero extension by mblode](https://open-vsx.org/extension/mblode/zotero) in your editor when working with Zotero citations.
:::

Keep Zotero running for automatic updates. Edit records in Zotero, rather than its exported file. A `.bib` file is citation data; it does not require LaTeX.

You can mix both citation methods. Use Option B's export command when the document contains bibliography citations.

## 4. Export to HTML

Save your document. In the terminal, run the matching command from your document folder. For Option B, keep `references.bib` in that folder too.

**Option A — direct links:**

```sh frame="none" wrap
pandoc model.md --standalone --mathjax --metadata pagetitle="Model" -o model.html
```

**Option B — bibliography citations:**

```sh frame="none" wrap
pandoc model.md --standalone --mathjax --citeproc --bibliography=references.bib --metadata link-citations=true --metadata pagetitle="Model" -o model.html
```

Both commands create `model.html` beside your document. `--mathjax` enables equation rendering; Option B also uses `--citeproc` to turn citation keys into formatted citations.

Open `model.html`. With Option B, `[@einstein1905]` should appear as **(Einstein 1905)**, with the full reference at the end.

**For Jupyter Notebooks**, replace `model.md` in either command with:

```text frame="none" wrap
model.ipynb --from=ipynb+citations+fenced_divs
```

Pandoc exports the saved notebook; it does not run its cells. The extra notebook options enable bibliography citations and the References marker.

## 5. Save as PDF

Choose **with LaTeX** or **without LaTeX**. The direct methods below start from `model.md`; the HTML method uses the file from Step 4. Each creates `model.pdf`.

<details class="pdf-method">
<summary>With LaTeX — Markdown to PDF</summary>


Install a [LaTeX distribution](https://www.latex-project.org/get/), then run:

```sh frame="none" wrap
pandoc model.md --citeproc --bibliography=references.bib -o model.pdf
```

Pandoc converts the equations, citations and reference list into a PDF.

</details>

<details class="pdf-method">
<summary>Without LaTeX</summary>


**Method 1: Pandoc and Typst — Markdown to PDF**

Install [Typst](https://github.com/typst/typst#installation), then run:

```sh frame="none" wrap
pandoc model.md --pdf-engine=typst --citeproc --bibliography=references.bib -o model.pdf
```

This exports the equations and citations, but drops the manual `\tag{1}` number in this example. Use LaTeX or the HTML method below to keep it.

For direct links only, omit `--citeproc --bibliography=references.bib` from either command. For notebooks, replace `model.md` as shown in Step 4.

**Method 2: Markdown to HTML to PDF — using a command**

Create `model.html` using Step 4. Install [Python](https://www.python.org/downloads/) and run these once:

```sh frame="none" wrap
python -m pip install playwright
python -m playwright install chromium
```

Save [html_to_pdf.py](/examples/markdown-citations/html_to_pdf.py) beside your document, then run:

```sh frame="none" wrap
python html_to_pdf.py model.html model.pdf
```

On macOS or Linux, use `python3` if `python` is not available. The script waits for MathJax to render the equations, then creates the PDF. The HTML from Step 4 needs internet access to load MathJax.

:::note
You can also open `model.html` in your browser, wait for the equations, and choose **Print > Save as PDF**.
:::

</details>

Open `model.pdf` and check the equations and references. After editing your document, repeat the export commands.

Here is the output: <a href="/examples/markdown-citations/model.html" target="_blank" rel="noopener noreferrer">HTML<span class="sr-only"> (opens in a new tab)</span></a> and <a href="/examples/markdown-citations/model-pdf.html" target="_blank" rel="noopener noreferrer">PDF<span class="sr-only"> (opens in a new tab)</span></a>.
