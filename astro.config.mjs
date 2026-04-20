// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kevindwi.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            display: "swap",
            src: ["./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Source Code Pro",
      cssVariable: "--font-source-code-pro",
      fallbacks: ["mono"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            display: "swap",
            src: ["./src/assets/fonts/SourceCodePro-VariableFont_wght.ttf"],
          },
        ],
      },
    },
  ],
});
