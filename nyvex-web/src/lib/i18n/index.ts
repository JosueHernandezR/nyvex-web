import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { translations, type Locale } from './translations';

const LOCALES: Locale[] = ['en', 'es', 'fr', 'zh'];
const LOCALE_LABELS: Record<Locale, string> = { en: 'EN', es: 'ES', fr: 'FR', zh: '中文' };
const LOCALE_NAMES: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
	fr: 'Français',
	zh: '中文'
};

function createLocaleStore() {
	const initial: Locale = browser
		? ((localStorage.getItem('nyvex-locale') as Locale) ?? 'en')
		: 'en';
	const { subscribe, set, update } = writable<Locale>(initial);

	return {
		subscribe,
		set(value: Locale) {
			if (browser) localStorage.setItem('nyvex-locale', value);
			set(value);
		},
		cycle() {
			update((current) => {
				const idx = LOCALES.indexOf(current);
				const next = LOCALES[(idx + 1) % LOCALES.length];
				if (browser) localStorage.setItem('nyvex-locale', next);
				return next;
			});
		}
	};
}

export const locale = createLocaleStore();
export const t = derived(locale, ($locale) => translations[$locale]);
export const localeLabel = derived(locale, ($locale) => LOCALE_LABELS[$locale]);
export { LOCALES, LOCALE_LABELS, LOCALE_NAMES };
export type { Locale };
