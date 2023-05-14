module.exports = {
  "*": ["prettier --write -l -u --no-error-on-unmatched-pattern"],
  "*.{js,cjs,mjs,ts,tsx}": ["eslint --fix", "vitest related --run"],
};
