<script>
	import { afterUpdate } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import FancyCaption from "$lib/FancyCaption.svelte";
</script>

<main>
	<FancyCaption text={"こんにちは"} />
</main>
<form method="POST">
	<button>Render</button>
</form>
<Footer />

<style>
</style>
