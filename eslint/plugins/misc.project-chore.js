module.exports = {
  overrides: [
    {
      files: ".eslintrc.js",
      rules: { "misc/project-chore/eslintrc/no-rules": "warn" }
    },
    {
      files: ".eslintrc.overrides.js",
      rules: { "misc/project-chore/eslintrc/no-rules": "warn" }
    },
    {
      files: ".eslintrc.rule-overrides.js",
      rules: { "misc/project-chore/eslintrc/no-disable": "warn" }
    },
    {
      files: ".eslintrc.synonyms.js",
      rules: { "misc/project-chore/eslintrc/sort-synonyms": "warn" }
    },
    {
      files: ".eslintrc.temp.js",
      rules: { "misc/project-chore/eslintrc/no-temp": "warn" }
    },
    { files: ".prettier.js", rules: { "misc/project-chore/prettier": "warn" } },
    {
      files: ["commitlint.scopes.js", "commitlint-next.scopes.js"],
      rules: { "misc/project-chore/sort-commitlint": "warn" }
    }
  ]
};
