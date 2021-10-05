module.exports = {
  plugins: ["node"],
  extends: ["plugin:node/recommended"],
  rules: {
    // These rules overlap with `eslint-plugin-import`, which does everything
    // these do but better.
    //
    // This assumes you're using the recommended config from this module. (If
    // you aren't, you're better off extending `plugin:node/recommended`.)
    "node/no-extraneous-import": "off",
    "node/no-extraneous-require": "off",
    "node/no-missing-import": "off",
    "node/no-missing-require": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
  },
};
