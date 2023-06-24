// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from "svelte-preprocess";
// import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import UnoCSS from "@unocss/svelte-scoped/preprocess";


const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		UnoCSS(),
	],
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "shift",
			holdMode: true,
		},
	},
};

export default config;
