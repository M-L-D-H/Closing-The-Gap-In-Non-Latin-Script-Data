import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: staticAdapter(),
		paths: {
			base: '/Closing-The-Gap-In-Non-Latin-Script-Data'
		},
		appDir: 'app',
		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: 'warn'
		}
	}
};

export default config;
