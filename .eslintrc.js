// eslint-disable-next-line no-unused-vars
const os = require("os");

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: "airbnb",
  ignorePatterns: ["node_modules/", "build/"],
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "linebreak-style": ["error", "windows"], // Use "unix" if you need LF line endings
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to", "hrefLeft", "hrefRight"],
      aspects: ["noHref", "invalidHref", "preferButton"],
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-static-element-interactions": 0,
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "no-underscore-dangle": 0,
    "react/destructuring-assignment": 0,
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": [
      1,
      {
        assignment: true,
        declaration: true,
        return: true,
      },
    ],
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": ["error", "consistent"],
    "global-require": 0,
  },
};