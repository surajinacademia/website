/**
 * Research page content. Edit here to change what appears on /research/.
 */

type ResearchMedia =
	| {
			kind: "image";
			src: string;
			alt: string;
			width: number;
			height: number;
	  }
	| {
			kind: "video";
			src: string;
			poster: string;
			width: number;
			height: number;
	  };

interface ResearchProject {
	title: string;
	summary?: string;
	abstract: string;
	abstractLink?: {
		label: string;
		url: string;
	};
	media?: ResearchMedia[];
	wide?: boolean;
	experimentalVideoCredit?: {
		label: string;
		url: string;
	};
	mediaCredit?: {
		prefix: string;
		label: string;
		url: string;
	};
	publication?: {
		title: string;
		authors: {
			name: string;
			highlight?: boolean;
		}[];
		journal: string;
		date: string;
		url: string;
	};
}

interface ResearchProjectGroup {
	title?: string;
	projects: ResearchProject[];
}

interface ResearchSection {
	title?: string;
	groups: ResearchProjectGroup[];
}

export const researchPage: {
	sections: ResearchSection[];
	scholarUrl: string;
} = {
	sections: [
		{
			groups: [
				{
					title: "Collective dynamics of multicellular networks",
					projects: [
						{
							title: "Mechanics of cell–ECM interaction",
							media: [
								{
									kind: "video",
									src: "/research/fibroblast-collagen-remodeling.mp4?v=2",
									poster: "/research/fibroblast-collagen-remodeling.jpg",
									width: 1476,
									height: 1476,
								},
							],
							abstract:
								"When fibroblasts are placed in a free-floating collagen gel, they pull on the surrounding fibers and can cause the entire gel to compact suddenly above a certain cell density. How do forces from individual cells add up to drive this collective change across the tissue? In this project, we build a computational model of contractile cells in a fiber matrix to study how cell-generated forces and cell–cell interactions reorganize the extracellular matrix over time. This helps us connect cell-scale mechanics to tissue remodeling in processes such as wound healing and fibrosis.",
							experimentalVideoCredit: {
								label: "Doha et al. (2022)",
								url: "https://doi.org/10.1016/j.actbio.2022.10.012",
							},
						},
						{
							title: "Self-organization and remodeling of vascular networks",
							media: [
								{
									kind: "video",
									src: "/research/vasculogenesis-comparison.mp4?v=4",
									poster: "/research/vasculogenesis-comparison.jpg?v=3",
									width: 1944,
									height: 1760,
								},
							],
							abstract:
								"During early blood vessel development, endothelial cells migrate and connect into a primitive network that later remodels into a working vascular system. How do local interactions between cells guide both the initial assembly of this network and its later remodeling? We use agent-based and particle-based simulations, together with network topology analysis, to study how cell migration, chemical cues, and mechanical forces shape vascular networks over time. Our goal is to understand how tissues build functional transport networks during development and what goes wrong in vascular disease.",
							experimentalVideoCredit: {
								label: "IPRASENSE (2015)",
								url: "https://www.youtube.com/watch?v=tYDF1i1lRJU",
							},
						},
					],
				},
				{
					title: "Mechanobiology of cell–cell adhesion",
					projects: [
						{
							title: "Dynamics of cell–cell adhesion formation and maturation",
							media: [
								{
									kind: "video",
									src: "/research/cell-cell-adhesion.mp4?v=3",
									poster: "/research/cell-cell-adhesion.jpg?v=3",
									width: 1600,
									height: 1600,
								},
							],
							abstract:
								"For tissues to hold together, neighboring cells must form stable contacts and organize adhesion proteins along their shared boundary. Once cadherin molecules bind across two cells, how does remodeling of the actomyosin cortex control the growth and patterning of the contact? We use an active-gel model of the cell–cell interface to study how cortical tension, actin flow, and protein turnover expand the contact and organize adhesion clusters along the rim. This gives us a physical picture of how cells build and maintain contacts during tissue development.",
							experimentalVideoCredit: {
								label: "Engl et al. (2014)",
								url: "https://doi.org/10.1038/ncb2973",
							},
						},
						{
							title: "Adhesion strength and stability of cell–cell junctions",
							media: [
								{
									kind: "image",
									src: "/research/cell-cell-junction-stability.png",
									alt: "Cell–Cell Junction Stability figure",
									width: 3300,
									height: 3000,
								},
							],
							abstract:
								"Cell–cell junctions have to resist mechanical forces without losing the ability to remodel as tissues move and deform. What determines how much pulling force a junction can take before it breaks? Using a mechanical model of a two-cell contact under load, we study how cortical tension, contact geometry, and cadherin bond dynamics work together to keep a junction stable or cause it to fail. This work helps connect single-doublet pulling experiments to how tissues resist tearing under mechanical stress.",
						},
					],
				},
				{
					title: "Protein interactions in a crowded environment",
					projects: [
						{
							title: "Protein interactions in a crowded environment",
							wide: true,
							summary:
								"Cells are tightly packed with proteins and other macromolecules, yet most experiments measure protein reactions in dilute buffer. How does a crowded environment change whether two proteins bind? We use reaction–diffusion simulations to study how the size, shape, and interactions of surrounding crowder molecules affect protein association, both for single crowder types and for mixtures that better reflect the cell interior. This helps connect test-tube measurements in dilute solution to how protein reactions behave inside living cells.",
							media: [
								{
									kind: "image",
									src: "/research/protein-crowding-simulation.png",
									alt: "Protein crowding simulation",
									width: 710,
									height: 713,
								},
								{
									kind: "image",
									src: "/research/protein-crowding-goodsell.jpg",
									alt: "Illustration from The Machinery of Life by David S. Goodsell",
									width: 1000,
									height: 522,
								},
							],
							abstract:
								"Protein-protein association in vivo occur in a crowded and complex environment. Theoretical models based on hard-core repulsion predict stabilization of the product under crowded conditions. Soft interactions, on the contrary, can either stabilize or destabilize the product formation. Here we modeled protein association in presence of crowders of varying size, shape, interaction potential and used different mixing parameters for constituent crowders to study the influence on the association reaction. It was found that size is a more dominant factor in crowder-induced stabilization than the shape. Furthermore, in a mixture of crowders having different sizes but identical interaction potential, the change of free energy is additive of the free energy changes produced by individual crowders. However, the free energy change is not additive if two crowders of same size interact via different interaction potentials. These findings provide a systematic understanding of crowding influences in heterogeneous medium.",
							mediaCredit: {
								prefix: "Illustration from",
								label: "The Machinery of Life by David S. Goodsell",
								url: "https://ccsb.scripps.edu/goodsell/machinery-of-life-reducedillustrations/",
							},
							publication: {
								title:
									"Modeling protein association from homogeneous to mixed environments: A reaction-diffusion dynamics approach",
								authors: [{ name: "Suraj Kumar Sahu", highlight: true }, { name: "Mithun Biswas" }],
								journal: "Journal of Molecular Graphics and Modelling",
								date: "107, 107936 · September 2021",
								url: "https://www.sciencedirect.com/science/article/pii/S1093326321001054",
							},
						},
					],
				},
				{
					title: "Collective dynamics of inanimate matter",
					projects: [
						{
							title: "Collective dynamics in three-body interactions",
							media: [
								{
									kind: "video",
									src: "/research/active-brownian-particles.mp4?v=2",
									poster: "/research/active-brownian-particles.jpg",
									width: 1190,
									height: 386,
								},
							],
							abstract:
								"Most models of active matter assume that self-propelled particles interact only in pairs, even though dense biological and synthetic systems often involve multi-particle interactions. How do three-body interactions change the collective motion of active particles? We simulate self-propelled Brownian particles in two dimensions to explore how motility, rotational diffusion, and three-body coupling shape clustering, filament formation, and transport in both uniform populations and mixtures. This helps us understand how higher-order local rules control large-scale patterns in active matter.",
						},
						{
							title: "Collective dynamics of LLM agents",
							media: [
								{
									kind: "video",
									src: "/research/collective-intelligence.mp4?v=3",
									poster: "/research/collective-intelligence.jpg?v=2",
									width: 3840,
									height: 2160,
								},
							],
							abstract:
								"Groups of cells and animals can solve complex navigation problems using only noisy local sensing and short-range communication with neighbors. Can similar local rules help swarms of artificial agents solve search problems together? Inspired by biological chemotaxis, we use multi-agent simulations to study how swarms of large language model (LLM) agents search landscapes with many local optima, as in particle swarm optimization. By varying how agents share and interpret uncertain local information, we examine when communication helps the group find better solutions and when it spreads errors.",
							abstractLink: {
								label: "particle swarm optimization",
								url: "https://en.wikipedia.org/wiki/Particle_swarm_optimization",
							},
						},
					],
				},
			],
		},
	],

	scholarUrl: "https://scholar.google.com/citations?user=sFKtiyQAAAAJ&hl=en&authuser=1",
};
