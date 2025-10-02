import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import itsmatteomanfearlyHints from '@itsmatteomanf/astro-early-hints'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
// import oxlintPlugin from 'vite-plugin-oxlint'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react(), itsmatteomanfearlyHints()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: 'Bebas Neue',
        cssVariable: '--font-bebas-neue',
        styles: ['normal'],
        weights: ['100 900'],
        fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
      },
      {
        provider: fontProviders.fontshare(),
        name: 'General Sans',
        cssVariable: '--font-general-sans',
        styles: ['normal'],
        weights: ['100 900'],
        fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
      },
      {
        provider: fontProviders.fontshare(),
        name: 'Khand',
        cssVariable: '--font-khand',
        styles: ['normal'],
        weights: ['100 900'],
        fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Roboto',
        cssVariable: '--font-roboto',
        styles: ['normal', 'italic'],
        weights: ['100 700'],
      },
    ],
  },
})
