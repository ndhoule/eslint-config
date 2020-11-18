module.exports = {
  plugins: ["@typescript-eslint", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",

    "prettier/@typescript-eslint", // Must be last
  ],
  rules: {
    // Set to match recommended configuration
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "after-used", argsIgnorePattern: "^_" },
    ],

    // Empty interfaces are often useful for module interfaces you expect to grow over time,
    // like program arguments, React props, etc.
    "@typescript-eslint/no-empty-interface": "off",
  },
};
