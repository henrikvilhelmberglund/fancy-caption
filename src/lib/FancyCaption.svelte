<script>
	export let text;
</script>

<div class="flex h-screen items-center justify-center bg-slate-400">
	{#each text as char, i}
		<div class="relative">
			<p class="text-stroke-4 relative top-32 text-stroke-white font-aoeu text-9xl scale-105 text-center text-transparent">{char}</p>
			<p class="text-stroke-4 text-stroke-black font-aoeu text-9xl text-indigo-500">
				{char}
			</p>
		</div>
	{/each}
</div>

<style>
</style>
