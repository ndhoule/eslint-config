module.exports = {
  plugins: ["a11y", "prettier", "react", "react-hooks", "import-jsx"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:import/react",
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    "plugin:prettier/recommended", // Must be last
  ],

  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["noHref", "invalidHref", "preferButton"],
        components: [],
        specialLink: [],
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
        controlComponents: [],
        depth: 25,
        labelAttributes: [],
        labelComponents: [],
      },
    ],
  },
};
