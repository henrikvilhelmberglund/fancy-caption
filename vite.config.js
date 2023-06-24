import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "@unocss/svelte-scoped/vite";

import { defineConfig } from "vite";
export default defineConfig({
	plugins: [
		UnoCSS({
			// injectReset: '@unocss/reset/normalize.css', // see type definition for all included reset options or how to pass in your own
			// ...other Svelte Scoped options
		}),
		sveltekit(),
	],
});
