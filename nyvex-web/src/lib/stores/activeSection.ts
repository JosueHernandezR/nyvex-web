import { writable } from 'svelte/store';

/** Sección actualmente visible (para resaltar en el navbar) */
export const activeSection = writable<string>('hero');
