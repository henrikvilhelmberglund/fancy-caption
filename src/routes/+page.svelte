<script>
	import { afterUpdate } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import FancyCaption from "$lib/FancyCaption.svelte";
</script>

<main class="[&>*]:m-4">
  <FancyCaption>こんにちは</FancyCaption>
</main>

<Footer />

<style>
</style>
