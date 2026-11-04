import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://andleo.dev",
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind()],
});
