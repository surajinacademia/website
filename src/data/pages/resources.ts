/**
 * Curated academic resources shown on /resources/.
 * Keep this selective: public, documented work that is useful beyond this website.
 */

export const resourcesPage = {
	intro:
		"Open research software, reproducible code, and teaching material for computational biophysics and microscopy.",
	sections: [
		{
			id: "research-software",
			title: "Research software",
			resources: [
				{
					description:
						"A Python MCP server for running Cellpose workflows through AI tools, including 2D and 3D segmentation, batch processing, image restoration, and custom model training.",
					label: "Microscopy · Python",
					links: [
						{
							href: "https://github.com/surajinacademia/cellpose_mcp",
							text: "Source code",
						},
						{
							href: "https://pypi.org/project/cellpose-mcp/",
							text: "Python package",
						},
						{
							href: "https://cellpose.readthedocs.io/en/latest/",
							text: "Cellpose docs",
						},
						{
							href: "https://github.com/MouseLand/cellpose",
							text: "Cellpose project",
						},
					],
					title: "Cellpose MCP",
				},
				{
					description:
						"A companion MCP server for reproducible Fiji and ImageJ workflows, with macro execution, plugin discovery, screenshots, and structured results.",
					label: "Image analysis · Python",
					links: [
						{
							href: "https://github.com/surajinacademia/Fiji_imageJ_mcp",
							text: "Source code",
						},
						{
							href: "https://pypi.org/project/fiji-mcp-server/",
							text: "Python package",
						},
						{
							href: "https://github.com/surajinacademia/Fiji_imageJ_mcp/blob/main/docs/quickstart.md",
							text: "Quick start",
						},
					],
					title: "Fiji / ImageJ MCP",
				},
			],
		},
		{
			id: "code-and-teaching",
			title: "Code, teaching & figures",
			resources: [
				{
					description:
						"Workshop material on context-aware AI research workflows, scientific data analysis, image analysis, and computational reproducibility.",
					label: "Workshop · Tutorial",
					links: [
						{
							href: "https://github.com/surajinacademia/AI-Aided-Research-Workflow",
							text: "View workshop",
						},
					],
					title: "AI-Aided Research Workflow",
				},
				{
					description:
						"Figure 6 reproducibility code for a GFNN and SINDy pipeline developed for the paper “Zyxin is all you need: machine learning adherent cell mechanics.”",
					label: null,
					links: [
						{
							href: "https://github.com/surajinacademia/cell_force_gfnn",
							text: "Source code",
						},
						{
							href: "https://arxiv.org/abs/2303.00176",
							text: "Read the paper",
						},
					],
					title: "Cell Mechanics GFNN",
				},
				{
					description:
						"A minimalist Matplotlib style package for publication figures, using CMU Sans Serif, Computer Modern mathematics, and reusable journal-width presets.",
					label: "Scientific figures · Python",
					links: [
						{
							href: "https://github.com/surajinacademia/Matplolib-Minimalist-Theme",
							text: "Source code",
						},
					],
					title: "Minimalist Matplotlib Theme",
				},
			],
		},
	],
	github: {
		href: "https://github.com/surajinacademia",
		text: "Browse all public repositories",
	},
} as const;
