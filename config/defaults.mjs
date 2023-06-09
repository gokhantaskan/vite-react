import twColors from "tailwindcss/colors";

const colors = {
  inherit: "inherit",
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  primary: twColors.blue,
  secondary: twColors.purple,
  tertiary: twColors.fuchsia,
  success: twColors.green,
  info: twColors.indigo,
  warning: twColors.amber,
  danger: twColors.red,
  gray: twColors.slate,
};

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const boxShadow = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
};

const borderRadius = {
  none: "0",
  sm: "2px",
  DEFAULT: "4px",
  md: "6px",
  lg: "8px",
  full: "1000rem",
};

export { borderRadius, boxShadow, colors, screens };
