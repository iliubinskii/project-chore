module.exports = {
  extends: [
    "./eslint/options/allow-nodejs-modules",
    "./eslint/options/allow-require",
    "./eslint/options/allow-require-unsafe"
  ],
  overrides: [
    {
      files: "./api/index.js",
      extends: "./eslint/options/allow-global-access"
    },
    { files: "./eslint/**", extends: "./eslint/special-locations/eslintrc" },
    {
      files: "./jest/jest-preset.js",
      extends: "./eslint/options/skip-html-literal-check"
    }
  ]
};
