module.exports = {
  plugins: ["lodash"],
  // lodash/recommended has some questionable and very opinionated defaults
  // which largely try to steer you toward using Lodash over e.g. native
  // methods, and often comes into conflict with TypeScript (e.g. for type
  // refinement).
  rules: {
    "lodash/callback-binding": "error",

    "lodash/chain-style": ["error", "as-needed"],

    "lodash/chaining": ["error", "implicit"],

    "lodash/collection-method-value": "error",

    // orderBy can do everything sortBy can, so why have both?
    "lodash/collection-ordering": [
      "error",
      { method: "orderBy", useArray: "as-needed" },
    ],

    // I don't really understand why Lodash has chosen to go against the grain
    // when it comes to function composition.
    "lodash/consistent-compose": ["error", "compose"],

    "lodash/identity-shorthand": ["error", "always"],

    "lodash/prefer-filter": ["error", 3],

    // This rule is pretty dumb, honestly; it forces the use of Lodash where
    // it's not particularly useful or any more clear.
    "lodash/prefer-constant": "off",

    "lodash/prefer-find": "error",

    "lodash/prefer-flat-map": "error",

    "lodash/prefer-immutable-method": "error",

    "lodash/prefer-includes": ["error", { includeNative: true }],

    // Prevent mixed Lodash/native chains, which are often unintentional.
    "lodash/prefer-lodash-chain": "error",

    "lodash/prefer-reject": ["error", 3],

    "lodash/prefer-some": ["error", { includeNative: true }],

    "lodash/prefer-startswith": "error",

    // It's easy to forget #thru() exists
    "lodash/prefer-thru": "error",

    "lodash/prefer-times": "error",

    "lodash/prefer-wrapper-method": "error",

    // Don't forget to unwrap chains!
    "lodash/unwrap": "error",

    // These rules are useful in JavaScript, but are made redundant by
    // TypeScript.
    "lodash/no-extra-args": "error",

    "lodash/no-unbound-this": "error",

    "lodash/collection-return": "error",

    // The use of matching/property shorthand encourages code that is not easily
    // typed. While acutely problematic in TypeScript code (where it results in
    // lots of `any` types), it results in sloppy code in vanilla JavaScript,
    // too.
    "lodash/matches-prop-shorthand": ["error", "never"],

    "lodash/matches-shorthand": ["error", "never"],

    "lodash/path-style": ["error", "array"],

    "lodash/prop-shorthand": ["error", "never"],
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      rules: {
        // These rules are redundant with TypeScript's type system.
        "lodash/collection-return": "off",
        "lodash/no-extra-args": "off",
        "lodash/no-unbound-this": "off",
      },
    },
  ],
};
