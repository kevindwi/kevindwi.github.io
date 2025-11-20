// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kevindwi.github.io",
  integrations: [react(), expressiveCode(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
