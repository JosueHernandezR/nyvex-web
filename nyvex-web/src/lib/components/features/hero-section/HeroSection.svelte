<script lang="ts">
	import { t } from '$lib/i18n';

	const HERO_IMAGE =
		'https://lh3.googleusercontent.com/aida-public/AB6AXuDWmQg63C5OekPPXBzK4D8DtM7vfonvSDfp5Y9panwJdEKQq9iaPw3NNZURgHmWyUhpKhU0MHt_-PuAWuf_vDd1snP1gibQKDeX0aR7y88Q0yAffshArcpyc4l5Cw4okJL-IEjDYON1oWZQ4spAC1wOY4a5UIBrOmaEE9uDnQlei3jvcplAT12VN3jkdinc0aFAOs7BIwgqUNWh0H0SIGUdcNHqzJiScqeGcEGUK2Fm8TWw48Ch5QVY12rNBTBkrBdkboCiV-rohCbp';
</script>

<section id="hero" data-section="hero" class="relative overflow-hidden px-6 pt-32 pb-20">
	<div class="hero-glow top-0 left-1/2 -translate-x-1/2"></div>

	<div class="mx-auto flex max-w-6xl flex-col items-center text-center">
		<div
			class="glass mb-8 inline-flex items-center gap-2 rounded-full border border-nyvex-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-nyvex-on-surface-muted"
		>
			<span class="size-2 animate-pulse rounded-full bg-nyvex-primary"></span>
			{$t.hero.badge}
		</div>

		<h1
			class="mb-8 max-w-4xl font-satoshi text-4xl font-bold leading-[0.9] tracking-tighter text-nyvex-on-surface sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
		>
			{$t.hero.headline} <span class="text-gradient">{$t.hero.headlineHighlight}</span>
		</h1>

		<p class="mb-12 max-w-2xl text-lg leading-relaxed text-nyvex-on-surface-muted sm:text-xl">
			{$t.hero.description}
		</p>

		<div class="mb-16 flex flex-col gap-4 sm:mb-20 sm:flex-row">
			<button
				class="rounded-2xl bg-nyvex-primary px-8 py-4 font-bold text-nyvex-bg-primary shadow-2xl shadow-nyvex-primary/30 transition-all hover:-translate-y-1 hover:bg-nyvex-primary/90 active:scale-95 sm:px-10 sm:py-5"
			>
				{$t.hero.ctaPrimary}
			</button>
			<button
				class="glass rounded-2xl border border-nyvex-outline px-8 py-4 font-bold text-nyvex-on-surface-variant transition-all hover:bg-(--_nyvex-glass-hover) sm:px-10 sm:py-5"
			>
				{$t.hero.ctaSecondary}
			</button>
		</div>

		<div class="group relative w-full max-w-5xl">
			<div
				class="absolute inset-0 bg-linear-to-tr from-nyvex-primary/20 to-nyvex-secondary/20 opacity-30 blur-3xl transition-opacity group-hover:opacity-50"
			></div>
			<div
				class="glass relative overflow-hidden rounded-3xl border border-white/60 p-4 shadow-2xl dark:border-white/10"
			>
				<div
					class="relative h-[280px] w-full overflow-hidden rounded-2xl bg-nyvex-surface-alt sm:h-[360px] md:h-[440px] lg:h-[500px]"
				>
					<img
						class="h-full w-full object-cover"
						alt="High-fidelity 3D abstract visualization of a glowing AI neural core"
						src={HERO_IMAGE}
					/>
					<div
						class="pointer-events-none absolute inset-0 bg-linear-to-t from-nyvex-surface/40 to-transparent"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>
