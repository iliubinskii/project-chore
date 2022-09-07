const { getAllRules } = require("../eslint/plugins/api");

const misc = require("../eslint/plugins/misc");

const preset = require("../jest/jest-preset");

const miscTypescript = misc.overrides.find(
  override => override.files === "!*.js"
);

module.exports = {
  eslint: {
    getAllRules,
    rules: {
      "misc/consistent-import": misc.rules["misc/consistent-import"][1],
      "misc/typescript/no-shadow":
        miscTypescript.rules["misc/typescript/no-shadow"][1]
    }
  },
  jest: { preset }
};
