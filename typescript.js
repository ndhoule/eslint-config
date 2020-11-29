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
    // This rule is set in `@typescript-eslint/eslint-recommended`; by default, that configuration
    // allows the use of numbers in template expressions. However, one of the most--if not *the*
    // most--common reasons for converting a number to a string is to show it to a user. In this
    // scenario, consistency in string formatting is key: when displaying money, you generally
    // either want to consistently show cents or not, and you may or may not want to round numbers
    // (or round them to a fixed precision). Allowing numbers in template strings without calling
    // attention to their formatting is a footgun, so here we prohibit it, knowing that the
    // worse-case alternative is not bad (forcing users to call `toString()` on their number).
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: false,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
      },
    ],
    // Prohibit `return await` (see `recommended` configuration for details).
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    // Disallow non-boolean values in boolean expressions (comparisons to a boolean, conditionals in
    // ternaries/if/while/etc.)
    "@typescript-eslint/strict-boolean-expressions": "error",
  },
};
