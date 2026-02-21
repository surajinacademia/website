/**
 * Research page content. Edit here to change what appears on /research/
 */

export const researchPage = {
	overview:
		"My research lies at the intersection of computational physics, biophysics, and developmental biology. I develop and apply computational models to understand how physical interactions at the cellular level give rise to complex multicellular structures and networks. My work focuses on uncovering the fundamental principles of self-organization in biological systems, particularly in the context of vascular network formation.",

	interests: [
		{
			title: "Computational Biophysics",
			description: "Using physics-based computational models to understand biological phenomena",
		},
		{
			title: "Self-Organization",
			description: "Investigating how order emerges from local interactions in living systems",
		},
		{
			title: "Vascular Development",
			description: "Modeling blood vessel formation and remodeling during embryonic development",
		},
		{
			title: "Cell-ECM Interactions",
			description:
				"Understanding how cells interact with and remodel their extracellular matrix environment",
		},
		{
			title: "Multicellular Networks",
			description: "Studying the formation, structure, and function of multicellular networks",
		},
		{
			title: "Statistical Mechanics of Living Systems",
			description: "Applying statistical physics principles to biological systems",
		},
	],

	projects: [
		{
			title: "Computational Modeling of Vascular Network Formation",
			description:
				"Developing agent-based and continuum models to simulate the formation of blood vascular networks during embryonic development. This work integrates cellular mechanics, chemical signaling, and tissue-scale remodeling to understand how functional vascular patterns emerge.",
		},
		{
			title: "Physical Principles of Self-Organization",
			description:
				"Investigating the universal physical principles that govern self-organization in multicellular systems. This includes studying how cells coordinate their behavior through mechanical and chemical cues to form stable, functional structures.",
		},
		{
			title: "Cell-ECM Mechanobiology",
			description:
				"Examining the bidirectional interactions between cells and their extracellular matrix, particularly how mechanical forces influence cell behavior and how cells remodel their mechanical environment.",
		},
	],

	scholarUrl: "https://scholar.google.com/citations?user=sFKtiyQAAAAJ&hl=en&authuser=1",

	collaborations: [
		"Developmental biology and tissue morphogenesis",
		"Mechanobiology and mechanochemical signaling",
		"Complex systems and network science",
		"Soft matter physics and active matter",
	],

	methods: {
		computational: [
			"Agent-based modeling",
			"Continuum mechanics",
			"Statistical physics",
			"Network analysis",
			"Numerical simulations",
		],
		software: [
			"Python (NumPy, SciPy, NetworkX)",
			"C/C++",
			"High-performance computing",
			"Data analysis & visualization",
			"Machine learning tools",
		],
	},
} as const;
