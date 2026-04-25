<script lang="ts">
	import { t, locale, localeLabel, LOCALES, LOCALE_NAMES } from '$lib/i18n';
	import type { Locale } from '$lib/i18n';
	import { theme } from '$lib/stores/theme';

	const LOGO_SRC =
		'https://lh3.googleusercontent.com/aida-public/AB6AXuAI7t1aOtJPkm0pW7u_idNjs_06boBiHUOvoSsSPgLg6YpftgLudygzA-jQBVxJQTg9wuINp-Q3qfIhlKyxnJF6Qp-bNy7NOP-bLibrPeTgZW05tx-srZELpz_SuM5Dv-cm7dWfh7s6pIZODxin1Gv78LSN4QEWZoMF1JKxE0Icy67xIrDNgWso_HCXHTnyasJrMdCpfRBXq3NK3wmAh6pBmWM1AMlGO8jBU9AfQna8IcAoBQW7f70a3kzOwO6bVVxcEM7xYO6BujU2';

	const navHrefs = ['#features', '#comparison', '#models', '#cta'] as const;

	let mobileMenuOpen = $state(false);
	let langMenuOpen = $state(false);
	let currentTheme = $state<'light' | 'dark'>('light');
	let currentLocale = $state<Locale>('en');

	theme.subscribe((v) => (currentTheme = v));
	locale.subscribe((v) => (currentLocale = v));

	function selectLocale(loc: Locale) {
		locale.set(loc);
		langMenuOpen = false;
	}

	function toggleLangMenu(e: MouseEvent) {
		e.stopPropagation();
		langMenuOpen = !langMenuOpen;
		if (langMenuOpen) mobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen) langMenuOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('[data-lang-menu]')) {
			langMenuOpen = false;
		}
	}
</script>

<svelte:document onclick={handleClickOutside} />

<div class="fixed top-6 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 px-4">
	<nav
		class="glass flex items-center justify-between rounded-full px-4 py-3 shadow-xl shadow-[rgba(var(--_nyvex-shadow),0.2)] sm:px-6"
	>
		<div class="flex items-center gap-3">
			<img class="size-8 rounded-lg" alt="NYVEX logo" src={LOGO_SRC} />
			<span
				class="hidden bg-linear-to-r from-nyvex-on-surface to-nyvex-on-surface-muted bg-clip-text font-satoshi text-xl font-bold tracking-tight text-transparent xs:inline"
			>
				NYVEX
			</span>
		</div>

		<div class="hidden items-center gap-8 text-sm font-medium text-nyvex-on-surface-muted md:flex">
			<a class="transition-colors hover:text-nyvex-primary" href={navHrefs[0]}>{$t.nav.intelligence}</a>
			<a class="transition-colors hover:text-nyvex-primary" href={navHrefs[1]}>{$t.nav.privacy}</a>
			<a class="transition-colors hover:text-nyvex-primary" href={navHrefs[2]}>{$t.nav.models}</a>
			<a class="transition-colors hover:text-nyvex-primary" href={navHrefs[3]}>{$t.nav.docs}</a>
		</div>

		<div class="flex items-center gap-1 sm:gap-2">
			<!-- Language selector -->
			<div class="relative" data-lang-menu>
				<button
					class="flex items-center justify-center gap-1 rounded-full p-2 transition-all hover:bg-(--_nyvex-glass-hover)"
					onclick={toggleLangMenu}
					aria-label="Change language"
					aria-expanded={langMenuOpen}
				>
					<span class="material-symbols-outlined text-[20px]">language</span>
					<span class="hidden text-xs font-bold xs:inline">{$localeLabel}</span>
				</button>

				<!-- Desktop dropdown -->
				{#if langMenuOpen}
					<div
						class="glass absolute top-full right-0 mt-2 hidden w-44 rounded-2xl p-2 shadow-xl md:block"
					>
						<div class="flex flex-col gap-1">
							{#each LOCALES as loc (loc)}
								<button
									class="rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors
										{currentLocale === loc
											? 'bg-nyvex-primary/10 text-nyvex-primary'
											: 'text-nyvex-on-surface-muted hover:bg-(--_nyvex-glass-hover) hover:text-nyvex-primary'}"
									onclick={() => selectLocale(loc)}
								>
									{LOCALE_NAMES[loc]}
								</button>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<!-- Theme toggle -->
			<button
				class="flex items-center justify-center rounded-full p-2 transition-all hover:bg-(--_nyvex-glass-hover)"
				onclick={() => theme.toggle()}
				aria-label="Toggle theme"
			>
				<span class="material-symbols-outlined text-[20px]">
					{currentTheme === 'light' ? 'dark_mode' : 'light_mode'}
				</span>
			</button>

			<!-- Mobile menu toggle -->
			<button
				class="flex items-center justify-center rounded-full p-2 transition-all hover:bg-(--_nyvex-glass-hover) md:hidden"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<span class="material-symbols-outlined text-[20px]">
					{mobileMenuOpen ? 'close' : 'menu'}
				</span>
			</button>
		</div>
	</nav>

	<!-- Mobile/Tablet: language panel -->
	{#if langMenuOpen}
		<div class="glass mt-2 rounded-2xl p-4 shadow-xl md:hidden" data-lang-menu>
			<div class="flex flex-col gap-1">
				{#each LOCALES as loc (loc)}
					<button
						class="rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors
							{currentLocale === loc
								? 'bg-nyvex-primary/10 text-nyvex-primary'
								: 'text-nyvex-on-surface-muted hover:bg-(--_nyvex-glass-hover) hover:text-nyvex-primary'}"
						onclick={() => selectLocale(loc)}
					>
						{LOCALE_NAMES[loc]}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Mobile/Tablet: navigation panel -->
	{#if mobileMenuOpen}
		<div class="glass mt-2 rounded-2xl p-4 shadow-xl md:hidden">
			<div class="flex flex-col gap-1">
				<a class="rounded-lg px-3 py-2.5 text-sm font-medium text-nyvex-on-surface-muted transition-colors hover:bg-(--_nyvex-glass-hover) hover:text-nyvex-primary" href={navHrefs[0]} onclick={() => (mobileMenuOpen = false)}>{$t.nav.intelligence}</a>
				<a class="rounded-lg px-3 py-2.5 text-sm font-medium text-nyvex-on-surface-muted transition-colors hover:bg-(--_nyvex-glass-hover) hover:text-nyvex-primary" href={navHrefs[1]} onclick={() => (mobileMenuOpen = false)}>{$t.nav.privacy}</a>
				<a class="rounded-lg px-3 py-2.5 text-sm font-medium text-nyvex-on-surface-muted transition-colors hover:bg-(--_nyvex-glass-hover) hover:text-nyvex-primary" href={navHrefs[2]} onclick={() => (mobileMenuOpen = false)}>{$t.nav.models}</a>
				<a class="rounded-lg px-3 py-2.5 text-sm font-medium text-nyvex-on-surface-muted transition-colors hover:bg-(--_nyvex-glass-hover) hover:text-nyvex-primary" href={navHrefs[3]} onclick={() => (mobileMenuOpen = false)}>{$t.nav.docs}</a>
			</div>
		</div>
	{/if}
</div>
