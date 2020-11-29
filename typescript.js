module.exports = {
  plugins: ["@typescript-eslint", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",

    "prettier/@typescript-eslint", // Must be last
  ],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "error",
    // Set to match `@ndhoule/eslint-config/recommended` configuration
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "after-used", argsIgnorePattern: "^_" },
    ],
    // Empty interfaces are often useful for module interfaces you expect to grow over time,
    // like program arguments, React props, etc.
    "@typescript-eslint/no-empty-interface": "off",
    // Restrict `throw` to Error objects
    "@typescript-eslint/no-throw-literal": "error",
    // Prohibit empty class constructors
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    // Prohibit casting the initial value in Array#reduce calls (a very common antipattern).
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    // Require functions capable of returning a promise to be marked as `async`. Helps to improve
    // stylistic consistency and to avoid functions that can return both a promise and a non-promise
    // value (e.g. in a conditional).
    "@typescript-eslint/promise-function-async": "error",
    // Prohibit `return await` (see `recommended` configuration for details).
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    // Disallow non-boolean values in boolean expressions (comparisons to a boolean, conditionals in
    // ternaries/if/while/etc.)
    "@typescript-eslint/strict-boolean-expressions": "error",
  },
};
