const { getAllRules } = require("./api");

module.exports = {
  plugins: ["react-native"],
  rules: {
    ...getAllRules("eslint-plugin-react-native"),
    "react-native/no-inline-styles": "off",
    "react-native/no-raw-text": "off"
  }
};
