// @ts-check
const tseslint = require("typescript-eslint");
const rootConfig = require("../../eslint.config.js");

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ["**/*.ts"],
    rules: {
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/component-class-suffix': 'off',      
      '@angular-eslint/component-selector': 'off' // Disable standalone component warnings
    },
  },
  {
    files: ["**/*.html"],
    rules: {},
  }
);
