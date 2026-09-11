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
	abstract: string;
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
	title: string;
	groups: ResearchProjectGroup[];
}

export const researchPage: {
	sections: ResearchSection[];
	scholarUrl: string;
} = {
	sections: [
		{
			title: "Research Projects",
			groups: [
				{
					projects: [
						{
							title: "Multicellular Driven ECM Remodeling",
							media: [
								{
									kind: "video",
									src: "/research/fibroblast-collagen-remodeling.mp4",
									poster: "/research/fibroblast-collagen-remodeling.jpg",
									width: 1476,
									height: 1476,
								},
							],
							abstract:
								"We model collective extracellular matrix (ECM) remodeling by representing the matrix as a mechanical fiber network in which cells exert traction on the matrix and contractile forces on nearby cells. As cell density increases, these cell–cell interactions produce a percolation transition in the multicellular network that drives the transition from low to high compaction. The cell–cell interaction range sets the critical cell gap for this transition. Mapping the observed time evolution of that gap to the model shows that the interaction range must increase with observation time to explain delayed compaction, in which an initially non-compacting collagen gel later compacts. Thus, network connectivity, rather than cell density alone, determines the transition. Passive non-contractile beads act as mechanical bridges, transmitting contractile forces and helping the multicellular network reach percolation.",
						},
						{
							title: "Self-Organization and Remodeling of Multicellular Networks",
							media: [
								{
									kind: "video",
									src: "/research/vasculogenesis-comparison.mp4?v=3",
									poster: "/research/vasculogenesis-comparison.jpg?v=3",
									width: 1944,
									height: 1760,
								},
							],
							abstract:
								"Using particle based simulation, we model the formation and remodeling of preliminary vascular networks from individual endothelial cells during embryogenic development. During this process, also known as vasculogenesis, endothelial cells along with a myriad of other primitive cells form the primary vascular networks in presence of growth factors. This then acts as the foundation for the latter stages of vascular development. We show that single cell level properties like cell adhesion, contact inhibition of locomotion and response to mechanical stresses can affect network topology and the distribution of stresses within the network. We show that these features play important roles in network remodeling and maturation. We then compare our results with experiments and find single cell properties that produce efficient and robust vascular networks.",
							experimentalVideoCredit: {
								label: "IPRASENSE (2015)",
								url: "https://www.youtube.com/watch?v=tYDF1i1lRJU",
							},
						},
					],
				},
				{
					title: "Physics of Cell–Cell Adhesion",
					projects: [
						{
							title: "Cell–Cell Contact Formation and Patterning",
							media: [
								{
									kind: "video",
									src: "/research/cell-cell-adhesion.mp4",
									poster: "/research/cell-cell-adhesion.jpg",
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
							title: "Stability of Cell–Cell Junctions",
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
			],
		},
		{
			title: "Collective Dynamics",
			groups: [
				{
					projects: [
						{
							title: "Active Brownian dynamics of particle mixtures",
							wide: true,
							media: [
								{
									kind: "video",
									src: "/research/active-brownian-particles.mp4",
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
							wide: true,
							media: [
								{
									kind: "video",
									src: "/research/collective-intelligence.mp4?v=2",
									poster: "/research/collective-intelligence.jpg?v=2",
									width: 3840,
									height: 2160,
								},
							],
							abstract:
								"Biological collectives use local sensing and communication to coordinate behavior despite the limited information available to each individual. Inspired by chemotaxis and cell–cell signaling, we propose to investigate how these interactions support collective problem-solving in swarms of large language models (LLMs) agents. Agents navigate toward a chemical source using local measurements and signals exchanged with nearby neighbors. Both populations operate under matched sensory, movement, and communication constraints, allowing us to examine the contribution of the decision policy. These comparisons will reveal when communication compensates for uncertain local measurements, when it propagates misleading information, and whether LLM-based decisions improve or impair these effects relative to fixed rules. The study aims to identify how individual decision-making and local information exchange jointly determine collective performance, providing a controlled starting point for connecting biological collective behavior with artificial collective intelligence.",
						},
					],
				},
			],
		},
		{
			title: "Previous Projects",
			groups: [
				{
					projects: [
						{
							title: "Modeling Protein Reactions in Crowded Environments",
							wide: true,
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
			],
		},
	],

	scholarUrl: "https://scholar.google.com/citations?user=sFKtiyQAAAAJ&hl=en&authuser=1",
};
