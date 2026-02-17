/**
 * Resources page content. Edit here to change what appears on /resources/
 */

export const resourcesPage = {
	intro: "A curated collection of useful resources, tools, and references.",

	sections: [
		{
			title: "Research Tools",
			links: [{ label: "Google Scholar", href: "https://scholar.google.com", description: "Academic research database" }],
		},
		{
			title: "Computational Resources",
			links: [{ label: "GitHub", href: "https://github.com", description: "Code repository and collaboration" }],
		},
	],

	footerNote: "More resources will be added soon. Check back later!",
} as const;
