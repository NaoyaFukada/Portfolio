import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import markdown from "@eslint/markdown";
import json from "eslint-plugin-json";
import security from "eslint-plugin-security";

export default defineConfig([
  // JavaScript + Security
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, security },
    extends: ["js/recommended", "...security.configs.recommended.rules"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // Markdown
  markdown.configs.recommended,

  // JSON
  {
    files: ["**/*.json"],
    ...json.configs["recommended"],
  },
]);
