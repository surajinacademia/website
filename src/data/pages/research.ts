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
								"Free-floating collagen gels populated by fibroblasts can undergo a cell-density-dependent disorder-to-order transition in which collagen disks compact significantly above a critical cell density. This transition has been proposed to be driven by multicellular network formation above the critical cell density. How cell density controls this compaction transition remains unclear. In our model, cellular traction applied to the extracellular matrix (ECM) without explicit cell–cell interactions produces no sharp transition; compaction instead increases additively with cell density. Introducing cell–cell interactions, however, produces a multicellular network in which we show that the percolation transition coincides with a sharp change in compaction and accounts for how that critical density shifts with observation time. Our work shows how cell–ECM and cell–cell interactions can collectively remodel the ECM, with relevance to wound healing and fibrosis.",
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
								"Vasculogenesis results in the formation of primitive multicellular networks of endothelial cells that later provide the structure for a fully functional vascular network. Chemical guidance, cell–cell adhesion, and cell–matrix interactions have been proposed to explain the self-organization of these networks. However, how local cell interactions coordinate assembly with subsequent remodeling remains an open question. We develop a simple particle-based network model that combines chemotaxis and protrusion-based cell adhesion to describe initial network formation. We then introduce mechanochemical feedback between cell-generated contractile tension and the stability of cell–cell adhesions to explain the remodeling phase. Analysis of the network topology shows how this feedback permits reorganization through branch loss and loop merging while preserving load-bearing connections. Our work highlights the underlying principles of pattern formation during morphogenesis and may help explain how disruptions in early vascular development contribute to cardiovascular disease.",
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
								"The formation and organization of cell–cell contacts are essential for tissue morphogenesis and mechanical integrity. Although cadherin binding establishes adhesion, the subsequent evolution of a contact depends on remodeling of the actomyosin cortex. We develop complementary active-gel and contact-mechanics models to investigate how cortical activity controls contact formation, expansion, and spatial organization. In the formation model, prescribed suppression of RhoA activity at the contact center creates an active-stress gradient that drives outward cortical flow. Advection, diffusion, and turnover determine the resulting depletion of F-actin from the center and its accumulation near the contact rim. A complementary mechanical model examines how reduced cortical tension at the cell–cell interface drives contact expansion through the force balance at the contact edge. We then describe the contact rim as an active gel, where contractile stress, density-dependent pressure, and turnover govern pattern formation. Linear stability analysis and nonlinear dynamics distinguish the emergence of periodic cortical-density patterns from their subsequent remodeling through peak splitting or insertion during rim growth. Together, these models provide a physical framework for understanding how cortical remodeling establishes and organizes cell–cell contacts.",
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
								"Cell–cell junctions must withstand mechanical forces while remaining capable of remodeling. Their resistance to separation depends on the interplay between cortical tension, cadherin adhesion, contact geometry, and molecular bond kinetics. Using a minimal model of a cell doublet, we investigate how these contributions determine junction deformation and stability under an applied pulling force. We compare distributed and rim-localized adhesion and examine how a decreasing contact radius can concentrate cadherin bonds when their number is conserved during loading. This geometric concentration provides a candidate mechanism for adaptive junction strengthening, potentially increasing the force required for separation. We further examine force-dependent cadherin bond kinetics and feedback between cadherin recruitment and actomyosin contractility to study junction persistence and rupture. The framework distinguishes the loss of a quasistatic contact equilibrium from time-dependent molecular bond failure, allowing separation force and junction lifetime to be considered as distinct observables. This project aims to clarify when cortical mechanics and cadherin organization stabilize a junction, and when bond loss leads to failure, providing a basis for interpreting cell-doublet separation experiments and understanding tissue resistance to tearing and fracture.",
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
								"Cells are highly crowded with proteins and other macromolecules, yet many experiments study protein reactions in dilute solutions. How does this difference affect protein–protein association? Understanding how the surrounding molecules influence whether two proteins bind is central to connecting laboratory measurements with conditions inside cells. In this project, we use reaction–diffusion simulations to explore how the size, shape, and interactions of these surrounding molecules affect association. We also study mixtures of different crowding agents, reflecting the diversity of the cellular environment. Our goal is to identify which features of crowding favor or hinder protein association and understand how their combined effects differ from those in simpler environments.",
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
								"We study a two-dimensional model of three-body interaction of active Brownian particles. Self-propulsion drives nonequilibrium motion, while rotational diffusion continually changes particle orientations. We aim to determine how density, propulsion speed, orientational persistence, and screening clearance control global scale aggregation, filament formation, network connectivity. Binary mixtures introduce differences in screening clearance while keeping intrinsic motility unchanged, allowing us to test whether interaction heterogeneity produces distinct mobility, composition patterns, or motion along emerging filaments.",
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
								"Biological collectives use local sensing and communication to coordinate behavior despite the limited information available to each individual. Using collective chemotaxis models as inspiration, we investigate how local rules and short range cell-cell interactions can help with collective problem-solving in swarms of large language model (LLM) agents, for example, finding solutions in a landscape with multiple local optima in particle swarm optimization (PSO). By comparing with agent-based models of collective cell dynamics and varying communication constraints, we examine the effects on agent decision policies. We ask how LLMs process local information and communicate uncertain local measurements to other agents. This helps us understand how misleading information or errors can propagate and whether LLM-based decisions improve or impair collective performance. Examining local rules and communication in both biological collectives and artificial agent systems may provide broader insight into how information exchange shapes collective behavior in complex systems, including opinion dynamics and adaptation in social and biological systems.",
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
