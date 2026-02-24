<script lang="ts">
	import { activeSection } from '$lib/stores/activeSection';
	import { NavLink } from '$lib/components/ui/nav-link';

	// Secciones de la landing - enlaces ancla para scroll
	const navItems = [
		{ href: '#hero', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<nav
	class="sticky top-0 z-10 flex flex-wrap items-center justify-center gap-4 border-b border-nyvex-border bg-nyvex-bg-secondary px-4 py-3 sm:gap-6 sm:justify-start sm:px-6 sm:py-4 lg:px-8"
>
	{#each navItems as item}
		<NavLink
			href={item.href}
			label={item.label}
			active={$activeSection === item.href.slice(1)}
		/>
	{/each}
</nav>
