module.exports = {
  overrides: [
    { files: ["!*.js", "!*.jsx"], extends: "plugin:escompat/typescript" },
    { files: ["*.js", "*.jsx"], extends: "plugin:escompat/recommended" }
  ]
};
