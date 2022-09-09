const { getAllRules } = require("./api");

module.exports = {
  plugins: ["jest-extended"],
  rules: getAllRules("eslint-plugin-jest-extended")
};
