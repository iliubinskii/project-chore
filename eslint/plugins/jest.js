const { getAllRules } = require("./api");

module.exports = {
  plugins: ["jest"],
  rules: {
    ...getAllRules("eslint-plugin-jest"),
    "jest/max-expects": ["warn", { max: 1 }],
    "jest/no-hooks": "off",
    "jest/prefer-expect-assertions": [
      "warn",
      {
        // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
        onlyFunctionsWithExpectInCallback: true,
        // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
        onlyFunctionsWithExpectInLoop: true
      }
    ],
    "jest/prefer-lowercase-title": "off",
    "jest/require-hook": "off",
    "jest/require-top-level-describe": "off",
    "jest/unbound-method": "off"
  }
};
