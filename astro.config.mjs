import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import itsmatteomanfearlyHints from "@itsmatteomanf/astro-early-hints";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.ts";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	prefetch: {
		prefetchAll: true,
	},

	integrations: [
		react(),
		itsmatteomanfearlyHints(),
		(await import("@playform/compress")).default({
			HTML: {
				"html-minifier-terser": {
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: true,
					minifyCSS: true,
					minifyJS: true,
					useShortDoctype: true,
					conservativeCollapse: true,
					sortAttributes: true,
					sortClassName: true,
				},
			},
		}),
	],

	experimental: {
		clientPrerender: true,
		fonts: [
			{
				provider: fontProviders.fontshare(),
				name: "Khand",
				cssVariable: "--font-khand",
				styles: ["normal"],
				weights: ["100 900"],
				fallbacks: ["Impact", "Arial Narrow", "Helvetica Neue", "sans-serif"],
			},
			{
				provider: fontProviders.fontshare(),
				name: "Supreme",
				cssVariable: "--font-supreme",
				styles: ["normal"],
				weights: ["100 900"],
				// fallbacks: ['Impact', 'Arial Narrow', 'Helvetica Neue', 'sans-serif'],
			},
		],
	},

	markdown: {
		remarkPlugins: [remarkReadingTime],
	},

	adapter: vercel(),
});
