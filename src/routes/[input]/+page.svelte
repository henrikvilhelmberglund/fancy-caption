<script>
	import FancyCaption from "$lib/FancyCaption.svelte";
	import { page } from "$app/stores";

	const text = $page.params.input;
</script>

<main>
	<FancyCaption {text} />
</main>
<form method="POST">
	<button>Render</button>
</form>

<!-- <Footer /> -->

<style>
</style>
