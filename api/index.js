const { getAllRules } = require("../eslint/plugins/api");

const preset = require("../jest/jest-preset");

const skylib = require("../eslint/plugins/skylib");

const skylibTypescript = skylib.overrides.find(
  override => override.files === "!*.js"
);

module.exports = {
  eslint: {
    getAllRules,
    rules: {
      "@skylib/consistent-import": skylib.rules["@skylib/consistent-import"][1],
      "@skylib/typescript/no-shadow":
        skylibTypescript.rules["@skylib/typescript/no-shadow"][1]
    }
  },
  jest: { preset }
};
