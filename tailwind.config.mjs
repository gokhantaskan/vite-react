import plugin from "tailwindcss/plugin";

import {
  borderRadius,
  boxShadow,
  colors,
  screens,
} from "./src/config/defaults";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors,
    borderRadius,
    screens,
    container: {
      center: true,
      padding: "1rem",
    },
    boxShadow: {
      ...boxShadow,
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    extend: {
      fontFamily: {
        sans: ["'Golos Text'", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.gray.300", "currentColor"),
      }),
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    }),
  ],
};
