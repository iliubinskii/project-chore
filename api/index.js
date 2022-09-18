const { getAllRules } = require("../eslint/plugins/api");

const misc = require("../eslint/plugins/misc");

const preset = require("../jest/jest-preset");

module.exports = {
  eslint: {
    getAllRules,
    rules: {
      "misc/consistent-import": misc.rules["misc/consistent-import"][1],
      "misc/no-shadow": misc.rules["misc/no-shadow"][1]
    }
  },
  jest: { preset }
};
