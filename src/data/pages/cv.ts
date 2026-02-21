/**
 * CV page content derived from resume/cv.tex (source of truth).
 * Keep in sync with cv.tex when that file is updated.
 */

export const cvPage = {
	pdfLinks: [
		{ label: "View CV (PDF)", href: "/cv.pdf" },
		{ label: "View Resume (PDF)", href: "/resume.pdf" },
	],

	personalStatement: {
		researchInterests:
			"My research focuses on the mechanobiology of cell-cell and cell-matrix interactions to understand collective cell motility, the emergence of multicellular patterning, and the biological function of multicellular networks. For my PhD thesis, I use an Agent-Based model to study self-organization and remodeling of Blood Vascular Networks, an Active Gel model of cell-cell adhesion dynamics, and the effect of cellular forces on Extracellular Matrix (ECM) remodeling. Drawing inspiration from collective phenomena, physical learning, and biological adaptation, I would like to explore problems related to multicellular organism evolution.",
		professionalDevelopment:
			"I have experience organizing and designing science outreach activities at schools. I have developed engaging hands-on activities for high school and middle school students. I have organized professional development webinars and career panels on mentoring students to pursue graduate studies and mental health. I have led multiple tutorials and workshops on AI tools for scientific research, coding, and data analysis for graduate students.",
		teaching:
			"I have assisted in introductory physics courses, including experimental labs and discussions. I was a teaching assistant for an upper-division course. I aim to teach courses at the intersection of physics and biology that motivate students to pursue graduate studies in physics and the life sciences. I have advocated for the safe and ethical use of AI tools in pedagogy and teaching.",
		researchKeywords: [
			"Mechanobiology",
			"Self-Organization",
			"Agent Based Modeling",
			"Vascular Development",
			"Biophysics",
		],
		outreachKeywords: [
			"Community outreach",
			"Toys from Trash",
			"Science Storytelling",
			"CellPaint",
			"Foldscope",
			"Science Communication",
			"Popular Science",
		],
		teachingKeywords: [
			"Undergraduate Physics",
			"Biophysics",
			"Active learning",
			"Computational Modeling",
		],
	},

	education: [
		{
			degree: "PhD Candidate",
			institution: "Department of Physics, University of California Merced",
			institutionUrl: "https://physics.ucmerced.edu/content/suraj-sahu",
			period: "Jan 21 — present",
			advisor: "Prof. Ajay Gopinathan",
			advisorUrl: "https://www.ucmerced.edu/content/ajay-gopinathan",
			gpa: "3.84/4.00",
		},
		{
			degree: "Master of Science in Physics",
			institution: "Department of Physics and Astronomy, National Institute of Technology Rourkela",
			institutionUrl: undefined,
			period: "Aug 17 — May 19",
			advisor: undefined,
			advisorUrl: undefined,
			gpa: undefined,
		},
		{
			degree: "Bachelor of Science (Honors in Physics)",
			institution: "D.R. Nayapalli College, Utkal University",
			institutionUrl: undefined,
			period: "Jul 14 — Jun 17",
			advisor: undefined,
			advisorUrl: undefined,
			gpa: undefined,
		},
	],

	publications: {
		peerReviewed: [
			{
				date: "Jan 2021",
				authors: "Sahu, S., M. Biswas",
				title:
					"Modeling protein association from homogeneous to mixed environments: A reaction-diffusion dynamics approach.",
				journal: "Journal of Molecular Graphics and Modeling",
				url: "https://doi.org/10.1016/j.jmgm.2021.107936",
			},
		],
	},

	technicalSkills: [
		{
			category: "Computation",
			items: [
				"Agent-Based Modeling",
				"Numerical Simulations",
				"Particle-Based Simulations",
				"Reaction-Diffusion",
				"Network Analysis",
				"HPC",
			],
		},
		{
			category: "AI",
			items: [
				"AI-aided research workflow",
				"Prompt and Context Management",
				"Custom Agents",
				"Skills",
				"MCPs",
				"Image Analysis Pipeline",
			],
		},
		{
			category: "Data Science",
			items: ["Data analysis", "Visualization"],
		},
		{
			category: "Tools",
			items: ["NumPy", "SciPy", "NetworkX", "ReaDDy", "Git", "GitHub"],
		},
		{
			category: "Languages",
			items: ["Python", "Julia", "LaTeX"],
		},
		{
			category: "Software",
			items: ["VS Code", "Cursor", "Copilot", "Antigravity"],
		},
	],

	researchExperience: {
		positions: [
			{
				period: "Jan 21 — present",
				role: "Graduate Research Assistant",
				roleUrl: "http://gopinathanlab.ucmerced.edu/people.html",
				organization: "Gopinathan Group, Department of Physics, University of California Merced",
				orgUrl: "http://gopinathanlab.ucmerced.edu",
			},
			{
				period: "Jan 21 — present",
				role: "Graduate Teaching Assistant",
				roleUrl: undefined,
				organization: "Department of Physics, University of California Merced",
				orgUrl: "https://physics.ucmerced.edu",
			},
			{
				period: "Aug 17 — May 19",
				role: "Graduate Student Researcher",
				roleUrl: "https://sites.google.com/view/biomoldyn/",
				organization:
					"Computational Biophysics Group, Department of Physics and Astronomy, National Institute of Technology Rourkela",
				orgUrl: "https://sites.google.com/view/biomoldyn/",
			},
		],
		projects: [
			{
				period: "Jan 2026",
				title: "Cellpose-MCP",
				titleUrl: "https://github.com/Cellpose/Cellpose-MCP",
				githubUrl: "https://github.com/Cellpose/Cellpose-MCP",
				description:
					"MCP server enabling AI assistants (Claude, Cursor, etc.) to perform cell segmentation via 13+ tools; supports 2D/3D segmentation, batch processing, image restoration, and Napari visualization.",
				collaborators: undefined,
				inPreparation: undefined,
			},
			{
				period: "Oct 24 — present",
				title: "Compaction of ECM by Multicellular Networks",
				titleUrl: undefined,
				githubUrl: undefined,
				description:
					"Computational modeling of compaction and remodeling of collagen matrix due to contractile forces by multicellular networks of fibroblast cells.",
				collaborators: "Dasbiswas Lab",
				inPreparation: true,
			},
			{
				period: "Aug 24 — present",
				title: "Cortical Tension and Cadherin Adhesion: An Active Gel Framework",
				titleUrl: "https://summit.aps.org/events/MAR-B58",
				githubUrl: undefined,
				description:
					"Theoretical framework for cell-cell contact formation based on active gel mechanics of the actomyosin cortex, capturing actin pattern formation, cadherin clustering, and mechanochemical coupling. We investigate how external forces affect contact geometry and analyze junction formation, maturation, and rupture kinetics.",
				collaborators: undefined,
				inPreparation: true,
			},
			{
				period: "Jan 24 — present",
				title: "Mechanics of Cell Junction Formation, Stability, and Network Remodeling",
				titleUrl: "https://meetings.aps.org/Meeting/MAR24/Session/Z27.3",
				githubUrl: undefined,
				description:
					"Protrusion-driven two-cell model showing how cadherin bond kinetics and actomyosin contractility jointly control junction stability. Generalized to multicellular networks to study how cell-cell junctions govern mechanical integrity and vascular network topology.",
				collaborators: undefined,
				inPreparation: true,
			},
			{
				period: "Jan 21 — present",
				title: "Agent-based modeling of Vasculogenesis",
				titleUrl: "https://meetings.aps.org/Meeting/MAR22/Session/Z03.3",
				githubUrl: undefined,
				description:
					"Using an agent-based network dynamics model we study the development of vascular network formation and remodeling. Quantifying the functionality, resilience and adaptability of transport networks.",
				collaborators: "Sindi Lab and Kara E. McCloskey Lab",
				inPreparation: true,
			},
			{
				period: "Summer 18",
				title: "Dynamics of Indian Languages and Language Competition",
				titleUrl:
					"https://drive.google.com/file/d/1AtUgdT2HTfizxT766BorXWUXXJA-PHN6/view?usp=sharing",
				githubUrl: undefined,
				description:
					"Nearly 90% of indigenous languages in India are facing direct threat of extinction. Using a non-linear dynamical model we predicted the missing data of certain scheduled languages like Kashmiri, Tamil, Dogri and Assamese.",
				collaborators: "Rashi Agarwal",
				inPreparation: undefined,
			},
			{
				period: "Jan 21 — Jun 21",
				title: "DNA Target-Site Search Optimization by DNA Binding Proteins",
				titleUrl: undefined,
				githubUrl: undefined,
				description:
					"How DNA binding proteins find their target sites faster than the diffusion-limited rate. Lab rotation project.",
				collaborators: undefined,
				inPreparation: undefined,
			},
			{
				period: "Fall 18",
				title: "Steiner Problem",
				titleUrl: undefined,
				githubUrl: undefined,
				description:
					"On finding the shortest distance between points on a 2D surface using soap films.",
				collaborators: "Rashi Agarwal",
				inPreparation: undefined,
			},
		],
	},

	graduateCoursework: [
		{
			area: "Physics",
			courses: [
				"Classical Mechanics",
				"Electrodynamics",
				"Statistical Mechanics",
				"Quantum Mechanics",
				"Non-linear Dynamics and Chaos",
				"Condensed Matter Theory",
				"Atomic and Molecular Physics",
			],
		},
		{
			area: "Life Science",
			courses: [
				"Cell and Cellular Techniques",
				"Basics in Molecular Medicine",
				"Recombinant DNA Technology",
				"Basic Biophysics",
			],
		},
		{
			area: "Comp Sci",
			courses: [
				"Computational Physics",
				"Classical Molecular Simulation",
				"Numerical Mathematical Methods for Physics",
				"Machine Learning & Statistics for Physics and Astronomy",
			],
		},
	],

	awards: [
		{
			year: "2025",
			items: [
				"Center for Engineering Mechanobiology (CEMB) Summer Research Fellowship",
				"Center for Cellular and Biomolecular Machines (CCBM) Travel Award",
				"Physics graduate group travel fellowship",
			],
		},
		{
			year: "2024",
			items: ["Physics graduate group travel fellowship", "GradExcel Peer Mentor Award"],
		},
		{
			year: "2023",
			items: [
				"CCBM Outreach Fellowship",
				"CCBM Travel Fellowship",
				"Physics graduate group travel fellowship",
			],
		},
		{
			year: "2022",
			items: ["Physics graduate group travel fellowship", "Bobcat Summer STEM Academy Fellowship"],
		},
	],

	conferences: {
		conferences: [
			{
				date: "Feb 2026",
				title: "BPS 2026 Annual Meeting",
				titleUrl: "https://www.biophysics.org/2026meeting#/",
				presentation:
					"Collective Cell Motility of Fibroblasts Driven by Contractile Multicellular Network Formation during Compaction of Collagen Matrix.",
				authors: "Sahu S., Dasbiswas K., Gopinathan A.",
			},
			{
				date: "Mar 2025",
				title: "APS March Meeting 2025",
				titleUrl: "https://summit.aps.org/events/MAR-B58",
				presentation:
					"Stability of Cell-Cell Junctions: Balancing Cortical Tension and Cadherin Aggregation at Cell Interface during Cell-Cell Separation.",
				authors: "Sahu S., Gopinathan A.",
			},
			{
				date: "Dec 2024",
				title: "Cell Bio 2024, ASCB|EMBO",
				titleUrl: "https://www.ascb.org/cellbio2024/",
				presentation: "Balancing Cortical Tension and Adhesive Force for Stable Cell Junctions.",
				authors: "Sahu S., Gopinathan A.",
			},
			{
				date: "Mar 2024",
				title: "APS March Meeting 2024",
				titleUrl: "https://meetings.aps.org/Meeting/MAR24/Session/Z27.3",
				presentation:
					"Modeling the Mechanics of Cell-Cell Junction Formation and Dynamics in Vascular Networks.",
				authors: "Sahu S., Gopinathan A.",
			},
			{
				date: "Mar 2023",
				title: "APS March Meeting 2023",
				titleUrl: "https://meetings.aps.org/Meeting/MAR23/Session/T06.13",
				presentation:
					"Particle-Based Simulation of the Assembly and Mechanical Remodeling of Vascular Network.",
				authors: "Sahu S., Gopinathan A., Sindi S., McCloskey K., Kuhn M., Zamora J.",
			},
			{
				date: "Mar 2022",
				title: "APS March Meeting 2022",
				titleUrl: "https://meetings.aps.org/Meeting/MAR22/Session/Z03.3",
				presentation: "Agent-Based Simulation of Vasculogenesis.",
				authors: "Sahu S., Kuhn M., Zamora J., Gopinathan A., McCloskey K., Sindi S.",
			},
		],
		workshops: [
			{
				date: "Spring 2025",
				title: "Workshop on AI Tools for Research and Data Analysis",
				titleUrl: "https://github.com/surajinacademia/AI-Aided-Research-Workflow",
				role: "Organizer and Instructor",
				location: "University of California Merced",
			},
			{
				date: "Summer 2024",
				title: "Center for Engineering and Mechanobiology Boot camp",
				titleUrl: "https://cemb.upenn.edu/programs/graduate-training/boot-camp/",
				role: "Project Leader and Instructor",
				location: "University of Pennsylvania, Philadelphia",
			},
			{
				date: "",
				title: "CEMB Academic Career Search Workshop with Morgani",
				titleUrl: undefined,
				role: undefined,
				location: undefined,
			},
		],
		outreach: [
			{
				date: "Sept 2024",
				title: "Bahujan Scholars Network",
				titleUrl: undefined,
				description:
					"Panelist — Program application series: Guidance on applying for graduate schools.",
			},
			{
				date: "Jan 2024",
				title: "Digital Nalanda",
				titleUrl: "https://www.digitalnalanda.com",
				description:
					"Presenter and Organizer — Conducted hands-on activities on exploring the Tiny Wonders of the Living World using Foldscope. Led by Suraj Sahu and Disha Kuzhively.",
			},
			{
				date: "Aug 2023",
				title: "Center for Engineering Mechanobiology (CEMB)",
				titleUrl: undefined,
				description:
					"Presenter — Demonstrated tools for science outreach for mechanobiology pedagogy to high school teachers.",
			},
			{
				date: "July 2023",
				title: "Science of Coronavirus, CCBM",
				titleUrl: "https://sites.google.com/view/biophysics-graduate-club/home",
				description:
					"Organizer — Organized science outreach event for schools using CellPaint to illustrate the science of coronavirus. Led by Joey McMertien.",
			},
			{
				date: "Nov 2022",
				title: "Foreign Education and Career Series (Digital Nalanda)",
				titleUrl: undefined,
				description: "Presenter — Talk on Graduate School Applications and Career Development.",
			},
			{
				date: "Aug 2022",
				title: "The Franklin Institute",
				titleUrl: undefined,
				description:
					"Contributed in the planning phase of a mobile museum exhibit on mechanobiology. Led by Dr. Jayatri Das.",
			},
			{
				date: "July 2022",
				title: "Bobcat Summer STEM Academy",
				titleUrl: "https://calteach.ucmerced.edu/bobcat-summer-stem-academy",
				description:
					"Instructor — Instructed hands-on activities on electrical circuits for middle school students.",
			},
			{
				date: "June 2022",
				title: "Center for Cellular and Biomolecular Machines (CCBM)",
				titleUrl: undefined,
				description:
					"Organizer — Explored microorganisms using the Foldscope. Led by Jocelyn Ochoa, Anuvetha Govindranjan, and Bhavya Mishra.",
			},
			{
				date: "Fall 2021",
				title: "Mother/Daughter Science Camp",
				titleUrl: "https://merced-ca.aauw.net/science-camps/",
				description:
					"Volunteer — American Association of University Women (AAUW), led by Dr. Petia Gueorguieva.",
			},
			{
				date: "June 2021",
				title: "The Science of Flocks and Swarms",
				titleUrl:
					"https://calteach.ucmerced.edu/sites/calteach.ucmerced.edu/files/documents/2021_ccbm_virtual_sessions_1.pdf",
				description:
					"Presenter — Presented physics of flocking and ant foraging using NetLogo. Led by Prof. Ajay Gopinathan and Ritwika VPS.",
			},
		],
	},

	service: [
		{
			period: "Aug 23 — Aug 25",
			role: "Trainee Leadership Council",
			roleUrl:
				"https://cemb.upenn.edu/members/professional-development-and-training-opportunities/",
			organization: "Center for Engineering Mechanobiology (CEMB)",
			orgUrl: "https://cemb.upenn.edu/members/professional-development-and-training-opportunities/",
			description:
				"Planning and organizing tutorials, research presentations, professional development workshops for graduate students.",
		},
		{
			period: "Jun 21 — Jun 23",
			role: "President",
			roleUrl: undefined,
			organization: "Graduate Biophysics Club",
			orgUrl: "https://sites.google.com/view/biophysics-graduate-club/home",
			description:
				"Led science outreach events, facilitated journal club discussions in biophysics research, professional development workshops and networking events.",
		},
		{
			period: "Aug 24 — Aug 25",
			role: "GradExcel Peer Mentor",
			roleUrl: "https://graduatedivision.ucmerced.edu/PMP",
			organization: "GradExcel Peer Mentor Program",
			orgUrl: "https://graduatedivision.ucmerced.edu/PMP",
			description:
				"Mentored graduate students, supporting personal well-being and professional development.",
		},
	],

	references: [
		{
			name: "Prof. Ajay Gopinathan",
			nameUrl: "https://www.ucmerced.edu/content/ajay-gopinathan",
			email: "agopinathan@ucmerced.edu",
			department: "Department of Physics, CCBM",
			institution: "School of Natural Sciences, University of California Merced",
		},
		{
			name: "Prof. Suzanne Sindi",
			nameUrl: "https://naturalsciences.ucmerced.edu/people/suzanne-sindi",
			email: "ssindi@ucmerced.edu",
			department: "Department of Applied Mathematics",
			institution: "School of Natural Sciences, University of California Merced",
		},
		{
			name: "Asst. Prof. Kinjal Dasbiswas",
			nameUrl: "https://ccbm.ucmerced.edu/content/kinjal-dasbiswas",
			email: "kdasbiswas@ucmerced.edu",
			department: "Department of Physics, CCBM",
			institution: "School of Natural Sciences, University of California Merced",
		},
	],
};
