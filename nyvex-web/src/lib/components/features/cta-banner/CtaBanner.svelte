<script lang="ts">
	import { t } from '$lib/i18n';

	const CUBE_IMAGE =
		'https://lh3.googleusercontent.com/aida-public/AB6AXuCXcRN_BNZUoPpRsPmDRqxxHn3sW8a40bpBaYJrwbg_57LuaNqnQwkpal_5aCD1TMPikWSY9Cz-Ju5R5-irBtSzxonsyFnQYBIj1bImP6arNGfpdfwWFLExGoFG7ppk7cZ54lrL0rD7r3jhdJbS9MQNhqQJXdVmufSGNyMShc0_EOOwLx8QrkrXpnwFOY9nvIeBBtIxBKL696R2G5vbkKvSqrwCkMesUx4UIFRFGpH38rAcVoXHTDO7iP7nY2WA_SHJs3tzo-TjCMk4';
</script>

<section id="cta" data-section="cta" class="mx-auto max-w-6xl px-4 py-20 sm:px-10">
	<div
		class="glass relative flex flex-col items-center justify-between overflow-hidden rounded-4xl border border-white/60 p-8 dark:border-white/10 sm:rounded-[3rem] sm:p-12 md:flex-row md:p-16"
	>
		<div
			class="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-nyvex-primary/10 to-transparent"
		></div>

		<div class="relative z-10 max-w-lg">
			<h2
				class="mb-4 font-satoshi text-3xl font-bold text-nyvex-on-surface sm:mb-6 sm:text-4xl md:text-5xl"
			>
				{$t.cta.title}
			</h2>
			<p class="mb-8 text-base text-nyvex-on-surface-variant sm:mb-10 sm:text-lg">
				{$t.cta.description}
			</p>
			<div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
				<button
					class="rounded-2xl bg-nyvex-inverse-surface px-6 py-3.5 font-bold text-nyvex-on-inverse-surface transition-colors hover:opacity-90 sm:px-8 sm:py-4"
				>
					{$t.cta.download}
				</button>
				<button
					class="rounded-2xl border border-nyvex-outline px-6 py-3.5 font-bold text-nyvex-on-surface transition-all hover:bg-(--_nyvex-glass-hover) sm:px-8 sm:py-4"
				>
					{$t.cta.discord}
				</button>
			</div>
		</div>

		<div class="relative mt-10 md:mt-0">
			<div
				class="size-48 animate-pulse rounded-full bg-linear-to-tr from-nyvex-primary to-nyvex-secondary opacity-20 blur-3xl sm:size-64"
			></div>
			<img
				class="absolute inset-0 m-auto size-36 object-contain sm:size-48"
				alt="Futuristic floating neural core cube"
				src={CUBE_IMAGE}
			/>
		</div>
	</div>
</section>
