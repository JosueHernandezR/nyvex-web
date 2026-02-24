<script lang="ts">
	import { onMount } from 'svelte';
	import { activeSection } from '$lib/stores/activeSection';

	// Scroll spy: detecta qué sección está visible al hacer scroll
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

<!-- Hero -->
<section
	id="hero"
	data-section="hero"
	class="scroll-mt-14 flex min-h-[60vh] flex-col justify-center px-4 py-12 sm:min-h-[70vh] sm:px-6 sm:py-16 md:min-h-[80vh] md:px-8 lg:px-12 lg:py-20 xl:px-16"
>
	<div class="mx-auto w-full max-w-7xl">
		<h1 class="display-hero-responsive">Welcome to Nyvex</h1>
		<p class="mt-4 text-base text-nyvex-text-secondary sm:text-lg md:mt-6">
			Powerful by <a href="https://svelte.dev/docs/kit" class="text-nyvex-primary hover:underline">svelte.dev</a>
		</p>
	</div>
</section>

<!-- About -->
<section
	id="about"
	data-section="about"
	class="scroll-mt-14 flex min-h-[60vh] flex-col justify-center px-4 py-12 sm:min-h-[70vh] sm:px-6 sm:py-16 md:min-h-[80vh] md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16"
>
	<div class="mx-auto w-full max-w-7xl">
		<h2 class="section-headline-responsive">About</h2>
		<p class="mt-4 max-w-2xl text-base text-nyvex-text-secondary sm:text-lg md:mt-6">
			Información sobre Nyvex y lo que hacemos.
		</p>
	</div>
</section>

<!-- Contact -->
<section
	id="contact"
	data-section="contact"
	class="scroll-mt-14 flex min-h-[60vh] flex-col justify-center px-4 py-12 sm:min-h-[70vh] sm:px-6 sm:py-16 md:min-h-[80vh] md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16"
>
	<div class="mx-auto w-full max-w-7xl">
		<h2 class="section-headline-responsive">Contact</h2>
		<p class="mt-4 max-w-2xl text-base text-nyvex-text-secondary sm:text-lg md:mt-6">
			Ponte en contacto con nosotros.
		</p>
	</div>
</section>
