import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    base: "/portfolio/",
  },
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        outputPath: "/index.html",
        crawlLinks: false,
        retryCount: 0,
      },
    },
  },
});
