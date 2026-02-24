<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Nav } from '$lib/components/layouts/nav';

	// children es un snippet de Svelte 5 - el contenido de cada página
	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />
{@render children()}
