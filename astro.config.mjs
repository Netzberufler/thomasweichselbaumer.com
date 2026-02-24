// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	site: 'https://thomasweichselbaumer.com',
	trailingSlash: 'always',
	integrations: [sitemap()],
	vite: {
		plugins: [
			tailwindcss(),
			eslint({
				include: ['src/**/*.{js,ts,astro}'],
				exclude: ['node_modules'],
			}),
		],
	},
});
