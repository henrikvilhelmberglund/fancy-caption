<script>
	export let text;
</script>

<div class="flex h-screen items-center justify-center bg-slate-400">
	{#each text as char, i}
		<div class="relative">
			<p
				class="text-stroke-white text-stroke-4 font-aoeu relative top-32 scale-105 text-center text-9xl text-transparent">
				{char}
			</p>
			<p class="text-stroke-5 text-stroke-black font-aoeu z-0 text-9xl text-indigo-500">
				{char}
			</p>
		</div>
	{/each}
</div>

<style>
</style>
