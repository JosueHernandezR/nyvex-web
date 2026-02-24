import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Directorio de salida para las páginas estáticas
			pages: 'build',
			assets: 'build',
			// strict: true asegura que todas las rutas estén prerenderizadas
			strict: true
		})
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
