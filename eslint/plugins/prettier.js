const { getAllRules } = require("./api");

module.exports = {
  plugins: ["prettier"],
  rules: getAllRules("eslint-plugin-prettier")
};
