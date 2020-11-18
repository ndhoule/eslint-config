module.exports = {
  plugins: ["eslint-comments", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",

    "prettier",
    "plugin:prettier/recommended", // Must be last
  ],
  rules: {
    // Force removal of unused eslint-disable directives, which can help prevent developers from
    // reintroducing a bad pattern that was previously fixed but where the directive was left in
    // place.
    "eslint-comments/no-unused-disable": "error",
    "no-unused-vars": [
      "error",
      {
        // Ignore unused arguments that are prefixed with an underscore; naming unused variables is
        // sometimes helpful for forcing variadic functions to behave the way you want, or for
        // documenting arguments that are likely to come into use in the future.
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-useless-constructor": "error",
    // `return await` is almost always a mistake. The only time when it's acceptable is within a
    // `try` block (which this rule permits).
    "no-return-await": "error",
  },
};
