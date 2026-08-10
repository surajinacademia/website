import { WEBMENTION_API_KEY } from "astro:env/server";
import * as fs from "node:fs";
import type { WebmentionsCache, WebmentionsChildren, WebmentionsFeed } from "@/types";
import { getSafeExternalUrl } from "@/utils/url";

const DOMAIN = import.meta.env.SITE;
const CACHE_DIR = ".data";
const filePath = `${CACHE_DIR}/webmentions.json`;
const validWebmentionTypes = ["like-of", "mention-of", "in-reply-to"];
const MAX_WEBMENTION_PAGES = 100;

const hostName = new URL(DOMAIN).hostname;

function isWebmentionRecord(value: unknown): value is WebmentionsChildren {
	if (typeof value !== "object" || value === null) return false;

	const record = value as Partial<WebmentionsChildren>;
	const author = record.author;
	const content = record.content;

	return (
		typeof record["wm-id"] === "number" &&
		typeof record["wm-private"] === "boolean" &&
		typeof record["wm-property"] === "string" &&
		typeof record["wm-target"] === "string" &&
		typeof record.url === "string" &&
		(author === null ||
			(typeof author === "object" &&
				typeof author.name === "string" &&
				typeof author.photo === "string" &&
				typeof author.url === "string")) &&
		(content === undefined ||
			content === null ||
			(typeof content === "object" && typeof content.text === "string"))
	);
}

// Calls webmention.io api.
async function fetchWebmentions(timeFrom: string | null, perPage = 1000) {
	if (!DOMAIN) {
		console.warn("No domain specified. Please set in astro.config.ts");
		return null;
	}

	if (!WEBMENTION_API_KEY) {
		console.warn("No webmention api token specified in .env");
		return null;
	}

	const pageSize = Math.min(Math.max(Math.trunc(perPage), 1), 1000);
	const feed: WebmentionsFeed = {
		children: [],
		name: "Webmentions",
		type: "feed",
	};

	try {
		for (let page = 0; page < MAX_WEBMENTION_PAGES; page++) {
			const url = new URL("https://webmention.io/api/mentions.jf2");
			url.searchParams.set("domain", hostName);
			url.searchParams.set("token", WEBMENTION_API_KEY);
			url.searchParams.set("sort-by", "created");
			url.searchParams.set("sort-dir", "up");
			url.searchParams.set("per-page", String(pageSize));
			url.searchParams.set("page", String(page));
			if (timeFrom) url.searchParams.set("since", timeFrom);

			const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
			if (!res.ok) return null;

			const data: unknown = await res.json();
			if (
				typeof data !== "object" ||
				data === null ||
				!("children" in data) ||
				!Array.isArray(data.children)
			) {
				console.warn("Webmention API returned an invalid feed; using the local cache.");
				return null;
			}

			if (page === 0) {
				if ("name" in data && typeof data.name === "string") feed.name = data.name;
				if ("type" in data && typeof data.type === "string") feed.type = data.type;
			}

			feed.children.push(...data.children.filter(isWebmentionRecord));
			if (data.children.length < pageSize) return feed;
		}

		console.warn("Webmention feed exceeded the safe page limit; using the local cache.");
		return null;
	} catch {
		// Do not log the request object: its URL contains the server-only API token.
		console.warn("Unable to fetch webmentions; using the local cache.");
		return null;
	}
}

// Merge cached entries [a] with fresh webmentions [b], merge by wm-id
function mergeWebmentions(a: WebmentionsCache, b: WebmentionsFeed): WebmentionsChildren[] {
	return Array.from(
		[...a.children, ...b.children]
			.reduce((map, obj) => map.set(obj["wm-id"], obj), new Map())
			.values(),
	);
}

// filter out WebmentionChildren
export function filterWebmentions(webmentions: WebmentionsChildren[]) {
	return webmentions
		.filter(isWebmentionRecord)
		.filter((webmention) => {
			// Never cache or render records that the upstream service marks private.
			if (webmention["wm-private"] === true) return false;

			// Make sure the mention has a supported property so we can sort it later.
			if (!validWebmentionTypes.includes(webmention["wm-property"])) return false;

			// Make sure 'mention-of' or 'in-reply-to' has text content.
			if (
				webmention["wm-property"] === "mention-of" ||
				webmention["wm-property"] === "in-reply-to"
			) {
				return Boolean(webmention.content?.text);
			}

			return true;
		})
		.map((webmention) => ({
			...webmention,
			author: webmention.author
				? {
						...webmention.author,
						photo: getSafeExternalUrl(webmention.author.photo) ?? "",
						url: getSafeExternalUrl(webmention.author.url) ?? "",
					}
				: null,
			url: getSafeExternalUrl(webmention.url) ?? "",
		}));
}

// save combined webmentions in cache file
function writeToCache(data: WebmentionsCache) {
	const fileContent = JSON.stringify(data, null, 2);

	// create cache folder if it doesn't exist already
	if (!fs.existsSync(CACHE_DIR)) {
		fs.mkdirSync(CACHE_DIR, { recursive: true });
	}

	// Keep the build deterministic: finish the cache write before returning.
	fs.writeFileSync(filePath, fileContent);
	console.log(`Webmentions saved to ${filePath}`);
}

function getFromCache(): WebmentionsCache {
	if (fs.existsSync(filePath)) {
		try {
			const data: unknown = JSON.parse(fs.readFileSync(filePath, "utf-8"));
			if (
				typeof data === "object" &&
				data !== null &&
				"children" in data &&
				Array.isArray(data.children) &&
				"lastFetched" in data &&
				(data.lastFetched === null || typeof data.lastFetched === "string")
			) {
				return data as WebmentionsCache;
			}
		} catch {
			console.warn("Ignoring an invalid webmention cache.");
		}
	}
	// no cache found
	return {
		lastFetched: null,
		children: [],
	};
}

async function getAndCacheWebmentions() {
	const cached = getFromCache();
	const cache: WebmentionsCache = {
		...cached,
		children: filterWebmentions(cached.children),
	};

	// Purge any private or unsafe records left by an older build.
	if (JSON.stringify(cache.children) !== JSON.stringify(cached.children)) writeToCache(cache);

	// Take the cursor before requesting. Any overlap on the next build is safe because wm-id is deduplicated.
	const fetchStartedAt = new Date().toISOString();
	const mentions = await fetchWebmentions(cache.lastFetched);

	if (mentions) {
		const webmentions: WebmentionsCache = {
			lastFetched: fetchStartedAt,
			// Merge first so a fresh private record replaces and removes an older public copy.
			children: filterWebmentions(mergeWebmentions(cache, mentions)),
		};

		writeToCache(webmentions);
		return webmentions;
	}

	return cache;
}

let webMentions: WebmentionsCache;

export async function getWebmentionsForUrl(url: string) {
	if (!webMentions) webMentions = await getAndCacheWebmentions();

	// Defense in depth for an already-populated cache.
	return filterWebmentions(webMentions.children).filter((entry) => entry["wm-target"] === url);
}
