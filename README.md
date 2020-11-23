# `@ndhoule/eslint-config`

An opinionated but flexible set of ESLint configurations.

These configurations are mostly composed out of other plugins' recommended configuration sets. It bundles various ESLint plugins, reducing the amount of dependencies you need to manage within your project; it also takes care of some boilerplate configuration, enables some less controversial rules that aren't enabled by default, and smoothes out common conflicts between plugin rules.

## Installation

Install via your package manager of choice:

```sh
npm install -D @ndhoule/eslint-config
yarn add -D @ndhoule/eslint-config
```

You'll also need to install `eslint` and `prettier`, which are peer dependencies.

You will also need to install `react` and `typescript` if you're using those configurations; these are also represented as peer dependencies.

## Configurations

- `@ndhoule/eslint-config/recommended`: A base configuration that enforces best practices. You probably want this rule set enabled at the root of your configuration.
- `@ndhoule/eslint-config/jest`: A configuration for Jest tests.
- `@ndhoule/eslint-config/react`: A configuration for React components/applications.
- `@ndhoule/eslint-config/react/typescript`: A configuration for React components/applications with TypeScript-specific rules enabled.
- `@ndhoule/eslint-config/typescript`: A configuration for TypeScript files. 
- `@ndhoule/eslint-config/testing-library`: A configuration for [testing-library](https://testing-library.com/) tests. 

## Usage

The most effective way to use this configuration is in conjunction with overrides. For example:

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: "@ndhoule/eslint-config/recommended",
  overrides: [
    // TypeScript files
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
      },
      extends: "@ndhoule/eslint-config/typescript",
    },
    // Tests
    {
      files: ["src/**/*.test.js", "src/**/*.test.ts"],
      extends: ["@ndhoule/eslint-config/jest"],
    },
    // React tests
    {
      files: ["src/**/*.test.jsx", "src/**/*.test.tsx"],
      extends: [
        "@ndhoule/eslint-config/jest",
        "@ndhoule/eslint-config/testing-library/react",
      ],
    },
  ],
};
```
