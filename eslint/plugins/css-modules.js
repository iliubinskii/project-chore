const { getAllRules } = require("./api");

module.exports = {
  plugins: ["css-modules"],
  rules: getAllRules("eslint-plugin-css-modules")
};
