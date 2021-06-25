module.exports = {
  overrides: [
    {
      files: ".eslintrc.js",
      rules: { "@skylib/config/eslintrc/no-rules": "warn" }
    },
    {
      files: ".eslintrc.overrides.js",
      rules: { "@skylib/config/eslintrc/no-rules": "warn" }
    },
    {
      files: ".eslintrc.rule-overrides.js",
      rules: { "@skylib/config/eslintrc/no-disable": "warn" }
    },
    {
      files: ".eslintrc.synonyms.js",
      rules: { "@skylib/config/eslintrc/sort-synonyms": "warn" }
    },
    {
      files: ".eslintrc.temp.js",
      rules: { "@skylib/config/eslintrc/no-temp": "warn" }
    },
    { files: ".prettier.js", rules: { "@skylib/config/prettier": "warn" } },
    {
      files: ["commitlint.scopes.js", "commitlint-all.scopes.js"],
      rules: { "@skylib/config/sort-commitlint": "warn" }
    }
  ]
};
