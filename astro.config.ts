// import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ayie.github.io",
  base: "/",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true
  },

  experimental:{
    clientPrerender: true,
    fonts:[
      {
        provider: fontProviders.fontshare(),
        name: "Outfit",
        cssVariable: "--font-outfit",
        styles: ["normal"],
         weights: ["100 900"],
        fallbacks: ["Calibri"]
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Sans",
        cssVariable: "--font-ibm-plex-sans",
        styles: ["normal", "italic"],
        weights: ["100 700"],
        fallbacks: ["system-ui", "sans-serif"]
      },
    ]
  }
});
