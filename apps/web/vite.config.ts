import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { SvelteKitPWA } from "@vite-pwa/sveltekit"

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    SvelteKitPWA({
      srcDir: "./src",
      scope: "/",
      base: "/",
      // selfDestroying: process.env.SELF_DESTROYING_SW === 'true',
      // pwaAssets: {
      // config: true,
      // },
      mode: "development",
      manifest: {
        name: "Kitstory",
        start_url: "/",
        scope: "/",
        short_name: "Kitstory",
        description: "Making cringe",
        display: "minimal-ui",
      },
      injectManifest: {
        globPatterns: ["client/**/*.{js,css,ico,png,svg,webp,woff,woff2}"],
      },
      workbox: {
        globPatterns: ["client/**/*.{js,css,ico,png,svg,webp,woff,woff2}"],
      },
      devOptions: {
        enabled: true,
        suppressWarnings: process.env.SUPPRESS_WARNING === "true",
        type: "module",
        navigateFallback: "/",
      },
    }),
  ],
})
