module.exports = {
  overrides: [
    { files: "**/__mocks__/**", extends: "./mocks" },
    { files: "./src/test-utils/**", extends: "./test-utils" },
    { files: "./tests/**", extends: "./tests" },
    {
      files: [".eslintrc.*.js", ".eslintrc.js", "eslintrc.*.js", "eslintrc.js"],
      extends: "./eslintrc"
    }
  ]
};
