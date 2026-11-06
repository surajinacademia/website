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
								"Fibroblasts embedded in free-floating collagen gels can drive a sharp, cell-density-dependent compaction transition, yet how local cellular forces coordinate across scales to remodel the extracellular matrix (ECM) remains unclear. We develop a coarse-grained computational model of cells interacting within a deformable matrix to study how cellular traction and intercellular coordination govern collective matrix deformation across cell densities and timescales. The model connects microscopic force transmission and multicellular organization to macroscopic tissue compaction. These insights help clarify how cell–matrix interactions drive tissue remodeling during wound healing and fibrosis.",
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
								"During early vascular development, endothelial cells self-organize into primitive multicellular networks that later remodel into functional vasculature, but how local cell interactions coordinate initial assembly with subsequent structural refinement remains an open question. We use a particle-based computational model paired with topological network analysis to study how chemical guidance and mechanical forces govern both network formation and remodeling. Tracking network connectivity and geometry over time reveals how collective architecture evolves across developmental stages. Studying these self-organizing principles clarifies how tissues build transport networks during morphogenesis and how impaired remodeling contributes to vascular disease.",
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
								"Forming and maturing cell–cell contacts is essential for tissue integrity, yet how cadherin adhesion and actomyosin cortex remodeling coordinate contact expansion and spatial organization remains poorly understood. We formulate continuum theoretical and mechanical models of the cell–cell interface to investigate how cortical mechanics and active remodeling govern contact growth and junctional organization. The theory captures how active forces and turnover shape both the geometry of an expanding contact and the emergence of spatial patterns along the junction. Together, these models provide a physical basis for understanding how cells build mechanically robust contacts during morphogenesis.",
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
								"Cell–cell junctions must withstand mechanical forces while remaining dynamic enough to remodel, raising the question of how cortical mechanics, contact geometry, and molecular adhesion together determine resistance to separation. Using a minimal biophysical model of a cell doublet under mechanical loading, we study how junctional architecture and adhesion dynamics govern contact deformation and stability. The model identifies the physical regimes that stabilize an intercellular contact versus those that lead to detachment under external force. Clarifying these principles provides a quantitative basis for interpreting cell-doublet separation experiments and understanding how tissues resist tearing and fracture.",
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
								"Cells are densely crowded with macromolecules, yet most biochemical experiments measure protein–protein association in dilute solution, leaving open how a heterogeneous intracellular environment alters reaction equilibria. We use reaction–diffusion simulations to investigate how the size, shape, and interaction potentials of surrounding crowding agents, both individually and in mixtures, affect protein association. Comparing homogeneous and mixed crowding environments shows how physical and chemical properties of the medium combine to favor or hinder complex formation. These results help connect dilute laboratory assays with biomolecular reactions inside living cells.",
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
								"Many nonequilibrium particle systems interact through multibody effects rather than simple pairwise forces, yet how higher-order interactions shape large-scale collective motion remains poorly understood. We study a two-dimensional model of self-propelled active Brownian particles with three-body interactions in both single-component populations and heterogeneous mixtures. Simulations across density and motility regimes show how orientational persistence and multibody coupling govern collective aggregation, filament formation, and transport. Studying these dynamics sheds light on how higher-order local interactions control phase behavior and structure formation in active matter.",
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
								"Biological collectives coordinate behavior through local sensing and communication despite limited individual information, raising the question of how similar local rules shape collective problem-solving in artificial agent swarms. Drawing inspiration from biophysical models of collective dynamics, we use multi-agent simulations to study how swarms of large language model (LLM) agents explore rugged landscapes in particle swarm optimization. Varying communication range and decision rules reveals how decentralized agents process uncertain local measurements and propagate information across the swarm. Comparing biological and artificial collectives offers broader insight into how local information exchange shapes coordination and adaptation in complex systems.",
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
