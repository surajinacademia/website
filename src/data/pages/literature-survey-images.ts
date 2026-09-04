export interface LiteratureSurveyImage {
	src: string;
	width: number;
	height: number;
	alt: string;
	caption: string;
	creditName: string;
	sourceUrl: string;
	licenseName: string;
	licenseUrl: string;
	modificationNote?: string;
	placement: string;
}

export const literatureSurveyImages: LiteratureSurveyImage[] = [
	{
		src: "/images/how-to/literature-survey/investigation-board-cottonbro.webp",
		width: 1800,
		height: 1200,
		alt: "A man in a suit studies photographs, notes, maps, and red threads on an investigation board.",
		caption: "Following the connections between clues. A staged detective scene.",
		creditName: "cottonbro studio / Pexels",
		sourceUrl:
			"https://www.pexels.com/photo/detective-at-a-investigation-board-running-through-leads-8371732/",
		licenseName: "Pexels License",
		licenseUrl: "https://www.pexels.com/license/",
		placement: "hero",
	},
	{
		src: "/images/how-to/literature-survey/seattle-detectives-1900s.jpg",
		width: 768,
		height: 631,
		alt: "Seattle Police Department detectives pose outdoors in coats and hats in the early 1900s.",
		caption: "The detectives. Seattle Police Department, circa 1900–1910.",
		creditName: "University of Washington Special Collections",
		sourceUrl:
			"https://commons.wikimedia.org/wiki/File:Detectives_of_the_Seattle_Police_Department,_probably_between_1900_and_1910_(SEATTLE_995).jpg",
		licenseName: "Public domain (U.S.)",
		licenseUrl: "https://commons.wikimedia.org/wiki/Template:PD-US-expired",
		placement: "the-plot",
	},
	{
		src: "/images/how-to/literature-survey/evidence-room-1922.jpg",
		width: 700,
		height: 563,
		alt: "A Seattle police staff member checks tagged firearms and other evidence in a property room around 1922.",
		caption: "Keeping track of the evidence. Seattle police property room, circa 1922.",
		creditName: "Webster & Stevens / MOHAI",
		sourceUrl:
			"https://commons.wikimedia.org/wiki/File:Firearms_and_other_weapons_in_the_police_department_property_room_,_ca_1922_(MOHAI_5429).jpg",
		licenseName: "Public domain (U.S.)",
		licenseUrl: "https://commons.wikimedia.org/wiki/Template:PD-US-expired",
		placement: "evidence-room",
	},
	{
		src: "/images/how-to/literature-survey/forensics-lab-bgsu.webp",
		width: 1800,
		height: 1350,
		alt: "Microscopes, computers, analytical instruments, and workbenches fill a forensic science laboratory at Bowling Green State University.",
		caption:
			"A space to examine the evidence. Bowling Green State University forensic laboratory, 2020.",
		creditName: "Mbrickn / Wikimedia Commons",
		sourceUrl: "https://commons.wikimedia.org/wiki/File:Forensics_Lab.jpg",
		licenseName: "CC BY 4.0",
		licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
		modificationNote: "Resized and converted to WebP.",
		placement: "forensics",
	},
];
