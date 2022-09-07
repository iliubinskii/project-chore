module.exports = {
  extends: "plugin:misc/eslintrc",
  rules: {
    "misc/sort-keys": [
      "warn",
      {
        overrides: [
          {
            _id: "eslint",
            customOrder: [
              "files",
              "ignorePatterns",
              "extends",
              "env",
              "parser",
              "parserOptions",
              "plugins",
              "settings",
              "rules",
              "overrides"
            ],
            selector: [
              "AssignmentExpression[left.object.name=module][left.property.name=exports] > ObjectExpression",
              "Property[key.name=overrides] > ArrayExpression > ObjectExpression"
            ]
          },
          {
            _id: "misc",
            customOrder: [
              "_id",
              "filesToLint",
              "filesToSkip",
              "disallow",
              "allow"
            ],
            selector:
              "Property[key.value=/^misc\\u002F/u] > ArrayExpression > ObjectExpression"
          }
        ]
      }
    ]
  }
};
