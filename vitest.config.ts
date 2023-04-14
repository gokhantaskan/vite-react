/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    dir: "./tests/unit",
    reporters: ["default", "html"],
    coverage: {
      reporter: ["text", "html", "json-summary"],
      reportsDirectory: "./test-results/unit-coverage",
    },
  },
});
