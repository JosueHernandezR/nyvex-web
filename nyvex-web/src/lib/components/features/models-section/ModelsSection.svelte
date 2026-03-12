<script lang="ts">
	import { t } from '$lib/i18n';

	const modelsMeta = [
		{
			key: 'llama' as const,
			name: 'Llama 3.1',
			logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARsAMWyRIb2GIeJsiay6BcQsatF_EgP5HWEzQfaYnhvukStZlFHbOAgkr4HvMNSN8JrrOJzmyH_ClUHQ16Yx8yY_95M4fEB4IM3yF3cbmcskO0xSrFPqbHXCb16mtvJd50qfF_9fkqs9CEEmaH6Ah8hiKob2Xzu0XgL2FRNI7WrQDzkRlkopYm0YorXY1Ckk1iSdoxVKz4qKKDvfnc8GLzqk4FUEZv1SVyVHXvVC-wIRn1wbiKnyLfrcGzeEfs6EypUL8YZbPutZ7p',
			hoverShadow: 'hover:shadow-nyvex-primary/10',
			hoverBorder: 'hover:border-nyvex-primary/20',
			btnHover: 'group-hover:bg-nyvex-primary group-hover:text-nyvex-bg-primary'
		},
		{
			key: 'phi' as const,
			name: 'Phi-3 Mini',
			logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJicXXSY0Yug41PPMnXIQ7wsQV2gOgg6pu4ljJtmnGeCM5PdcI2F4BkpSKRhw7FX52b0NDd-r2jcdZE8P-b2TO9tZQx6CYVWMmYepk99nskiTQwH-C8D_2H7iPfElkDDxYQed4kxPiO-47UFL8DADltCRlDSEOzNPuNQil3RedbDPoKOeB3HUT6-8JXamWhueUQyRlg8Lp3cjUlyXzC6ho8WAm1_xpyaVfCQZwibN_DN6lhMMOncCYiajAsOOFjfnZy-xsjyR6w51N',
			hoverShadow: 'hover:shadow-nyvex-secondary/10',
			hoverBorder: 'hover:border-nyvex-secondary/20',
			btnHover: 'group-hover:bg-nyvex-secondary group-hover:text-white'
		},
		{
			key: 'gemma' as const,
			name: 'Gemma 2',
			logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApoiIjBc8GBdwZCxNLuevuBuzNLYdgQ_t1dfYJEuQy6qgYXWpUY6VcGliyZzG_Sm29dy5NXyPr3B9J5w1c_dljBu5dSbjjw9O53MYkhtBPbPb0XKEqrhYLnQ1VJGzxZ3elNG4pqhAET9BquG5jSzStBPZmBk1URl-1mtAasL591z5yMYbueVZz2vwXbX6jO7ccfTt_0M6qJU6LKbTefIocNj7Nmv8_SaIk6304151cB00MnOmMo3RshXVMGQkw9dIyeoFX3Ve0ovMJ',
			hoverShadow: 'hover:shadow-slate-400/10',
			hoverBorder: 'hover:border-nyvex-on-surface-faint/30',
			btnHover: 'group-hover:bg-nyvex-on-surface-faint/30 group-hover:text-nyvex-on-surface'
		}
	];
</script>

<section id="models" data-section="models" class="mx-auto max-w-6xl px-6 py-20 md:py-32">
	<div
		class="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end md:gap-8"
	>
		<div class="max-w-xl">
			<h2
				class="mb-4 font-satoshi text-3xl font-bold leading-tight text-nyvex-on-surface sm:text-4xl md:mb-6 md:text-5xl"
			>
				{$t.models.title}
			</h2>
			<p class="text-lg text-nyvex-on-surface-muted sm:text-xl">
				{$t.models.subtitle}
			</p>
		</div>
		<button
			class="group flex items-center gap-2 font-bold text-nyvex-on-surface transition-all hover:gap-4"
		>
			{$t.models.viewAll}
			<span class="material-symbols-outlined">arrow_forward</span>
		</button>
	</div>

	<div class="grid gap-6 sm:gap-8 md:grid-cols-3">
		{#each modelsMeta as model (model.key)}
			<div
				class="group relative rounded-4xl border border-transparent bg-white/40 p-1 transition-all hover:shadow-2xl dark:bg-white/5 sm:rounded-[2.5rem] {model.hoverShadow} {model.hoverBorder}"
			>
				<div class="glass flex h-full flex-col rounded-[1.8rem] p-8 sm:rounded-[2.2rem] sm:p-10">
					<div class="mb-8 flex items-start justify-between sm:mb-10">
						<img
							class="size-12 rounded-full grayscale transition-all group-hover:grayscale-0"
							alt="{model.name} AI engine logo"
							src={model.logo}
						/>
						<span
							class="rounded-full bg-nyvex-on-surface/5 px-3 py-1 text-xs font-bold text-nyvex-on-surface-muted"
						>
							{$t.models[model.key].tag}
						</span>
					</div>
					<h4 class="mb-2 font-satoshi text-2xl font-bold text-nyvex-on-surface sm:text-3xl">
						{model.name}
					</h4>
					<p class="mb-8 grow text-nyvex-on-surface-muted">
						{$t.models[model.key].description}
					</p>
					<button
						class="w-full rounded-2xl bg-nyvex-inverse-surface py-4 font-bold text-nyvex-on-inverse-surface transition-colors {model.btnHover}"
					>
						{$t.models.initEngine}
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>
