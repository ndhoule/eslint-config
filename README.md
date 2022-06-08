# `@ndhoule/eslint-config`

An opinionated but flexible set of ESLint configurations.

This configuration:

- Is mostly composed out of other plugins' recommended configuration sets. It further enables some (hopefully uncontroversial) rules that catch common gotchas and improve consistency.
- Aggressively enables rules that produce consistent style. It assumes you're using Prettier to style your code, and further enables rules that free developers up from style (sorting import declarations and members, etc.).
- Centralizes installation and maintenance of ESLint plugins as much as possible. Rather than installing, configuring, and maintaining a ton of ESLint plugins, install one package.
- Reduces boilerplate by smoothing out common conflicts between plugins.

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
- `@ndhoule/eslint-config/lodash`: A configuration for [Lodash](https://lodash.com/). You may need to configure the `eslint-plugin-lodash` plugin; consult its [documentation](https://github.com/wix/eslint-plugin-lodash/) for more information.
- `@ndhoule/eslint-config/node`: A configuration for files run in a Node runtime.
- `@ndhoule/eslint-config/node/babel`: A configuration for files run in a Node runtime that are first transpiled via Babel (or a similar transpiler like TSC).
- `@ndhoule/eslint-config/node/typescript`: A configuration for TypeScript files run in a Node runtime.
- `@ndhoule/eslint-config/react`: A configuration for React components/applications. You may need to configure the `eslint-plugin-react` plugin; consult its [documentation](https://github.com/yannickcr/eslint-plugin-react) for more information.
- `@ndhoule/eslint-config/react/typescript`: A configuration for React components/applications with TypeScript-specific rules enabled.
- `@ndhoule/eslint-config/react/jsx-runtime`: A configuration for React applications that use the [JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).
- `@ndhoule/eslint-config/testing-library`: A configuration for [Testing Library](https://testing-library.com/) tests.
- `@ndhoule/eslint-config/testing-library/react`: A configuration for [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/) tests.
- `@ndhoule/eslint-config/typescript`: A configuration for TypeScript files.

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
