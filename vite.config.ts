import { fileURLToPath, URL } from "node:url";

// https://react-svgr.com/docs/rollup/
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import dns from "dns";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
// import vitePluginRequire from "vite-plugin-require";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  plugins: [
    // vitePluginRequire({
    //   fileRegex: /\.(js)$/,
    // }),
    react({
      babel: {
        plugins: [
          "babel-plugin-macros",
          [
            "@emotion/babel-plugin-jsx-pragmatic",
            {
              export: "jsx",
              import: "__cssprop",
              module: "@emotion/react",
            },
          ],
          [
            "@babel/plugin-transform-react-jsx",
            { pragma: "__cssprop" },
            "twin.macro",
          ],
        ],
      },
    }),
    svgr({
      icon: true,
      dimensions: false,
    }),
    checker({
      typescript: true,
      enableBuild: false,
    }),
  ],
  server: {
    port: 3030,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
