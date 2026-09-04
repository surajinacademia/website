import type { ResourceCategory } from "./resources";

export interface ResourceCategoryImage {
	src: string;
	width: number;
	height: number;
	artworkTitle: string;
	date: string;
	creditName: string;
	sourceUrl: string;
	licenseName: string;
	licenseUrl: string;
	modificationNote?: string;
	position?: string;
}

export const resourceCategoryImages: Record<ResourceCategory["slug"], ResourceCategoryImage> = {
	mcps: {
		src: "/images/resources/mcps-mondrian-lozenge.webp",
		width: 1200,
		height: 1200,
		artworkTitle: "Lozenge Composition with Yellow, Black, Blue, Red, and Gray",
		date: "1921",
		creditName: "Piet Mondrian",
		sourceUrl: "https://www.artic.edu/artworks/109819",
		licenseName: "Public domain",
		licenseUrl: "https://www.artic.edu/open-access/open-access-images",
	},
	skills: {
		src: "/images/resources/skills-art-alphonse-legros-studies-of-hands.webp",
		width: 1200,
		height: 840,
		artworkTitle: "Studies of Hands",
		date: "1880–92",
		creditName: "Alphonse Legros",
		sourceUrl: "https://www.metmuseum.org/art/collection/search/337602",
		licenseName: "Public domain",
		licenseUrl: "https://www.metmuseum.org/hubs/open-access",
	},
	tools: {
		src: "/images/resources/tools-petrus-christus-goldsmith.webp",
		width: 1041,
		height: 1200,
		artworkTitle: "A Goldsmith in his Shop",
		date: "1449",
		creditName: "Petrus Christus",
		sourceUrl: "https://www.metmuseum.org/art/collection/search/459052",
		licenseName: "Public domain",
		licenseUrl: "https://www.metmuseum.org/about-the-met/policies-and-documents/image-resources",
	},
	"how-to": {
		src: "/images/resources/how-to-art-fragonard-young-girl-reading.webp",
		width: 954,
		height: 1200,
		position: "50% 30%",
		artworkTitle: "Young Girl Reading",
		date: "c. 1769",
		creditName: "Jean Honoré Fragonard",
		sourceUrl: "https://www.nga.gov/artworks/46303-young-girl-reading",
		licenseName: "Public domain",
		licenseUrl:
			"https://www.nga.gov/terms-and-notices#open-access-policy-for-images-of-works-of-art-presumed-in-the-public-domain",
	},
};
