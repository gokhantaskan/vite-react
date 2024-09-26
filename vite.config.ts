import { fileURLToPath, URL } from "node:url";

// https://react-svgr.com/docs/rollup/
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import dns from "dns";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isTest = mode === "test";

  return {
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
            [
              "babel-plugin-import",
              {
                libraryName: "@mui/material",
                libraryDirectory: "",
                camel2DashComponentName: false,
              },
              "core",
            ],
          ],
        },
      }),
      svgr({
        icon: true,
        dimensions: false,
      }),
      !isTest
        ? checker({
            typescript: true,
            enableBuild: false,
          })
        : undefined,
    ],
    server: {
      port: 9090,
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
      },
    },
  };
});
