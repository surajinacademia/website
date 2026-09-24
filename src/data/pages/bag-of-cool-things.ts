/** Public resources for planning science outreach activities. */
export interface OutreachResource {
	title: string;
	href: string;
}

export interface OutreachCategory {
	slug:
		| "hands-on-science"
		| "3d-printing-ideas"
		| "games-simulations"
		| "art-storytelling"
		| "science-communication"
		| "outreach-reading"
		| "organizations"
		| "funding";
	title: string;
	description: string;
	items: OutreachResource[];
}

export const bagOfCoolThingsPage: {
	title: string;
	description: string;
	categories: OutreachCategory[];
} = {
	title: "Bag of Cool Things",
	description: "Experiments, games, art, and practical guides for sharing science with others.",
	categories: [
		{
			slug: "hands-on-science",
			title: "Hands-on science",
			description: "Activities, models, and tools to explore science together.",
			items: [
				{
					title: "Arvind Gupta: Toys from Trash",
					href: "https://www.arvindguptatoys.com/",
				},
				{
					title: "MIT Edgerton Center: Biology Sets",
					href: "https://edgerton.mit.edu/DNA-proteins-sets",
				},
				{
					title: "Foldscope: Paper microscopes",
					href: "https://foldscope.com/",
				},
			],
		},
		{
			slug: "3d-printing-ideas",
			title: "3D printing ideas",
			description: "Printable models and guides for bringing molecular structures into your hands.",
			items: [
				{
					title: "PDB-101: 3D Print Alpha-amylase",
					href: "https://pdb101.rcsb.org/learn/3d-printing/3d-print-alpha-amylase",
				},
				{
					title: "NIH 3D: Printable biological models",
					href: "https://3d.nih.gov/",
				},
				{
					title: "Barney Bioproducts Lab: 3D Printing and Molecular Models",
					href: "https://barneybioproductslab.cfans.umn.edu/3d-printing-and-molecular-models",
				},
				{
					title: "Fábio Madeira: 3D printing protein models",
					href: "https://biomadeira.github.io/2018-01-22-3d-printing-made-simple",
				},
				{
					title: "3D Print a Protein: Modeling a Molecular Machine",
					href: "https://www.instructables.com/3D-Print-a-Protein-Modeling-a-Molecular-Machine/",
				},
			],
		},
		{
			slug: "games-simulations",
			title: "Games and simulations",
			description: "Interactive tools for exploring scientific ideas on screen.",
			items: [
				{
					title: "VisualPDE: Interactive simulations",
					href: "https://visualpde.com/",
				},
				{
					title: "Microscopya: Cell adventure game",
					href: "https://microscopya.com/play/",
				},
				{
					title: "CellPAINT: Molecular painting",
					href: "https://sourceforge.net/projects/cell-paint/",
				},
				{
					title: "BioNumbers: Biological measurements",
					href: "https://bionumbers.hms.harvard.edu/",
				},
				{
					title: "Flourish: Interactive charts and maps",
					href: "https://flourish.studio/",
				},
				{
					title: "Tim Davison: Molecular visualization and VR",
					href: "https://timd.ca/",
				},
				{
					title: "Cellscape VR Biology Guided Tour",
					href: "https://www.youtube.com/watch?v=-q82IrNWbKc",
				},
				{
					title: "HIV-1 Nucleoid: Molecular models",
					href: "https://ccsb.scripps.edu/latticenucleoid/hivnucleoid/",
				},
				{
					title: "Mesoscope@TSRI: Molecular modeling",
					href: "https://mesoscope.scripps.edu/beta/",
				},
				{
					title: "autoPACK and cellPACK: 3D molecular scenes",
					href: "https://www.autopack.org/home",
				},
			],
		},
		{
			slug: "art-storytelling",
			title: "Art and storytelling",
			description: "Science through images, comics, exhibitions, and performance.",
			items: [
				{
					title: "Matteo Farinella: Science comics and illustrations",
					href: "https://matteofarinella.com/",
				},
				{
					title: "Cartoon Science",
					href: "https://www.cartoonscience.org/",
				},
				{
					title: "Kindra Crick: Science-inspired art",
					href: "https://www.kindracrick.com/my-work.html",
				},
				{
					title: "PhDcartoon: Ashleigh Neill’s research illustrations",
					href: "https://www.phdcartoon.com/",
				},
				{
					title: "The Objectivity of My Affection, Part 1",
					href: "https://freerads.org/2016/01/23/science-scope-2/",
				},
				{
					title: "STEMarts Lab: Science-art installations",
					href: "https://stemarts.com/sciart-productions/",
				},
				{
					title: "Tagtool: Live drawing and animation",
					href: "https://www.omai.at/tagtool",
				},
				{
					title: "PSYCHE Archive: Science Gallery Bengaluru",
					href: "https://bengaluru.sciencegallery.com/psyche-archive",
				},
				{
					title: "Art of Science Learning",
					href: "https://www.artofsciencelearning.org/",
				},
				{
					title: "Mind, Matter & Media Lab: Public installations",
					href: "https://www.m3lab.org/public-installations",
				},
			],
		},
		{
			slug: "science-communication",
			title: "Resources for Science Communication",
			description: "Guides and tools for sharing science with others.",
			items: [
				{
					title: "5 Principles of Science Communication",
					href: "https://www.socialsciencespace.com/2018/04/five-principles-of-science-communication/",
				},
				{
					title: "APS Science Trust Project",
					href: "https://www.aps.org/initiatives/advocate-amplify/public-engagement/science-trust",
				},
				{
					title: "Science Communication for Scientists: JAM Tool",
					href: "https://admin.library.oapen.org/bitstream/handle/20.500.12657/106159/9781040444658.pdf?isAllowed=y&sequence=1",
				},
				{
					title: "The Psychology of Fake News: Accepting, Sharing, and Correcting Misinformation",
					href: "https://openresearch-repository.anu.edu.au/bitstreams/35d32d1b-ca1b-45f5-a806-2c968ecbb947/download",
				},
				{
					title: "SWIPE SciComm Magazine",
					href: "https://www.animateyour.science/magazine",
				},
				{
					title: "I Am SciComm: Guest science communicators",
					href: "https://crastina.se/i-am-scicomm/",
				},
			],
		},
		{
			slug: "outreach-reading",
			title: "Reading and inspiration",
			description: "Papers, interviews, and stories to inform science outreach.",
			items: [
				{
					title: "Reflections on Papers Past: Ecology and evolution interviews",
					href: "https://reflectionsonpaperspast.wordpress.com/contact/",
				},
				{
					title: "A Pedagogical Approach to Science Outreach",
					href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7188294/",
				},
				{
					title: "Curiosity-Based Biophysics Projects",
					href: "https://thebiophysicist.kglmeridian.com/view/journals/biop/2/1/article-p6.xml",
				},
				{
					title: "Scientific Outreach: Toward Effective Public Engagement with Biological Science",
					href: "https://academic.oup.com/bioscience/article/64/4/333/248218",
				},
				{
					title: "Fostering Student Engagement",
					href: "https://files.eric.ed.gov/fulltext/EJ1069715.pdf",
				},
				{
					title: "Science Educational Outreach Programs That Benefit Students and Scientists",
					href: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002368",
				},
				{
					title: "Temporal signals drive the emergence of multicellular information networks",
					href: "https://www.pnas.org/doi/10.1073/pnas.2202204119",
				},
				{
					title:
						"Doing With Understanding: Lessons From Research on Problem- and Project-Based Learning",
					href: "https://www.tandfonline.com/doi/abs/10.1080/10508406.1998.9672056",
				},
				{
					title: "How and why do high school teachers use PhET interactive simulations?",
					href: "https://www.per-central.org/items/detail.cfm?ID=14842",
				},
				{
					title: "The Eighteenth Elephant: Physics, biology, and art blog",
					href: "https://eighteenthelephant.com/",
				},
				{
					title: "Joseph D. Martin: History of science",
					href: "https://www.jdmartin.org/",
				},
				{
					title: "NPR: Brain cells in a lab dish learn to play Pong",
					href: "https://www.capradio.org/news/npr/story?storyid=1128875298",
				},
			],
		},
		{
			slug: "organizations",
			title: "Organizations",
			description: "Public resources from education and community organizations.",
			items: [
				{
					title: "NCCR SPIN: Quantum science outreach",
					href: "https://www.nccr-spin.ch/outreach-3",
				},
				{
					title: "University of Oregon Science Literacy Program: events archive",
					href: "https://scilit.uoregon.edu/events/",
				},
				{
					title: "National Science Teaching Association: Teaching resources",
					href: "https://www.nsta.org/resources",
				},
				{
					title: "Fresno American Indian Health Project",
					href: "https://www.faihp.org/",
				},
			],
		},
		{
			slug: "funding",
			title: "Funding",
			description: "A starting point for finding funding opportunities.",
			items: [
				{
					title: "Grants.gov: Federal funding opportunities",
					href: "https://www.grants.gov/",
				},
			],
		},
	],
};
