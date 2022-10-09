module.exports = {
  extends: [
    "./eslint/options/allow-nodejs-modules",
    "./eslint/options/allow-require",
    "./eslint/options/allow-require-unsafe"
  ],
  overrides: [
    { files: "./eslint/**", extends: "./eslint/special-locations/eslintrc" }
  ]
};
