import { browser } from "$app/environment";
import { get } from "svelte/store";
import { activeTheme, preferredMode } from "./stores";
export function activateTheme(theme, override) {
	if (browser) {
		if (!override) {
			activeTheme.set(theme);
		} else {
			activeTheme.set(override);
		}

		document.documentElement.classList = "";

		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			if (!get(preferredMode)) {
				preferredMode.set("dark");
			}
		}
		if (get(preferredMode) === "dark") {
			// dark mode
			// console.log("I am dark mode");
			activeTheme.set(get(activeTheme) + "Dark");
			document.documentElement.classList.add(get(activeTheme));
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add(get(activeTheme));
			document.documentElement.classList.add("light");
		}
		return get(activeTheme);
	}
}
