import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.jenishms.in",
  build: {
    outDir: "dist",
  },
  integrations: [tailwind(), react()],
});
