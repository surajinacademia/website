/** Public resources grouped by what readers can use them for. */
export interface ResourceItem {
	href: string;
	title: string;
	description: string;
	poster?: {
		image: string;
		pdf: string;
		alt: string;
		width: number;
		height: number;
	};
}

export interface ResourceCategory {
	slug: "mcps" | "skills" | "tools" | "how-to";
	title: string;
	description: string;
	introduction?: string[];
	items: ResourceItem[];
}

export const resourcesPage: { categories: ResourceCategory[] } = {
	categories: [
		{
			slug: "mcps",
			title: "MCPs",
			description:
				"Model Context Protocol servers that connect AI assistants to scientific software.",
			items: [
				{
					href: "https://github.com/surajinacademia/cellpose_mcp",
					title: "Cellpose MCP",
					description:
						"Run Cellpose image segmentation, restoration, training, and visualization through an AI assistant.",
					poster: {
						image: "/posters/cellpose-mcp.png",
						pdf: "/posters/cellpose-mcp.pdf",
						alt: "Cellpose MCP tutorial: install the server, then ask your AI app to count nuclei in one image, check the outlines, count a folder, and name the nuclei channel, with the outlines and counts each step returned.",
						width: 2400,
						height: 3600,
					},
				},
				{
					href: "https://github.com/surajinacademia/Fiji_imageJ_mcp",
					title: "Fiji / ImageJ MCP",
					description:
						"Connect an AI assistant to Fiji for image processing, macros, scripts, and results tables.",
					poster: {
						image: "/posters/fiji-mcp.png",
						pdf: "/posters/fiji-mcp.pdf",
						alt: "Fiji MCP tutorial: install the server, then ask your AI app to threshold the blobs sample, count and measure the blobs, and return the macro, with the mask, 43-blob count, and measurements each step returned.",
						width: 2400,
						height: 3600,
					},
				},
				{
					href: "https://github.com/surajinacademia/saenopy_mcp",
					title: "saenopy MCP",
					description:
						"Measure 3D matrix displacement and traction forces with saenopy through an AI assistant.",
					poster: {
						image: "/posters/saenopy-mcp.png",
						pdf: "/posters/saenopy-mcp.pdf",
						alt: "saenopy MCP tutorial: install the server, then ask your AI app to measure how far the gel moved around an organoid, fit the forces, and export the movement, with the movement arrows, force arrows, and a plot of movement against distance.",
						width: 2400,
						height: 3600,
					},
				},
			],
		},
		{
			slug: "skills",
			title: "Skills",
			description: "Collections of agent skills for reproducible scientific research.",
			introduction: [
				"Reusable instructions that guide AI agents through scientific research workflows.",
			],
			items: [
				{
					href: "/resources/skills/computational-modeling-skills/",
					title: "Computational Modeling Skills",
					description:
						"Ten skills for research project setup, scientific modeling, paper reproduction, notebooks, documentation, figures, and Slurm jobs.",
				},
			],
		},
		{
			slug: "tools",
			title: "Tools",
			description: "Software for everyday research work and scientific figures.",
			items: [
				{
					href: "https://github.com/surajinacademia/Matplolib-Minimalist-Theme",
					title: "Minimalist Matplotlib Theme",
					description:
						"Style scientific figures with light and dark themes, CMU Sans typography, and curated colormaps.",
				},
			],
		},
		{
			slug: "how-to",
			title: "How to Series",
			description: "Practical guides to literature surveys and research workflows.",
			items: [
				{
					href: "/resources/how-to/markdown-citations/",
					title: "Writing maths and citations in markdown.",
					description:
						"Write research notes in Markdown or Jupyter, add citations, and export to HTML or PDF without installing LaTeX.",
				},
				{
					href: "/resources/how-to/literature-survey/",
					title: "Literature Survey like a Detective",
					description: "Follow the clues, keep a trail, and build your own investigation board.",
				},
				{
					href: "https://github.com/surajinacademia/AI-Aided-Research-Workflow",
					title: "AI-Aided Research Workflow",
					description:
						"A tutorial and example workspace for using AI agents in scientific coding, data analysis, and image analysis.",
				},
			],
		},
	],
};
