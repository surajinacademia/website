# Research media

## Original video collection

`research-media/sources/` contains byte-identical copies of the seven supplied
source videos, grouped by project. This includes both vascular comparison inputs
and both supplied versions of the collective-intelligence video. The originals
remain in their parent locations.

`research-media/sources/manifest.json` records each copy's original path, size,
and SHA-256 checksum. The browser-ready derivatives remain in `public/research/`.

## Vascular network formation comparison

Website assets: `public/research/vasculogenesis-comparison.mp4` and
`public/research/vasculogenesis-comparison.jpg` (poster at 6 seconds).

The video presents the simulation as the main panel, with the experiment
overlapping its bottom-left corner, following the user's layout sketch:

| Panel | Input | Duration | Frame rate |
| --- | --- | --- | --- |
| Main | `network_formation_open_sector_turnover_n1000_s1_seed6201_t3000.mp4` | 12 s | 10 fps |
| Bottom-left inset | `brut-enh-logos.mp4` | 28.5 s | 10 fps |

Both retain their original playback speeds. The simulation's last frame is held
for 16.5 seconds, as requested. Playback positions do not imply equivalent
physical times between simulation and experiment.

The export is H.264, YUV 4:2:0, 1944 × 1760, 10 fps, 285 frames, 28.5 seconds,
with MP4 fast-start metadata and no audio. FFmpeg scales the original
3600 × 3000 simulation to 1632 × 1360 and places it at (312, 0). The original
720 × 480 experiment is scaled to 960 × 640 and placed at (0, 1120). Both
aspect ratios are preserved using Lanczos filtering. The inset overlays part
of the simulation's lower-left corner; neither input is cropped.

The canvas width and experimental panel dimensions match the previous
side-by-side export, keeping the experiment's on-page size unchanged. The
simulation is 70% larger in each dimension. Black padding fills the remaining
canvas. There are no added titles, captions, or other text overlays. Encoding
uses libx264, slow preset, CRF 20. Experimental logos, the simulation timestamp,
and the color bar are retained.

### Experimental source

IPRASENSE, [*Cell Tube Formation – HUVEC on Matrigel*](https://www.youtube.com/watch?v=tYDF1i1lRJU),
uploaded November 2, 2015. IPRASENSE's
[angiogenesis application page](https://www.iprasense.com/applications/angiogenesis/)
embeds the same video and identifies the assay as HUVEC cultured on Matrigel.

The supplied local excerpt matches the network geometry and the CEA tech, Leti,
IPRASENSE, Clinatec, and UPEC logo strip in the original video. The YouTube source
is longer than the supplied local file; the local file is an excerpt, not a
byte-identical copy of the original upload. Full credit is stored in the MP4
metadata and linked at the end of the project's single-paragraph abstract.

## Fibroblast driven collagen remodeling

Website assets: `public/research/fibroblast-collagen-remodeling.mp4` and
`public/research/fibroblast-collagen-remodeling.jpg` (poster at 2.8 seconds).
The supplied source is
`experiment_simulation_compaction_fT_0_fc_1_Q_100_gap_12_4.mp4` from the
Multicellular-Compaction project's `results/plots/videos/` directory.

The original H.264 stream is copied without re-encoding, cropping, or retiming:
1476 × 1476, 15 fps, 86 frames, approximately 5.73 seconds. MP4 fast-start moves
the metadata to the beginning of the file for browser playback. All original
panels, scale bars, labels, and timestamps are retained.

## Physics of Cell Cell adhesion

Website assets: `public/research/cell-cell-adhesion.mp4` and
`public/research/cell-cell-adhesion.jpg` (poster at 5 seconds).
The supplied source is `cadherin_myosin_splitting_insertion_synchronized.mp4`
from the Adhesion project's `results/` directory.

The original H.264 stream is copied without re-encoding, cropping, or retiming:
1600 × 1600, 30 fps, 300 frames, 10 seconds. MP4 fast-start moves the metadata to
the beginning of the file for browser playback. All original panels, legends,
labels, timestamps, and the experimental source credit in the video are retained.

The embedded experimental credit identifies Engl et al., *Nature Cell Biology*
(2014), [DOI 10.1038/ncb2973](https://doi.org/10.1038/ncb2973). The same source is
linked at the end of the project abstract.

## Three-body interactions in active Brownian particles

Website assets: `public/research/active-brownian-particles.mp4` and
`public/research/active-brownian-particles.jpg` (poster at 10 seconds).
The input is the supplied `initial_condition_by_phi_low_type_colored_collage.mp4`
with the full parameterized basename starting
`farnaz_binary_if_pbc_abp_initial4_n1500_philow0_0p5_1_iflow0_ifhigh1_`
in the intercalation_model project's `results/video/` directory.

The existing renderer, `results/analysis/render_farnaz_binary_if_video_collage.py`,
constructs three rows of low-screening fractions (0, 0.5, 1) and four columns of
initial conditions (random, cluster, line, multi-cluster). Only the rightmost,
multi-cluster column is retained, with its top-to-bottom order rearranged into
left-to-right order. The original simulation data and renderer are unchanged.

The 2048 × 1504 input is cropped using these pixel windows (top-left origin):

| Output panel | Low-screening fraction | Source x | Source y | Width | Height |
| --- | --- | --- | --- | --- | --- |
| Left | 0 | 1608 | 238 | 386 | 386 |
| Center | 0.5 | 1608 | 650 | 386 | 386 |
| Right | 1 | 1608 | 1060 | 386 | 386 |

The windows retain the complete square plot boundaries with small black margins;
they exclude the overall title, legend, and column heading. Two 16-pixel black
gaps separate the panels. No new title or caption is added. The output is
1190 × 386, H.264, YUV 4:2:0, 10 fps, 200 frames, 20 seconds, encoded with
libx264's slow preset at CRF 20 and MP4 fast-start. Original playback timing is
preserved.

## Stability of Cell–Cell Junctions

Website asset: `public/research/cell-cell-junction-stability.png`.
The supplied source is `adhesion_combined_black.png` from the Cell-adhesion
project's `results/plots/` directory. The 3300 × 3000 image is copied unchanged;
all four panels, axes, legends, and the junction-state color bar are retained.

## Modeling Protein Reactions in Crowded Environments

The two supplied images are displayed together without cropping or alteration:

| Website asset | Supplied source | Dimensions |
| --- | --- | --- |
| `public/research/protein-crowding-simulation.png` | `freepro.png` | 710 × 713 |
| `public/research/protein-crowding-goodsell.jpg` | `david3.jpg` | 1000 × 522 |

Both source files are from the Molecular Crowding MSc thesis `Figures/`
directory. The website files are byte-identical copies of those supplied files.
The molecular illustration matches `Figure5.4-reduced.jpg` in the official
Scripps [*The Machinery of Life: Reduced Illustrations* collection](https://ccsb.scripps.edu/goodsell/machinery-of-life-reducedillustrations/).
The source page requests the credit “Illustration from The Machinery of Life by
David S. Goodsell.” This attribution is linked at the end of the crowding
project's paragraph.

The project also cites Suraj Kumar Sahu and Mithun Biswas, “Modeling protein
association from homogeneous to mixed environments: A reaction-diffusion dynamics
approach,” *Journal of Molecular Graphics and Modelling* 107 (2021), 107936,
[DOI 10.1016/j.jmgm.2021.107936](https://doi.org/10.1016/j.jmgm.2021.107936).
The title, author order, and publication details were verified against the
Crossref DOI record and [PubMed](https://pubmed.ncbi.nlm.nih.gov/34139641/).

## Collective dynamics of LLM agents

Website assets: `public/research/collective-intelligence.mp4` and
`public/research/collective-intelligence.jpg` (poster at 5 seconds).
The supplied source is `collective_comparison/abm_vs_llm_minimalist_4k.mp4` from the
September 11 collective-comparison visualization output.

The original H.264 stream is copied without re-encoding, cropping, or retiming:
3840 × 2160, YUV 4:2:0, 10 fps, 201 frames, 20.1 seconds, with no audio.
MP4 fast-start places the metadata at the beginning of the file for browser
playback. Both panels and all existing labels are retained.
