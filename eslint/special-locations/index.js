module.exports = {
  overrides: [
    {
      files: [".eslintrc.*.js", ".eslintrc.js", "eslintrc.*.js", "eslintrc.js"],
      extends: "./eslintrc"
    },
    { files: "**/__mocks__/**", extends: "./mocks" },
    { files: "*.module.scss.d.ts", extends: "./scss-modules" },
    { files: "./src/test-utils/**", extends: "./test-utils" },
    { files: ["*.test.ts", "*.test.tsx", "./tests/**"], extends: "./tests" }
  ]
};
