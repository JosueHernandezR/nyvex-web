<script lang="ts">
	import { t } from '$lib/i18n';

	const FOOTER_LOGO =
		'https://lh3.googleusercontent.com/aida-public/AB6AXuDDnJD088eWPDkSsRXIB8CizV6K-GYOT_fxyFmkZm7GwI9PkLH8gr3gIzR8xBENawoTm6ttIjVWdS68FKCEcg_OU821T9MJc6Xjhs9WaSoCKd9ZlO0afSL14QpHARwMPHZ2I92sz-Lx1lRLt0hiX5jm_1bw4iJzU-KWtLNBb8MrhCaabqAtv45ub5FbbuTV5LVegFgLiD1fL2HI_s-x9Mugd3fKW2I6CQa5BhPRtMGWh_8bjdwMJK1QsNLsEsEHIwJdLPb25_oS8ffz';
</script>

<footer class="mx-auto max-w-6xl border-t border-nyvex-outline-dim px-6 py-12 sm:py-20">
	<div class="mb-12 grid gap-10 sm:mb-20 sm:gap-12 md:grid-cols-4">
		<div class="col-span-1 md:col-span-3">
			<div class="mb-6 flex items-center gap-3">
				<img class="size-8" alt="NYVEX logo" src={FOOTER_LOGO} />
				<span class="font-satoshi text-2xl font-bold tracking-tighter text-nyvex-on-surface">
					NYVEX
				</span>
			</div>
			<p class="max-w-sm leading-relaxed text-nyvex-on-surface-faint">
				{$t.footer.tagline}
			</p>
		</div>

		<div class="col-span-1">
			<h5 class="mb-4 font-bold text-nyvex-on-surface sm:mb-6">{$t.footer.project}</h5>
			<ul class="space-y-3 text-nyvex-on-surface-muted sm:space-y-4">
				{#each $t.footer.projectLinks as label (label)}
					<!-- svelte-ignore a11y_invalid_attribute -->
					<li><a class="transition-colors hover:text-nyvex-primary" href="#">{label}</a></li>
				{/each}
			</ul>
		</div>

		<!-- <div>
			<h5 class="mb-4 font-bold text-nyvex-on-surface sm:mb-6">{$t.footer.community}</h5>
			<ul class="space-y-3 text-nyvex-on-surface-muted sm:space-y-4">
				{#each $t.footer.communityLinks as label (label)} -->
		<!-- svelte-ignore a11y_invalid_attribute -->
		<!-- <li><a class="transition-colors hover:text-nyvex-primary" href="#">{label}</a></li>
				{/each}
			</ul>
		</div> -->
	</div>

	<div
		class="flex flex-col items-center justify-between gap-4 border-t border-nyvex-outline-dim pt-8 text-sm text-nyvex-on-surface-faint md:flex-row"
	>
		<p>{$t.footer.copyright}</p>
		<!-- svelte-ignore a11y_invalid_attribute -->
		<!-- <div class="flex gap-8">
			<a href="#">{$t.footer.status}</a>
			<a href="#">{$t.footer.legal}</a>
			<a href="#">{$t.footer.cookies}</a>
		</div> -->
	</div>
</footer>
