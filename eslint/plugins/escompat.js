module.exports = {
  overrides: [
    { files: ["*.js", "*.jsx"], extends: "plugin:escompat/recommended" },
    { files: ["*.ts", "*.tsx"], extends: "plugin:escompat/typescript" }
  ]
};
