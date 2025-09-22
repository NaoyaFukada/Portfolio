/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { getViteConfig } from "astro/config";

export default defineConfig({
  // Merge with Astro's Vite configuration
  ...getViteConfig({}),

  // Add Vitest-specific configuration
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
  },
});
