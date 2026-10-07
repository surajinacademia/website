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
			introduction: [
				"Computational Modeling Skills is a collection of skills for scientific workflows used frequently and repeatedly in biophysics theoretical modeling. These skills aid in critically brainstorming and reviewing models to test hypotheses, doing linear stability analysis, writing structured Jupyter notebooks, making publication-quality plots, designing scientifically accurate concept diagrams and schematics, documenting code and models during model development, and running large simulation jobs in HPC.",
				"My goal for making these skills is not to replace the scientist but only to aid them. If you are new to research then please use this skill to learn the process instead of bypassing the rigorous scientific training and thought. The main purpose is to automate repetitive workflows so that researchers can engage in what they are supposed to do: generating hypotheses and finding smart ways to test them. The point of this structured workflow is not to increase productivity, but to make computational research reproducible, reviewable, tractable, and more structured.",
			],
			items: [
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/computational-modeling/SKILL.md",
					title: "Computational Modeling",
					description: "Build and test scientific models.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/model-documentation/SKILL.md",
					title: "Model Documentation",
					description: "Explain a model’s assumptions, equations, and methods.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/schematic-designer/SKILL.md",
					title: "Schematic Designer",
					description: "Create scientific diagrams and schematics.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/lets-be-clear/SKILL.md",
					title: "Let's Be Clear",
					description: "Confirm what you want before starting work.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/gotcha/SKILL.md",
					title: "Gotcha",
					description: "Save your feedback as rules for future agent work.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/data-visualization/SKILL.md",
					title: "Data Visualization",
					description: "Turn scientific data into clear plots.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/linear-stability-analysis/SKILL.md",
					title: "Linear Stability Analysis",
					description: "Check whether small disturbances grow or fade.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/paper-reproduce/SKILL.md",
					title: "Paper Reproduce",
					description: "Recreate and check models and results from a paper.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/scientific-notebook/SKILL.md",
					title: "Scientific Notebook",
					description: "Organize research calculations and plots in Jupyter notebooks.",
				},
				{
					href: "https://github.com/surajinacademia/theoretical-biophysics-modeling-skills/blob/main/skills/slurm/SKILL.md",
					title: "Slurm",
					description: "Run and manage a CPU job on a computing cluster.",
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
