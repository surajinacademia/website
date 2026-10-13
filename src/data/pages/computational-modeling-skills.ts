import type { ResourceItem } from "./resources";

const repository = "https://github.com/surajinacademia/Computational_modeling_skills";
const skillUrl = (folder: string) => `${repository}/blob/main/skills/${folder}/SKILL.md`;

/** Descriptions follow the collection README and each skill's current scope. */
export const computationalModelingSkills: {
	title: string;
	description: string;
	repository: string;
	introduction: string[];
	skills: ResourceItem[];
} = {
	title: "Computational Modeling Skills",
	description:
		"Ten agent skills for scientific modeling, research project setup, paper reproduction, notebooks, documentation, figures, and Slurm jobs.",
	repository,
	introduction: [
		"Computational Modeling Skills is a collection of ten skills for scientific workflows in theoretical biophysics, from setting up a research project to developing models, checking published results, and preparing notebooks, documentation, and figures.",
		"I made these skills to aid the scientist. If you are new to research, use them to learn the process while developing your own scientific judgment.",
		"The aim is to automate repetitive work so researchers can focus on generating hypotheses and finding smart ways to test them. The point is not simply to increase productivity, but to make computational research reproducible, reviewable, tractable, and structured.",
	],
	skills: [
		{
			href: skillUrl("Research_project_setup"),
			title: "Research Project Setup",
			description:
				"Set up or reorganize a research project with reusable README and AGENTS templates, verified Git checkpoints, and recovery.",
		},
		{
			href: skillUrl("computational-modeling"),
			title: "Computational Modeling",
			description:
				"Formulate, implement, test, and review scientific models, connecting hypotheses and equations with numerical verification, physical validation, and model records.",
		},
		{
			href: skillUrl("model-documentation"),
			title: "Model Documentation",
			description:
				"Plan, write, and audit model documents that explain physical assumptions, define notation, and connect governing equations with numerical methods and implementation.",
		},
		{
			href: skillUrl("scientific-notebook"),
			title: "Scientific Notebook",
			description:
				"Create, maintain, execute, and review editable Jupyter notebooks for scientific models, simulations, and data analysis.",
		},
		{
			href: skillUrl("linear-stability-analysis"),
			title: "Linear Stability Analysis",
			description:
				"Derive and compute the stability of stationary states in one- and two-dimensional continuum models, then plot spectra and prepare a reproducible report.",
		},
		{
			href: skillUrl("data-visualization"),
			title: "Data Visualization",
			description:
				"Create and refine quantitative plots from completed scientific data, preserving observable definitions, units, weighting, and the path from data to figure.",
		},
		{
			href: skillUrl("schematic-designer"),
			title: "Schematic Designer",
			description:
				"Create scientifically faithful diagrams and composite figures from specifications, equations, data, or image references, with editable sources, a PDF, and an outlined SVG.",
		},
		{
			href: skillUrl("paper-reproduce"),
			title: "Paper Reproduce",
			description:
				"Reproduce, assess, or apply a paper’s computational model, method, claims, or results, keeping published evidence and locally generated results traceable.",
		},
		{
			href: skillUrl("lets-be-clear"),
			title: "Let's Be Clear",
			description:
				"Clarify the problem, work through decisions, confirm unresolved choices, and complete the agreed task.",
		},
		{
			href: skillUrl("slurm"),
			title: "Slurm",
			description:
				"Run and manage Slurm jobs and parameter sweeps across eligible idle capacity, including expansion, monitoring, cancellation, and recovery.",
		},
	],
};
