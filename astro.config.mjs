import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import itsmatteomanfearlyHints from '@itsmatteomanf/astro-early-hints'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig } from 'astro/config'
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
})
