/**
 * CV page content. Edit here to change what appears on /cv/
 */

export const cvPage = {
	downloadLabel: "Download CV (PDF)",
	downloadHref: "/cv.pdf",
	downloadFilename: "Suraj_Sahu_CV.pdf",

	personalStatement: [
		"I am a PhD candidate in Computational Physics at the University of California Merced, working in the Gopinathan Lab. My research focuses on understanding the fundamental physical principles that govern biological self-organization, particularly in multicellular systems. I am fascinated by how simple physical interactions between cells and their surrounding extracellular matrix (ECM) give rise to complex, functional tissue architectures.",
		"My work centers on computational modeling of multicellular network formation and remodeling, with a specific emphasis on blood vascular development. Through the lens of physics and computational simulation, I investigate how local cell-cell and cell-ECM interactions lead to emergent patterns and structures that are essential for life. This interdisciplinary approach combines principles from statistical mechanics, soft matter physics, and biophysics to unravel the intricate mechanisms underlying tissue morphogenesis.",
		"What drives my research is the beauty of self-organization in living systems—how order emerges from seemingly chaotic interactions, and how physical constraints shape biological function. I am committed to bridging the gap between theoretical physics and experimental biology, developing computational models that not only explain existing phenomena but also predict new behaviors that can guide experimental design and therapeutic interventions.",
	],

	education: [
		{ degree: "PhD in Computational Physics", institution: "University of California Merced - Gopinathan Lab", period: "Current" },
		{ degree: "Masters Degree", institution: "National Institute of Technology", period: "" },
	],

	researchFocus: [
		"Computational modeling of biological systems",
		"Self-organization in multicellular networks",
		"Blood vascular development",
		"Cell-ECM interactions and tissue remodeling",
	],
} as const;
