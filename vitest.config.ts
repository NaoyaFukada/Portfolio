/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    environment: "jsdom", // so you can test DOM output
    globals: true, // so you can use global test functions without importing them
    setupFiles: ["./test/setup.ts"],
  },
});
