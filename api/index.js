/* eslint-disable misc/no-relative-parent-import -- Ok */

const { getAllRules } = require("../eslint/plugins/api");

const misc = require("../eslint/plugins/misc");

const preset = require("../jest/jest-preset");

const spellcheck = require("../eslint/plugins/spellcheck");

module.exports = {
  eslint: {
    getAllRules,
    rules: {
      "misc/consistent-import": misc.rules["misc/consistent-import"][1],
      "misc/no-shadow": misc.rules["misc/no-shadow"][1],
      "spellcheck/spell-checker":
        spellcheck.rules["spellcheck/spell-checker"][1]
    }
  },
  jest: { preset }
};
