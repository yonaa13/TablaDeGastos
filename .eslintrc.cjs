module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "typeScript", "jsx"],
  rules: {
    "prettier/prettier": "warn",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 1 }],
  },
};
