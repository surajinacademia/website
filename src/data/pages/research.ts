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
								"Fibroblasts in a free-floating collagen gel pull on surrounding fibers, and above a critical cell density the entire gel suddenly compacts. Why a gradual increase in cell number triggers such an abrupt tissue-scale change is hard to see from experiments alone. We build a computational model of contractile cells in a fiber network to track how cell-generated forces and cell–cell interactions reorganize the extracellular matrix over time. Connecting these cell-scale forces to bulk compaction helps explain how tissues remodel during wound healing and fibrosis.",
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
								"Blood vessel development happens in two stages: endothelial cells first assemble into a rough primitive network and then remodel that network into a working vascular tree. How do local interactions between cells guide both initial assembly and later pruning without a central blueprint? Using agent-based and particle-based simulations alongside network topology analysis, we study how cell migration, chemical cues, and mechanical forces reshape vascular networks over time and affect their transport function.",
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
								"When two cells touch, cadherin proteins bind across the interface while the underlying actomyosin cortex reorganizes to expand and stabilize the contact. We use an active-gel model of the cell–cell interface to study how cortical tension, actin flow, and protein turnover drive contact growth and organize adhesion clusters along the contact rim. The model lets us follow how a nascent contact matures into a patterned junction, offering a physical picture of how cells build stable contacts during tissue development.",
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
								"How much pulling force can a cell–cell junction withstand before it breaks, and what lets it stay strong while still remaining able to remodel? To address this, we model a two-cell contact under mechanical load, coupling cortical tension and contact geometry with cadherin bond dynamics. By testing when a loaded contact holds together and when it detaches, this work connects single-doublet pulling experiments to how tissues resist tearing under mechanical stress.",
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
								"Cells are tightly packed with proteins and other macromolecules, yet most experiments measure protein reactions in dilute buffer. Understanding how surrounding molecules influence whether two proteins bind is central to connecting test-tube measurements with conditions inside living cells. We use reaction–diffusion simulations to explore how the size, shape, and interactions of crowding agents affect protein association, both for single crowder species and for mixtures that reflect the diversity of the cell interior.",
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
								"We simulate self-propelled Brownian particles in two dimensions to ask how multi-particle interactions change collective motion compared with standard pairwise models. In dense biological and synthetic active matter, nearby particles often influence one another through three-body effects rather than isolated pair collisions. Exploring homogeneous populations and binary mixtures across motility and density regimes shows how orientational persistence and three-body coupling control clustering, filament formation, and transport in active systems.",
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
								"Groups of cells and animals navigate noisy environments using only local sensing and short-range signals with neighbors. Inspired by biological chemotaxis, we use multi-agent simulations to test whether similar local rules can help swarms of large language model (LLM) agents solve search problems with many local optima, as in particle swarm optimization. Varying how agents share and interpret uncertain local measurements shows when neighbor communication helps the group find better solutions and when it spreads errors across the swarm.",
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
