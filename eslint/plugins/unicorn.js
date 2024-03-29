const { getAllRules } = require("./api");

module.exports = {
  plugins: ["unicorn"],
  rules: {
    ...getAllRules("eslint-plugin-unicorn"),
    "unicorn/better-regex": "off",
    "unicorn/catch-error-name": ["warn", { name: "e" }],
    "unicorn/consistent-function-scoping": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-method-this-argument": "off",
    "unicorn/no-array-push-push": "off",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-at": "off",
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/switch-case-braces": ["warn", "avoid"]
  },
  overrides: [
    { files: ["*.js", "*.jsx"], rules: { "unicorn/prefer-module": "off" } }
  ]
};
