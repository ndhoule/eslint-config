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
    // https://typescript-eslint.io/rules/ban-ts-comment
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": true,
      },
    ],

    // https://typescript-eslint.io/rules/consistent-type-assertions
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],

    // https://typescript-eslint.io/rules/dot-notation
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",

    // https://typescript-eslint.io/rules/explicit-member-accessibility
    "@typescript-eslint/explicit-member-accessibility": "error",

    // https://typescript-eslint.io/rules/no-base-to-string
    "@typescript-eslint/no-base-to-string": [
      "error",
      { ignoredTypeNames: ["RegExp"] },
    ],

    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    // https://typescript-eslint.io/rules/no-implicit-any-catch
    "@typescript-eslint/no-implicit-any-catch": [
      "error",
      { allowExplicitAny: false },
    ],

    // https://typescript-eslint.io/rules/no-invalid-void-type
    "@typescript-eslint/no-invalid-void-type": [
      "error",
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: true,
      },
    ],

    // Set to match `@ndhoule/eslint-config/recommended` configuration
    //
    // https://typescript-eslint.io/rules/no-unused-vars
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "after-used", argsIgnorePattern: "^_" },
    ],

    // Empty interfaces are often useful for module interfaces you expect to
    // grow over time, like program arguments, React props, etc.
    //
    // https://typescript-eslint.io/rules/no-empty-interface
    "@typescript-eslint/no-empty-interface": "off",

    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      { checkNever: false },
    ],

    // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    // Restrict `throw` to Error objects
    //
    // https://typescript-eslint.io/rules/no-throw-literal
    "@typescript-eslint/no-throw-literal": "error",

    // https://typescript-eslint.io/rules/no-unnecessary-condition
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      {
        allowConstantLoopConditions: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-unsafe-argument
    "@typescript-eslint/no-unsafe-argument": "error",

    // Prohibit empty class constructors
    //
    // https://typescript-eslint.io/rules/no-useless-constructor
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],

    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    "@typescript-eslint/non-nullable-type-assertion-style": "error",

    // Prohibit casting the initial value in Array#reduce calls (a very common
    // antipattern).
    //
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    "@typescript-eslint/prefer-reduce-type-parameter": "error",

    // https://typescript-eslint.io/rules/prefer-for-of
    "@typescript-eslint/prefer-for-of": "error",

    // https://typescript-eslint.io/rules/prefer-enum-initializers
    "@typescript-eslint/prefer-enum-initializers": "error",

    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    "@typescript-eslint/prefer-nullish-coalescing": "error",

    // https://typescript-eslint.io/rules/prefer-optional-chain
    "@typescript-eslint/prefer-optional-chain": "error",

    // Require functions capable of returning a promise to be marked as `async`.
    // Helps to improve stylistic consistency and to avoid functions that can
    // return both a promise and a non-promise value (e.g. in a conditional).
    //
    // https://typescript-eslint.io/rules/promise-function-async
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
    // https://typescript-eslint.io/rules/restrict-template-expressions
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumber: false,
        allowRegExp: false,
      },
    ],

    // Prohibit `return await` (see `recommended` configuration for details).
    //
    // https://typescript-eslint.io/rules/return-await
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",

    // Disallow non-boolean values in boolean expressions (comparisons to a
    // boolean, conditionals in ternaries/if/while/etc.)
    //
    // https://typescript-eslint.io/rules/strict-boolean-expressions
    "@typescript-eslint/strict-boolean-expressions": "error",

    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // https://typescript-eslint.io/rules/unified-signatures
    "@typescript-eslint/unified-signatures": "error",

    // The way Zapatos outputs this built schema file isn't compatible with how
    // `import/no-unresolved` resolves files. This doesn't particularly matter,
    // anyway; if the schema is unresolvable then `tsc` will fail.
    "import/no-unresolved": ["error", { ignore: ["^zapatos/schema$"] }],
  },
};
