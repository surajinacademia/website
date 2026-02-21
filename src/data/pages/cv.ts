/**
 * CV page content derived from resume/resume.tex (condensed resume).
 * Keep in sync with resume.tex when that file is updated.
 */

export const cvPage = {
	pdfLinks: [
		{ label: "View CV (PDF)", href: "/cv.pdf" },
		{ label: "View Resume (PDF)", href: "/resume.pdf" },
	] as const,

	education: [
		{
			institution: "University of California Merced",
			institutionUrl: "https://physics.ucmerced.edu/content/suraj-sahu",
			period: "Jan 21 — present",
			role: "PhD Candidate, Physics | Advisor: Prof. Ajay Gopinathan, GPA: 3.84/4.00",
			location: "Merced, CA",
		},
		{
			institution: "National Institute of Technology Rourkela",
			period: "Aug 17 — May 19",
			role: "Master of Science in Physics",
			location: "Odisha, India",
		},
		{
			institution: "D.R. Nayapalli College, Utkal University",
			period: "Jul 14 — Jun 17",
			role: "Bachelor of Science (Honors in Physics)",
			location: "Odisha, India",
		},
	],

	skills: [
		{ category: "Programming Languages", items: "Python, Julia, LaTeX" },
		{
			category: "Computation",
			items:
				"Agent-Based Modeling, Numerical Simulations, Particle-Based Simulations, Reaction-Diffusion, Network Analysis, HPC",
		},
		{
			category: "AI",
			items:
				"AI-aided research workflow, Prompt and Context Management, Custom Agents, Skills, MCPs, Image Analysis Pipeline",
		},
		{ category: "Data Science", items: "Data analysis, Visualization" },
		{ category: "Tools", items: "NumPy, SciPy, NetworkX, ReaDDy, Git, GitHub" },
		{ category: "Software", items: "VS Code, Cursor, Copilot, Antigravity" },
	],

	publications: [
		{
			authors: "Sahu, S., M. Biswas",
			title:
				"Modeling protein association from homogeneous to mixed environments: A reaction-diffusion dynamics approach.",
			journal: "Journal of Molecular Graphics and Modeling",
			vol: "vol. 107, pp. 107936 (2021)",
			url: "https://doi.org/10.1016/j.jmgm.2021.107936",
		},
	],

	experience: [
		{
			role: "Graduate Research Assistant, Gopinathan Group, UC Merced",
			orgUrl: "http://gopinathanlab.ucmerced.edu",
			period: "Jan 21 — present",
			items: [
				"Agent-based modeling of Vascular Network formation and remodeling",
				"Mechanobiology of Cell-Cell junctions",
				"ECM compaction (with Dasbiswas Lab)",
				"Developed Cellpose-MCP to connect AI agents (Claude, Cursor) to Cellpose for cell segmentation.",
				"Numerical and particle-based simulations; reaction-diffusion and spatial network models.",
			],
		},
		{
			role: "Graduate Teaching Assistant",
			org: "Department of Physics, UC Merced",
			orgUrl: "https://physics.ucmerced.edu",
			period: "Jan 21 — present",
			location: "Merced, CA",
			items: [
				"Teaching assistant for introductory physics (labs, discussions) and upper-division courses.",
				"Organized workshops on AI tools for research and data analysis; advocate for ethical AI in pedagogy.",
			],
		},
		{
			role: "Graduate Student Researcher",
			org: "Computational Biophysics Group, NIT Rourkela",
			orgUrl: "https://sites.google.com/view/biomoldyn/",
			period: "Aug 17 — May 19",
			location: "Odisha, India",
			items: [
				"Coarse-grained reaction-diffusion (ReaDDy) modeling of macromolecular crowding effects on protein association.",
				"Dynamics of Indian languages and language competition using nonlinear dynamical models.",
			],
		},
		{
			project: "Cellpose-MCP",
			projectUrl: "https://github.com/Cellpose/Cellpose-MCP",
			tech: "Python, MCP, Cellpose",
			period: "Jan 21 — present",
			items: [
				"MCP server connecting AI agents (Claude, Cursor) to Cellpose for cell segmentation; enables agentic image analysis workflows.",
			],
		},
		{
			project: "Agent-based modeling of Vasculogenesis",
			projectUrl: "https://meetings.aps.org/Meeting/MAR22/Session/Z03.3",
			tech: "Julia, Python (with Sindi Lab, McCloskey Lab)",
			period: "Jan 21 — present",
			items: [
				"Agent-based network dynamics model for vascular network formation and remodeling; quantifying functionality, resilience and adaptability of transport networks.",
			],
		},
		{
			project: "Compaction of ECM by Multicellular Networks",
			tech: "Python (with Dasbiswas Lab)",
			period: "Oct 24 — present",
			items: [
				"Computational modeling of collagen matrix compaction and remodeling due to contractile forces by fibroblast networks.",
			],
		},
	],

	leadership: [
		{
			role: "Member",
			org: "Trainee Leadership Council, CEMB",
			orgUrl: "https://cemb.upenn.edu/members/professional-development-and-training-opportunities/",
			period: "Aug 23 — Aug 25",
			items: [
				"Planning and organizing tutorials, research presentations, and professional development workshops for graduate students.",
			],
		},
		{
			role: "President",
			org: "Graduate Biophysics Club",
			orgUrl: "https://sites.google.com/view/biophysics-graduate-club/home",
			period: "Jun 21 — Jun 23",
			items: [
				"Led science outreach events, journal club discussions in biophysics, and professional development workshops.",
			],
		},
		{
			role: "Peer Mentor",
			org: "GradExcel Peer Mentor",
			orgUrl: "https://graduatedivision.ucmerced.edu/PMP",
			period: "Aug 24 — Aug 25",
			items: ["Mentored graduate students on personal well-being and professional development."],
		},
	],

	coursework: [
		"Classical Mechanics",
		"Electrodynamics",
		"Statistical Mechanics",
		"Quantum Mechanics",
		"Non-linear Dynamics and Chaos",
		"Condensed Matter Theory",
		"Cell and Cellular Techniques",
		"Basic Biophysics",
		"Computational Physics",
		"Machine Learning & Statistics",
	],
} as const;
