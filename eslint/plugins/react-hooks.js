const { getAllRules } = require("./api");

module.exports = {
  plugins: ["react-hooks"],
  rules: getAllRules("eslint-plugin-react-hooks")
};
