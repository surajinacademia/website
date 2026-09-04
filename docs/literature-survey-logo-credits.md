# Literature Survey guide: tool-logo provenance

Retrieved 2026-09-04. These small files are first-party product or site identifiers used beside links in the “Literature Survey Like a Detective” guide. They are not decorative stock imagery, and no generative-image source was used.

Product names and marks remain the property of their respective owners. Their inclusion identifies the destination of each link and does not imply endorsement. A software-repository license does not necessarily grant trademark rights in a project mark.

| Tool / link destination | Local asset | First-party source page | Exact source asset | Source format and local processing |
| --- | --- | --- | --- | --- |
| Litmaps — `https://www.litmaps.com` | `/images/how-to/tool-logos/litmaps.png` | [Litmaps](https://www.litmaps.com/) | [Homepage-declared favicon](https://cdn.prod.website-files.com/6343739329c53451d4f4a69a/6387e1263f80a9ebdc4fff60_favicon.png) | PNG, 32 × 32; copied unchanged. |
| ResearchRabbit — `https://researchrabbitapp.com` and `https://www.researchrabbit.ai` | `/images/how-to/tool-logos/researchrabbit.png` | [ResearchRabbit](https://www.researchrabbit.ai/) | [Homepage-declared app icon](https://cdn.prod.website-files.com/68367775ca3b1655a71e1698/68f169d618fea3828326bbe2_RR_icon_256.png) | PNG, 256 × 256; copied unchanged. The older `researchrabbitapp.com` address redirects to the ResearchRabbit app. |
| scite — `https://scite.ai` | `/images/how-to/tool-logos/scite.png` | [scite’s official GitHub organization](https://github.com/scitedotai) and [browser-extension repository](https://github.com/scitedotai/scite-extension) | [Repository icon, 256 px](https://raw.githubusercontent.com/scitedotai/scite-extension/master/extension/images/icons/256.png) | PNG, 256 × 256; copied unchanged. The main site returned a CloudFront 403 to the command-line request, so the icon came from scite’s own public source repository. |
| Consensus — `https://consensus.app` | `/images/how-to/tool-logos/consensus.svg` | [Consensus](https://consensus.app/) | [Homepage-declared SVG favicon](https://consensus.app/favicon.svg) | SVG with an approximately 30 × 30 viewBox; copied unchanged. |
| Perplexity — `https://www.perplexity.ai` | `/images/how-to/tool-logos/perplexity.svg` | [Perplexity](https://www.perplexity.ai/) | [Official-domain SVG favicon](https://www.perplexity.ai/favicon.svg) | SVG, 270 × 270 intrinsic coordinate space. Removed the legacy XML declaration and external DOCTYPE metadata for parser compatibility; the vector artwork is unchanged. |
| Google Scholar — `https://scholar.google.com` | `/images/how-to/tool-logos/google-scholar.png` | [Google Scholar](https://scholar.google.com/) | [Google Scholar favicon](https://scholar.google.com/favicon.ico) | The 48 × 48 PNG frame was extracted from the multi-size ICO; no visual edits. |
| Google Images — `https://images.google.com` | `/images/how-to/tool-logos/google.png` | [Google Images](https://images.google.com/) | [Google favicon](https://www.google.com/favicon.ico) | The 32 × 32 frame was converted from the multi-size ICO to PNG; no visual edits. |
| Zotero — `https://www.zotero.org` | `/images/how-to/tool-logos/zotero.png` | [Zotero](https://www.zotero.org/) | [Zotero favicon](https://www.zotero.org/favicon.ico) | The 32 × 32 frame was converted from the multi-size ICO to PNG; no visual edits. |
| Notion — `https://www.notion.com` | `/images/how-to/tool-logos/notion.png` | [Notion](https://www.notion.com/) | [Homepage-declared iOS icon](https://www.notion.com/front-static/logo-ios.png) | PNG, 512 × 512; copied unchanged. |
| Notero — `https://github.com/dvanoni/notero` | `/images/how-to/tool-logos/notero.png` | [Notero’s official repository](https://github.com/dvanoni/notero) | [Project icon, 96 px](https://raw.githubusercontent.com/dvanoni/notero/main/src/content/style/notero-96.png) | PNG, 96 × 96; copied unchanged. |
| Genie Scientific — `https://www.geniescientific.com` | `/images/how-to/tool-logos/genie-scientific.png` | [Genie Scientific](https://www.geniescientific.com/) | [Homepage-declared favicon](https://www.geniescientific.com/wp-content/uploads/2019/12/GENIEFAVICON.png) | PNG, 100 × 86; copied unchanged. |

## Validation

- Every downloaded file was checked locally with `file`; each resolved to PNG or SVG image content rather than HTML.
- The three ICO-derived assets were also inspected with ImageMagick before extracting their largest useful frame.
- The selected marks were visually reviewed together on a neutral background to confirm that each file contains the expected product identifier.
