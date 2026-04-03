import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // ⚠️  CRITICAL FIX: was "/Profile/" but the GitHub repository is named
  //    "Portfolio" (see personalInfo.github in content.ts).
  //    GitHub Pages serves the site at /<repo-name>/, so an incorrect
  //    base path causes ALL assets (JS, CSS, images) to 404 in production.
  base: process.env.NODE_ENV === "development" ? "/" : "/Portfolio/",

  plugins: [react()],

  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Raise the inline-asset threshold slightly so small SVGs are inlined
    assetsInlineLimit: 4096,
    // Produce sourcemaps for production debugging (remove if unwanted)
    sourcemap: false,
  },

  server: {
    // Allow all hosts (required for certain dev proxies/tunnels)
    // @ts-ignore — Vite type definitions may not include this option yet
    allowedHosts: true,
  },
});
