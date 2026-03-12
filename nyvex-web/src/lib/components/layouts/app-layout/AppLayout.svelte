<script lang="ts">
	import { onMount } from 'svelte';
	import { Nav } from '$lib/components/layouts/nav';
	import { theme } from '$lib/stores/theme';

	let { children }: { children: import('svelte').Snippet } = $props();

	onMount(() => theme.init());
</script>

<svelte:head>
	<title>NYVEX — The New Wave of Private AI</title>
</svelte:head>

<Nav />
{@render children()}
