module.exports = {
  overrides: [
    {
      files: "*.vue",
      extends: "plugin:misc/vue",
      rules: {
        "misc/consistent-filename": ["warn", { format: "PascalCase" }],
        "misc/require-jsdoc": "off",
        "misc/sort-keys": [
          "warn",
          {
            overrides: [
              {
                _id: "defineComponent",
                customOrder: [
                  "name",
                  "functional",
                  "components",
                  "directives",
                  "inheritAttrs",
                  "props",
                  "emits",
                  "setup",
                  "template"
                ],
                selector:
                  "CallExpression[callee.name=defineComponent] > ObjectExpression"
              }
            ]
          }
        ],
        "misc/sort-statements": [
          "warn",
          {
            programOrder: [
              "ImportDeclaration",
              "DeclareGlobal",
              "Declare",
              "ExportAllDeclaration",
              "ExportDeclaration",
              "ExportUnknown",
              "ExportTypeDeclaration",
              "ExportFunctionDeclaration",
              "Unknown",
              "TypeDeclaration",
              "FunctionDeclaration",
              "ExportDefaultDeclaration",
              "JestTest"
            ]
          }
        ]
      }
    }
  ]
};
