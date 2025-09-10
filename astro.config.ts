// import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ayie.github.io",
  base: "/",
  output: "server",

  prefetch: {
    prefetchAll: true,
  },

  experimental: {
    clientPrerender: true,
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "Bebas Neue",
        cssVariable: "--font-bebas-neue",
        styles: ["normal"],
        weights: ["100 900"],
        fallbacks: ["Bahnschrift", "Arial", "sans-serif"],
      },
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        styles: ["normal", "italic"],
        weights: ["100 700"],
        fallbacks: [
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Arial Nova",
          "Nimbus Sans",
          "sans-serif",
        ],
      },
    ],
  },

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});
