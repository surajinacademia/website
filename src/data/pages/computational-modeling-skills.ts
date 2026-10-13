import type { ResourceItem } from "./resources";

const repository = "https://github.com/surajinacademia/Computational_modeling_skills";
const skillUrl = (folder: string) => `${repository}/blob/main/skills/${folder}/SKILL.md`;

/** Scope descriptions supplied by the collection's author. */
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
				"Set up and organize research project repository and automate standard Git workflow",
		},
		{
			href: skillUrl("computational-modeling"),
			title: "Computational Modeling",
			description: "Develop biophysical models with hypothesis testing, validation and analysis",
		},
		{
			href: skillUrl("model-documentation"),
			title: "Model Documentation",
			description:
				"Write model documents explaining the physical assumptions, equations, and numerical methods",
		},
		{
			href: skillUrl("scientific-notebook"),
			title: "Scientific Notebook",
			description:
				"Create, maintain, execute, and review Jupyter notebooks for data analysis designed for model development",
		},
		{
			href: skillUrl("linear-stability-analysis"),
			title: "Linear Stability Analysis",
			description:
				"Linear stability of dynamical models in 1D or 2D continuum systems through analytical derivations, numerical calculations and plots",
		},
		{
			href: skillUrl("data-visualization"),
			title: "Data Visualization",
			description:
				"Publication-quality quantitative plots from scientific data including notebook and plot figures",
		},
		{
			href: skillUrl("schematic-designer"),
			title: "Schematic Designer",
			description: "Design schematic figure in SVG",
		},
		{
			href: skillUrl("paper-reproduce"),
			title: "Paper Reproduce",
			description:
				"Reproduce research paper claims, methods, results and analysis for biophysical model",
		},
		{
			href: skillUrl("lets-be-clear"),
			title: "Let's Be Clear",
			description: "Clarify decisions, confirm the scope, and complete the agreed task",
		},
		{
			href: skillUrl("slurm"),
			title: "Slurm",
			description: "Run jobs in HPC using Slurm",
		},
	],
};
