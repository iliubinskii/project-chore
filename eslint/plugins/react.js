const { getAllRules } = require("./api");

module.exports = {
  plugins: ["react"],
  settings: { react: { version: "detect" } },
  rules: {
    ...getAllRules("eslint-plugin-react"),
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-sort-default-props": "off",
    "react/jsx-space-before-closing": "off"
  }
};