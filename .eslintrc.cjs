module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "import"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
    "no-useless-return": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": ["error", { ignore: ["tw", "css"] }],
    "react/self-closing-comp": ["error", { component: true, html: true }],
  },
};
