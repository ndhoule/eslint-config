module.exports = {
  plugins: ["eslint-comments", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "problems",
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
    // Enforce consistency in where import groups appear. The linter should jsut take care of this
    // kind of thing.
    "import/first": "error",
    // Enforce conventions around import groups. (Source files like js, ts shouldn't require an
    // extension while assets like json, image files, etc. should.) Another thing the linter should
    // just take care of for you.
    "import/extensions": ["error", "never", { json: "always" }],
    // Enforce conventions around import groups. The linter should just take care of this kind of
    // thing.
    "import/newline-after-import": "error",
    // Enforce conventions around import group ordering. The linter should just take care of this
    // kind of thing.
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "never",
      },
    ],
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
    // FIXME(ndhoule): enabled by eslint-config-problems. Unfortunately, an issue in
    // @typescript-eslint/eslint-config prevents this rule from being applied consistently across
    // both JavaScript and TypeScript, so it's disabled for now. Enable this and the matching
    // TypeScript rule when the issue is fixed:
    // https://github.com/typescript-eslint/typescript-eslint/issues/1856
    "no-use-before-define": "off",
    "no-useless-constructor": "error",
    // `return await` is almost always a mistake. The only time when it's acceptable is within a
    // `try` block (which this rule permits).
    "no-return-await": "error",
    // Sort import members (and destructured `require`s) alphabetically for consistency.
    // (For declaration sorting, see `import/order`, which does a more comprehensive job of sorting
    // import declarations.)
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    // Enabled by eslint-config-problems; because it's enabled automatically by tools like
    // TypeScript, Babel/Webpack, etc., it's generally not necessary to enable it explicitly.
    strict: "off",
  },
};
