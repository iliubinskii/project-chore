const fs = require("node:fs");

const pkg = require(fs.realpathSync("./package.json"));

const block =
  ":matches(BlockStatement, ExportNamedDeclaration, Program, SwitchCase, TSModuleBlock)";

module.exports = {
  extends: "plugin:misc/core",
  plugins: ["misc"],
  rules: {
    "misc/consistent-empty-lines": [
      "warn",
      {
        rules: [
          {
            _id: "arguments",
            emptyLine: "never",
            selector: "CallExpression > .arguments"
          },
          {
            _id: "body",
            emptyLine: "never",
            selector: "TSInterfaceBody > .body"
          },
          {
            _id: "elements",
            emptyLine: "never",
            selector: "ArrayExpression > .elements"
          },
          { _id: "enum-members", emptyLine: "never", selector: "TSEnumMember" },
          {
            _id: "members",
            emptyLine: "never",
            selector: "TSTypeLiteral > .members"
          },
          { _id: "params", emptyLine: "never", selector: ".params" },
          {
            _id: "properties",
            emptyLine: "never",
            selector: ":matches(ObjectExpression, ObjectPattern) > .properties"
          },
          {
            _id: "statements",
            emptyLine: "always",
            selector: `${block} > :matches(:statement, TSDeclareFunction, TSExportAssignment)`
          },
          {
            _id: "statements.export",
            emptyLine: "never",
            selector: `${block} > :matches(ExportAllDeclaration, ExportNamedDeclaration[source])`
          },
          {
            _id: "statements.expression-statement",
            emptyLine: "never",
            selector: `${block} > ExpressionStatement`
          },
          {
            _id: "statements.import",
            emptyLine: "never",
            selector: `${block} > ImportDeclaration`
          },
          {
            _id: "statements.test",
            emptyLine: "always",
            next: [
              `${block} > ExpressionStatement[expression.callee.name=test]`,
              `${block} > ExpressionStatement[expression.callee.object.name=test][expression.callee.property.name=/^(?:only|skip)$/u]`,
              `${block} > ExpressionStatement[expression.callee.callee.object.name=test][expression.callee.callee.property.name=each]`,
              `${block} > ExpressionStatement[expression.callee.callee.object.object.name=test][expression.callee.callee.object.property.name=/^(?:only|skip)$/u][expression.callee.callee.property.name=each]`
            ],
            prev: `${block} > :matches(:statement, TSDeclareFunction, TSExportAssignment)`
          }
        ]
      }
    ],
    "misc/consistent-filename": [
      "warn",
      {
        overrides: [
          {
            _id: "classes",
            format: "PascalCase",
            match: true,
            selector: "ClassDeclaration > Identifier.id"
          }
        ]
      }
    ],
    "misc/consistent-import": [
      "warn",
      {
        sources: [
          {
            _id: "./src/test-utils",
            source: `${pkg.name}/src/test-utils`,
            wildcard: true
          },
          {
            _id: "@sinonjs/fake-timers",
            autoImport: true,
            source: "@sinonjs/fake-timers",
            wildcard: true
          },
          {
            _id: "@vue/test-utils",
            altLocalNames: ["vueTestUtils"],
            autoImport: true,
            source: "@vue/test-utils",
            wildcard: true
          },
          {
            _id: "@vue/test-utils",
            autoImport: true,
            localName: "WrapperLike",
            source: "@vue/test-utils/dist/interfaces/wrapperLike"
          },
          {
            _id: "estree",
            autoImport: true,
            source: "estree",
            wildcard: true
          },
          {
            _id: "fs",
            altLocalNames: ["nodeFs"],
            autoImport: true,
            localName: "fs",
            source: "node:fs"
          },
          {
            _id: "jest-extended/all",
            altLocalNames: ["jestExtendedMatchers"],
            localName: "matchers",
            source: "jest-extended/all"
          },
          {
            _id: "jquery",
            autoImport: true,
            localName: "$",
            source: "jquery"
          },
          {
            _id: "lodash-commonjs-es",
            autoImport: true,
            localName: "_",
            source: "lodash-commonjs-es",
            wildcard: true
          },
          {
            _id: "minisearch",
            autoImport: true,
            localName: "MiniSearch",
            source: "minisearch"
          },
          {
            _id: "path",
            altLocalNames: ["nodePath"],
            autoImport: true,
            localName: "path",
            source: "node:path"
          },
          {
            _id: "quasar-extension/test-utils",
            altLocalNames: ["quasarExtensionTestUtils"],
            source: "quasar-extension/src/test-utils",
            sourcePattern: "quasar-extension/{dist,es}/test-utils",
            wildcard: true
          },
          {
            _id: "real-facades/test-utils",
            altLocalNames: ["facadesTestUtils"],
            source: "real-facades/src/test-utils",
            sourcePattern: "real-facades/{dist,es}/test-utils",
            wildcard: true
          },
          {
            _id: "real-fns/test-utils",
            altLocalNames: ["fnsTestUtils"],
            source: "real-fns/src/test-utils",
            sourcePattern: "real-fns/{dist,es}/test-utils",
            wildcard: true
          },
          {
            _id: "real-framework/test-utils",
            altLocalNames: ["frameworkTestUtils"],
            source: "real-framework/src/test-utils",
            sourcePattern: "real-framework/{dist,es}/test-utils",
            wildcard: true
          },
          {
            _id: "tsutils",
            autoImport: true,
            source: "tsutils",
            wildcard: true
          },
          {
            _id: "typescript",
            autoImport: true,
            localName: "ts",
            source: "typescript",
            wildcard: true
          },
          {
            _id: "vscode",
            autoImport: true,
            source: "vscode",
            wildcard: true
          },
          {
            _id: "vue",
            autoImport: true,
            localName: "Vue",
            source: "vue"
          },
          {
            _id: "vue-router",
            autoImport: true,
            localName: "VueRouter",
            source: "vue-router"
          },
          {
            _id: "vuedraggable",
            autoImport: true,
            localName: "VueDraggable",
            source: "vuedraggable"
          },
          { _id: "catch-all", source: "**" }
        ]
      }
    ],
    "misc/no-internal-modules": [
      "warn",
      {
        allow: [
          "./src/test-utils",
          "@typescript-eslint/utils/dist/ts-eslint",
          "@vue/test-utils/dist/interfaces/wrapperLike",
          "@vue/test-utils/dist/types",
          "date-fns/locale/*",
          "flag-icon-css/flags/*/*.svg",
          "jest-extended/all",
          "quasar/wrappers",
          "real-config/api",
          "real-facades/dist/test-utils",
          "real-fns/dist/test-utils",
          "real-framework/dist/test-utils",
          "ts-toolbelt/**",
          "typeface-roboto-multilang/*.css"
        ]
      }
    ],
    "misc/sort-class-members": [
      "warn",
      {
        sortingOrder: [
          "public-static-field",
          "public-static-accessor",
          "public-static-constructor",
          "public-static-method",
          "signature",
          "public-dynamic-field",
          "public-dynamic-accessor",
          "public-dynamic-constructor",
          "public-dynamic-method",
          "protected-static-field",
          "protected-static-accessor",
          "protected-static-constructor",
          "protected-static-method",
          "protected-dynamic-field",
          "protected-dynamic-accessor",
          "protected-dynamic-constructor",
          "protected-dynamic-method",
          "private-static-field",
          "private-static-accessor",
          "private-static-constructor",
          "private-static-method",
          "private-dynamic-field",
          "private-dynamic-accessor",
          "private-dynamic-constructor",
          "private-dynamic-method"
        ]
      }
    ]
  },
  overrides: [
    {
      files: "!*.js",
      extends: "plugin:misc/typescript",
      rules: {
        "misc/typescript/no-shadow": [
          "warn",
          {
            allow: [
              "Plugin",
              "ReadonlyMap",
              "ReadonlySet",
              "constructor",
              "event",
              "name"
            ],
            builtinGlobals: true,
            hoist: "all",
            // eslint-disable-next-line misc/max-identifier-blocks -- Ok
            ignoreFunctionTypeParameterNameValueShadow: false,
            ignoreTypeValueShadow: true
          }
        ]
      }
    },
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
    },
    {
      files: "*.*.ts",
      rules: {
        "misc/consistent-filename": "off",
        "misc/only-export-name": "off",
        "misc/prefer-only-export": "off"
      }
    },
    {
      files: "index.ts",
      rules: {
        "misc/only-export-name": "off",
        "misc/prefer-only-export": "off"
      }
    }
  ]
};
