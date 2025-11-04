// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kevindwi.github.io",
  base: "/blog-app",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
