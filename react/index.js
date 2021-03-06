module.exports = {
  plugins: ["react", "react-hooks", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    "plugin:prettier/recommended", // Must be last
  ],
};
