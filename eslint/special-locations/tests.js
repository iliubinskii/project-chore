module.exports = {
  extends: [
    "plugin:@skylib/eslint-plugin/jest",
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
    "@skylib/class-match-filename": "off",
    "@skylib/consistent-enum-members": "off",
    "@skylib/functions/guards/require-object-type-param": "off",
    "@skylib/no-at-sign-import": "off",
    "@skylib/no-at-sign-internal-import": ["warn", { allow: "@/test-utils" }],
    "@skylib/require-jsdoc": "off",
    "@skylib/sort-statements": [
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
    "@typescript-eslint/no-extraneous-class": "off",
    "max-classes-per-file": "off",
    "unicorn/no-null": "off"
  }
};
