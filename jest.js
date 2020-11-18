module.exports = {
  plugins: ["jest"],
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
  env: {
    "jest/globals": true,
  },
  rules: {
    // Lowercase test names read better in the Jest output summary.
    "jest/lowercase-name": "warn",
    "jest/no-restricted-matchers": [
      "error",
      {
        // Tests against boolean values should assert true or false. Asserting toBeTruthy or
        // toBeFalsy matches non-boolean values as well and encourages weaker tests.
        toBeFalsy: "Avoid `toBeFalsy`",
        toBeTruthy: "Avoid `toBeTruthy`",
      },
    ],
    // Tests in Jest should return void. The only case where you might want to return a value in a
    // Jest test is returning a promise; in that case, using async/await is preferred.
    "jest/no-test-return-statement": "error",
    // Tests marked with `.todo` are preferred over empty test bodies because Jest highlights todos
    // in the summary output.
    "jest/prefer-todo": "error",
    // Tests that assert `.toThrow()` will pass if an error other than the expected error is not
    // thrown; asserting a test message ensures that unexpected errors don't falsely cause your
    // test to pass.
    "jest/require-to-throw-message": "error",
  },
};