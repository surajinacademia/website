/* Apply the requested or saved theme before the page is painted. */
(() => {
	const STORAGE_KEY = "site-theme";
	const isTheme = (value) => value === "light" || value === "dark";
	const getTheme = () => {
		const requestedTheme = new URL(window.location.href).searchParams.get("theme");
		if (isTheme(requestedTheme)) return requestedTheme;
		try {
			localStorage.removeItem("theme");
			const savedTheme = localStorage.getItem(STORAGE_KEY);
			if (isTheme(savedTheme)) return savedTheme;
		} catch {
			// Theme selection still works when storage is unavailable.
		}
		return "light";
	};

	const applyTheme = (theme, persist = false) => {
		document.documentElement.dataset.theme = theme;
		if (!persist) return;
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			// A storage failure does not prevent theme selection.
		}
	};

	applyTheme(getTheme());
	document.addEventListener("astro:after-swap", () => applyTheme(getTheme()));
	document.addEventListener("theme-change", (event) => {
		const theme = event.detail?.theme;
		if (!isTheme(theme)) return;
		applyTheme(theme, true);
		const url = new URL(window.location.href);
		if (url.searchParams.has("theme")) {
			url.searchParams.set("theme", theme);
			window.history.replaceState(null, "", url);
		}
	});
})();
