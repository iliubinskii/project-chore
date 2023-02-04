const { getAllRules } = require("./api");

module.exports = {
  plugins: ["react"],
  rules: getAllRules("eslint-plugin-react")
};
