<script>
	export let text;
</script>

<div class="flex h-full items-start justify-center bg-transparent">
	{#each text as char}
		<div class="-top-30 relative">
			<p
				class="font-aoeu text-stroke-white text-stroke-2 relative top-32 scale-105 text-center text-9xl text-transparent">
				{char}
			</p>
			<p class="font-aoeu text-shadow-lg my-shadow z-0 text-9xl text-indigo-500">
				{char}
			</p>
		</div>
	{/each}
</div>

<style>
	.my-shadow {
		text-shadow: 0 0 0.1em blue;
	}
</style>
