const { getAllRules } = require("./api");

module.exports = {
  plugins: ["import"],
  settings: { "import/resolver": { typescript: { project: "tsconfig.json" } } },
  rules: {
    ...getAllRules("eslint-plugin-import"),
    "import/dynamic-import-chunkname": [
      "warn",
      {
        importFunctions: ["dynamicImport"],
        webpackChunknameFormat: /dynamic\/[\w+\-/]+/u.source
      }
    ],
    "import/export": "off",
    "import/exports-last": "off",
    "import/extensions": "off",
    "import/group-exports": "off",
    "import/max-dependencies": "off",
    "import/newline-after-import": "off",
    "import/no-anonymous-default-export": "off",
    "import/no-cycle": "off",
    "import/no-deprecated": "off",
    "import/no-duplicates": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "import/no-named-export": "off",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-relative-packages": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-self-import": "off",
    "import/no-unassigned-import": [
      "warn",
      {
        allow:
          // @sorted
          [
            "**/*.css",
            "**/*.sass",
            "**/*.scss",
            "@testing-library/jest-dom",
            "jest-extended",
            "react-native-gesture-handler",
            "react-native-get-random-values",
            "reflect-metadata"
          ]
      }
    ],
    "import/order": "off",
    "import/prefer-default-export": "off",
    "import/unambiguous": "off"
  },
  overrides: [
    { files: ["*.js", "*.jsx"], rules: { "import/no-commonjs": "off" } },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/default": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-named-as-default": "off",
        "import/no-unresolved": "off"
      },
      overrides: [
        { files: "*.d.ts", rules: { "import/no-default-export": "off" } }
      ]
    }
  ]
};
