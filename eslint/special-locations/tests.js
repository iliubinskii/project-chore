module.exports = {
  extends: [
    "plugin:misc/jest",
    "../plugins/jest",
    "../plugins/jest-extended",
    "../options/allow-nodejs-modules",
    "../options/allow-require",
    "../options/allow-require-unsafe",
    "../options/skip-filename-check",
    "../options/skip-html-literal-check"
  ],
  env: { jest: true },
  rules: {
    "@typescript-eslint/no-extraneous-class": "off",
    "max-classes-per-file": "off",
    "misc/class-match-filename": "off",
    "misc/consistent-enum-members": "off",
    "misc/functions/guards/require-object-type-param": "off",
    "misc/no-at-sign-import": "off",
    "misc/no-at-sign-internal-import": ["warn", { allow: "@/test-utils" }],
    "misc/require-jsdoc": "off",
    "misc/sort-statements": [
      "warn",
      {
        programOrder: [
          "ImportDeclaration",
          "ExportAllDeclaration",
          "ExportDeclaration",
          "ExportDefaultDeclaration",
          "ExportUnknown",
          "ExportTypeDeclaration",
          "ExportFunctionDeclaration",
          "TypeDeclaration",
          "FunctionDeclaration",
          "Unknown",
          "JestTest"
        ]
      }
    ],
    "unicorn/no-null": "off"
  }
};
