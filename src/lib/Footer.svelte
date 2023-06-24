<script>
	import { browser } from "$app/environment";
	import { base } from "$app/paths";
	import { onMount, onDestroy } from "svelte";
	import { fade } from "svelte/transition";
	let show = false;

	function handleScroll() {
		const scrollPosition = window.scrollY;
		const windowHeight = window.innerHeight;
		const offset = 200;
		const fullHeight = document.body.clientHeight;
		if (scrollPosition + windowHeight + offset > fullHeight) {
			show = true;
		} else {
			show = false;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener("scroll", handleScroll);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener("scroll", handleScroll);
		}
	});
</script>

{#if show}
	<footer>
		<a
			transition:fade
			class="underline-blue-600 fixed bottom-2 right-4 text-black underline hover:text-blue-600 dark:text-white dark:hover:text-blue-600"
			href="https://github.com/henrikvilhelmberglund">
			made by <img
				class="inline w-6"
				src="{base}/Henrik.png"
				alt="avatar" />henrikvilhelmberglund</a>
	</footer>
{/if}
