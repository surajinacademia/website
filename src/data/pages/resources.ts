/** Public resources grouped by what readers can use them for. */
export interface ResourceItem {
	href: string;
	title: string;
	description: string;
}

export interface ResourceCategory {
	slug: "mcps" | "skills" | "tools" | "how-to";
	title: string;
	description: string;
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
				},
				{
					href: "https://github.com/surajinacademia/Fiji_imageJ_mcp",
					title: "Fiji / ImageJ MCP",
					description:
						"Connect an AI assistant to Fiji for image processing, macros, scripts, and results tables.",
				},
			],
		},
		{
			slug: "skills",
			title: "Skills",
			description: "Reusable instructions that guide AI agents through research tasks.",
			items: [
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/computational-modeling/SKILL.md",
					title: "Computational Modeling",
					description: "Implement, debug, validate, and review scientific models and simulations.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/model-documentation/SKILL.md",
					title: "Model Documentation",
					description:
						"Plan and verify one physics-focused model document with a fixed structure, defined notation, and reproducible methods.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/schematic-designer/SKILL.md",
					title: "Schematic Designer",
					description:
						"Create scientific schematics from specifications, equations, or data using Matplotlib and TikZ.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/lets-be-clear/SKILL.md",
					title: "Let's Be Clear",
					description:
						"Clarify a request's goal, scope, constraints, and desired result before work begins.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/gotcha/SKILL.md",
					title: "Gotcha",
					description:
						"Turn feedback about an agent's behavior into lasting repository guidance in AGENTS.md.",
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
