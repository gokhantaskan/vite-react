import { fileURLToPath } from "node:url";

import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["vitest.setup.ts"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      dir: "src",
      reporters: ["default", "html"],
      outputFile: {
        html: "./test-results/unit/html/index.html",
      },
      coverage: {
        all: false,
        include: [
          "src/components/**",
          "src/utils/**",
          "src/helpers/**",
          "src/hooks/**",
          // Exclude
          "!src/components/loaders/**",
          "!src/components/Spinner/**",
        ],
        reporter: ["text", "json-summary"],
        reportsDirectory: "./test-results/unit",
      },
    },
  })
);
