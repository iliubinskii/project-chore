const { getAllRules } = require("./api");

module.exports = {
  plugins: ["react"],
  settings: { react: { version: "detect" } },
  rules: {
    ...getAllRules("eslint-plugin-react"),
    "react/forbid-component-props": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-pascal-case": ["warn", { ignore: ["FAB"] }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-space-before-closing": "off"
  }
};
