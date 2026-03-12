import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = {
	light: '#f8f6f6',
	dark: '#0a0e27'
};

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	function applyTheme(theme: Theme) {
		if (!browser) return;
		const isDark = theme === 'dark';
		document.documentElement.classList.toggle('dark', isDark);
		document.documentElement.style.backgroundColor = THEME_COLORS[theme];
		localStorage.setItem('nyvex-theme', theme);

		const meta = document.getElementById('theme-color-meta');
		if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
	}

	return {
		subscribe,
		toggle() {
			update((current) => {
				const next: Theme = current === 'light' ? 'dark' : 'light';
				applyTheme(next);
				return next;
			});
		},
		init() {
			if (!browser) return;
			const saved = localStorage.getItem('nyvex-theme') as Theme | null;
			const resolved =
				saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
			applyTheme(resolved);
			set(resolved);
		}
	};
}

export const theme = createThemeStore();
