<script lang="ts">
	import { onMount } from 'svelte';
	import { activeSection } from '$lib/stores/activeSection';
	import {
		HeroSection,
		FeaturesGrid,
		ComparisonTable,
		ModelsSection,
		CtaBanner
	} from '$lib/components/features';
	import { SiteFooter } from '$lib/components/layouts';

	onMount(() => {
		const sections = document.querySelectorAll('section[data-section]');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection.set(entry.target.getAttribute('data-section') ?? 'hero');
						break;
					}
				}
			},
			{ rootMargin: '-20% 0px -60% 0px', threshold: 0 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});
</script>

<main class="relative overflow-hidden">
	<HeroSection />
	<FeaturesGrid />
	<ComparisonTable />
	<ModelsSection />
	<CtaBanner />
</main>

<SiteFooter />
