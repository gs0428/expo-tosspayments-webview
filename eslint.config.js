// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = defineConfig([
  {
    ignores: ["dist/*", "build/*", "node_modules/*"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000"], ["^react$"], ["^@"], ["^[a-z]"], ["^~"], ["^\\./", "^\\.\\./"]],
        },
      ],
      "react/react-in-jsx-scope": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },
]);
