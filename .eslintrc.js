module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "eslint:recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "@typescript-eslint/no-empty-interface": 1,
  },
};
