const { getAllRules } = require("./api");

module.exports = {
  plugins: ["deprecation"],
  rules: getAllRules("eslint-plugin-deprecation"),
  overrides: [
    { files: ["*.js", "*.jsx"], rules: { "deprecation/deprecation": "off" } }
  ]
};
