<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section id="features" data-section="features" class="mx-auto max-w-6xl px-6 py-20 md:py-32">
	<div class="grid gap-6 sm:gap-8 md:grid-cols-3">
		<!-- Privacy -->
		<div
			class="glass group rounded-3xl border border-white/40 p-8 transition-all hover:border-nyvex-primary/30 dark:border-white/10 sm:p-10"
		>
			<div
				class="mb-6 flex size-14 items-center justify-center rounded-2xl bg-nyvex-primary/10 transition-transform group-hover:scale-110"
			>
				<span class="material-symbols-outlined text-3xl text-nyvex-primary">shield_lock</span>
			</div>
			<h3 class="mb-4 font-satoshi text-xl font-bold text-nyvex-on-surface sm:text-2xl">
				{$t.features.privacy.title}
			</h3>
			<p class="leading-relaxed text-nyvex-on-surface-muted">{$t.features.privacy.description}</p>
		</div>

		<!-- Independence -->
		<div
			class="glass group rounded-3xl border border-white/40 p-8 transition-all hover:border-nyvex-secondary/30 dark:border-white/10 sm:p-10"
		>
			<div
				class="mb-6 flex size-14 items-center justify-center rounded-2xl bg-nyvex-secondary/10 transition-transform group-hover:scale-110"
			>
				<span class="material-symbols-outlined text-3xl text-nyvex-secondary">dns</span>
			</div>
			<h3 class="mb-4 font-satoshi text-xl font-bold text-nyvex-on-surface sm:text-2xl">
				{$t.features.independence.title}
			</h3>
			<p class="leading-relaxed text-nyvex-on-surface-muted">
				{$t.features.independence.description}
			</p>
		</div>

		<!-- Zero Cost -->
		<div
			class="glass group rounded-3xl border border-white/40 p-8 transition-all hover:border-nyvex-on-surface-faint dark:border-white/10 sm:p-10"
		>
			<div
				class="mb-6 flex size-14 items-center justify-center rounded-2xl bg-nyvex-on-surface/10 transition-transform group-hover:scale-110"
			>
				<span class="material-symbols-outlined text-3xl text-nyvex-on-surface">token</span>
			</div>
			<h3 class="mb-4 font-satoshi text-xl font-bold text-nyvex-on-surface sm:text-2xl">
				{$t.features.zeroCost.title}
			</h3>
			<p class="leading-relaxed text-nyvex-on-surface-muted">
				{$t.features.zeroCost.description}
			</p>
		</div>
	</div>
</section>
