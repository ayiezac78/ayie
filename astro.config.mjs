import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import itsmatteomanfearlyHints from '@itsmatteomanf/astro-early-hints'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import { remarkReadingTime } from './remark-reading-time.ts'
// import oxlintPlugin from 'vite-plugin-oxlint'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare({
    imageService: 'compile',
  }),
  prefetch: {
    prefetchAll: true,
  },
  integrations: [react(), itsmatteomanfearlyHints()],
  experimental: {
    clientPrerender: true,
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: 'Khand',
        cssVariable: '--font-khand',
        styles: ['normal'],
        weights: ['100 900'],
        fallbacks: ['Impact', 'Arial Narrow', 'Helvetica Neue', 'sans-serif'],
      },
      {
        provider: fontProviders.fontshare(),
        name: 'Supreme',
        cssVariable: '--font-supreme',
        styles: ['normal'],
        weights: ['100 900'],
        // fallbacks: ['Impact', 'Arial Narrow', 'Helvetica Neue', 'sans-serif'],
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
