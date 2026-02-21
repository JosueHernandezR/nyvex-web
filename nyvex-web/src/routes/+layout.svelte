<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<nav
	class="flex gap-6 p-4 border-b border-nyvex-border bg-nyvex-bg-secondary"
>
	<a
		href="/"
		class="text-nyvex-text-primary hover:text-nyvex-primary transition-colors"
		>Home</a
	>
	<a
		href="/about"
		class="text-nyvex-text-secondary hover:text-nyvex-primary transition-colors"
		>About</a
	>
	<a
		href="/settings"
		class="text-nyvex-text-secondary hover:text-nyvex-primary transition-colors"
		>Settings</a
	>
</nav>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
