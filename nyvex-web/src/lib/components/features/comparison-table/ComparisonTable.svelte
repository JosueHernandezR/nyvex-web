<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section id="comparison" data-section="comparison" class="mx-auto max-w-5xl px-6 py-20">
	<div class="mb-10 text-center sm:mb-16">
		<h2 class="mb-4 font-satoshi text-3xl font-bold text-nyvex-on-surface sm:text-4xl">
			{$t.comparison.title}
		</h2>
		<p class="text-nyvex-on-surface-muted">
			{$t.comparison.subtitle}
		</p>
	</div>

	<!-- Mobile: stacked comparison cards -->
	<div class="flex flex-col gap-4 md:hidden">
		{#each $t.comparison.rows as row (row.feature)}
			<div class="glass rounded-2xl border border-white/60 p-5 dark:border-white/10">
				<p class="mb-3 text-xs font-medium uppercase tracking-wider text-nyvex-on-surface-faint">
					{row.feature}
				</p>
				<div class="grid grid-cols-2 gap-3">
					<div class="rounded-xl bg-nyvex-primary/10 px-4 py-3">
						<p class="mb-1 text-[10px] font-bold uppercase tracking-wider text-nyvex-primary">
							NYVEX
						</p>
						<p class="text-sm font-semibold text-nyvex-on-surface">{row.nyvex}</p>
					</div>
					<div class="rounded-xl bg-nyvex-on-surface/5 px-4 py-3">
						<p
							class="mb-1 text-[10px] font-bold uppercase tracking-wider text-nyvex-on-surface-faint"
						>
							Cloud
						</p>
						<p class="text-sm text-nyvex-on-surface-muted">{row.cloud}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Desktop: classic table -->
	<div
		class="glass hidden overflow-hidden rounded-4xl border border-white/60 shadow-xl dark:border-white/10 md:block"
	>
		<table class="w-full border-collapse text-left">
			<thead>
				<tr class="bg-white/50 dark:bg-white/5">
					<th
						class="p-8 text-sm font-medium uppercase tracking-wider text-nyvex-on-surface-faint"
					>
						{$t.comparison.feature}
					</th>
					<th class="p-8">
						<span
							class="flex items-center gap-2 font-satoshi text-xl font-bold text-nyvex-primary"
						>
							<span class="material-symbols-outlined">auto_awesome</span>
							{$t.comparison.nyvexLocal}
						</span>
					</th>
					<th class="p-8 font-satoshi text-xl font-bold text-nyvex-on-surface-faint">
						{$t.comparison.cloudAi}
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-nyvex-outline-dim">
				{#each $t.comparison.rows as row (row.feature)}
					<tr>
						<td class="p-8 font-medium text-nyvex-on-surface-variant">
							{row.feature}
						</td>
						<td class="p-8 font-semibold text-nyvex-on-surface">
							{row.nyvex}
						</td>
						<td class="p-8 text-nyvex-on-surface-muted">
							{row.cloud}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
