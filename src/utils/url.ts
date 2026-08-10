/**
 * Accept only absolute web URLs before remote metadata reaches an href or image source.
 * Returns a normalized URL so callers can use a null result as an inert fallback.
 */
export function getSafeExternalUrl(value: unknown): string | null {
	if (typeof value !== "string" || value.length === 0 || value.length > 2048) return null;

	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
	} catch {
		return null;
	}
}
