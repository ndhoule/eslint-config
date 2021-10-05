module.exports = {
  plugins: ["@typescript-eslint", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",

    "plugin:prettier/recommended", // Must be last
  ],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    "@typescript-eslint/explicit-member-accessibility": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-base-to-string.md
    "@typescript-eslint/no-base-to-string": [
      "error",
      { ignoredTypeNames: ["RegExp"] },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
    "@typescript-eslint/no-implicit-any-catch": [
      "error",
      { allowExplicitAny: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    "@typescript-eslint/no-invalid-void-type": [
      "error",
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: true,
      },
    ],

    // Set to match `@ndhoule/eslint-config/recommended` configuration
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "after-used", argsIgnorePattern: "^_" },
    ],

    // Empty interfaces are often useful for module interfaces you expect to
    // grow over time, like program arguments, React props, etc.
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-empty-interface.md
    "@typescript-eslint/no-empty-interface": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      { checkNever: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    // Restrict `throw` to Error objects
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-throw-literal.md
    "@typescript-eslint/no-throw-literal": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      {
        allowConstantLoopConditions: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    "@typescript-eslint/no-unsafe-argument": "error",

    // Prohibit empty class constructors
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
    "@typescript-eslint/non-nullable-type-assertion-style": "error",

    // Prohibit casting the initial value in Array#reduce calls (a very common
    // antipattern).
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    "@typescript-eslint/prefer-reduce-type-parameter": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-for-of.md
    "@typescript-eslint/prefer-for-of": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    "@typescript-eslint/prefer-enum-initializers": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    "@typescript-eslint/prefer-nullish-coalescing": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    "@typescript-eslint/prefer-optional-chain": "error",

    // Require functions capable of returning a promise to be marked as `async`.
    // Helps to improve stylistic consistency and to avoid functions that can
    // return both a promise and a non-promise value (e.g. in a conditional).
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/promise-function-async.md
    "@typescript-eslint/promise-function-async": "error",

    // This rule is set in `@typescript-eslint/eslint-recommended`; by default,
    // that configuration allows the use of numbers in template expressions.
    // However, one of the most--if not *the* most--common reasons for
    // converting a number to a string is to show it to a user. In this
    // scenario, consistency in string formatting is key: when displaying money,
    // you generally either want to consistently show cents or not, and you may
    // or may not want to round numbers (or round them to a fixed precision).
    // Allowing numbers in template strings without calling attention to their
    // formatting is a footgun, so here we prohibit it, knowing that the
    // worse-case alternative is not bad (forcing users to call `toString()` on
    // their number).
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
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
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/return-await.md
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",

    // Disallow non-boolean values in boolean expressions (comparisons to a
    // boolean, conditionals in ternaries/if/while/etc.)
    //
    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    "@typescript-eslint/strict-boolean-expressions": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/unified-signatures.md
    "@typescript-eslint/unified-signatures": "error",

    // The way Zapatos outputs this built schema file isn't compatible with how
    // `import/no-unresolved` resolves files. This doesn't particularly matter,
    // anyway; if the schema is unresolvable then `tsc` will fail.
    "import/no-unresolved": ["error", { ignore: ["^zapatos/schema$"] }],
  },
};
