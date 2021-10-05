module.exports = {
  plugins: ["node"],
  rules: {
    // If you're using Typescript, you're transpiling your source with
    // either tsc or babel and so have access to ES syntax.
    "node/no-unsupported-features/es-syntax": "off",
  },
};
