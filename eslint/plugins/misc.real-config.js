module.exports = {
  overrides: [
    {
      files: ".eslintrc.js",
      rules: { "misc/real-config/eslintrc/no-rules": "warn" }
    },
    {
      files: ".eslintrc.overrides.js",
      rules: { "misc/real-config/eslintrc/no-rules": "warn" }
    },
    {
      files: ".eslintrc.rule-overrides.js",
      rules: { "misc/real-config/eslintrc/no-disable": "warn" }
    },
    {
      files: ".eslintrc.synonyms.js",
      rules: { "misc/real-config/eslintrc/sort-synonyms": "warn" }
    },
    {
      files: ".eslintrc.temp.js",
      rules: { "misc/real-config/eslintrc/no-temp": "warn" }
    },
    { files: ".prettier.js", rules: { "misc/real-config/prettier": "warn" } },
    {
      files: ["commitlint.scopes.js", "commitlint-next.scopes.js"],
      rules: { "misc/real-config/sort-commitlint": "warn" }
    }
  ]
};
