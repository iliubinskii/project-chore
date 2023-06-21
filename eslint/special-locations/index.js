module.exports = {
  overrides: [
    { files: "./*", extends: "./chore" },
    {
      files: [".eslintrc.*.js", ".eslintrc.js", "eslintrc.*.js", "eslintrc.js"],
      extends: "./eslintrc"
    },
    { files: "**/__mocks__/**", extends: "./mocks" },
    { files: "*.module.scss.d.ts", extends: "./scss-modules" },
    { files: "./src/test-utils/**", extends: "./test-utils" },
    {
      files: [
        "**/__tests__/*.ts",
        "**/__tests__/*.tsx",
        "*.test.ts",
        "*.test.tsx",
        "./tests/**"
      ],
      extends: "./tests"
    }
  ]
};
