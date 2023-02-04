const { getAllRules } = require("./api");

module.exports = {
  plugins: ["react-native"],
  rules: getAllRules("eslint-plugin-react-native")
};
