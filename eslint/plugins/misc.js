const fs = require("node:fs");

const pkg = require(fs.realpathSync("./package.json"));

const { selectors } = require("./api");

module.exports = {
  extends: "plugin:misc/core",
  plugins: ["misc"],
  rules: {
    "misc/consistent-empty-lines": [
      "warn",
      {
        rules: [
          {
            _id: "Enum",
            emptyLine: "never",
            next: "TSEnumMember",
            prev: "TSEnumMember"
          },
          {
            _id: "arguments",
            emptyLine: "never",
            next: "CallExpression > .arguments",
            prev: "CallExpression > .arguments"
          },
          {
            _id: "body",
            emptyLine: "never",
            next: "TSInterfaceBody > .body",
            prev: "TSInterfaceBody > .body"
          },
          {
            _id: "elements",
            emptyLine: "never",
            next: "ArrayExpression > .elements",
            prev: "ArrayExpression > .elements"
          },
          {
            _id: "members",
            emptyLine: "never",
            next: "TSTypeLiteral > .members",
            prev: "TSTypeLiteral > .members"
          },
          {
            _id: "params",
            emptyLine: "never",
            next: ".params",
            prev: ".params"
          },
          {
            _id: "properties",
            emptyLine: "never",
            next: "ObjectExpression > .properties",
            prev: "ObjectExpression > .properties"
          },
          {
            _id: "statement",
            emptyLine: "always",
            next: `:matches(${selectors.block}) > :matches(${selectors.statement})`,
            prev: `:matches(${selectors.block}) > :matches(${selectors.statement})`
          },
          {
            _id: "statement.ExportNamedDeclaration",
            emptyLine: "never",
            next: `:matches(${selectors.block}) > ExportNamedDeclaration[source]`,
            prev: `:matches(${selectors.block}) > ExportNamedDeclaration[source]`
          },
          {
            _id: "statement.ExpressionStatement",
            emptyLine: "never",
            next: `:matches(${selectors.block}) > ExpressionStatement`,
            prev: `:matches(${selectors.block}) > ExpressionStatement`
          },
          {
            _id: "statement.ImportDeclaration",
            emptyLine: "never",
            next: `:matches(${selectors.block}) > ImportDeclaration`,
            prev: `:matches(${selectors.block}) > ImportDeclaration`
          },
          {
            _id: "statement.test",
            emptyLine: "always",
            next: [
              `:matches(${selectors.block}) > ExpressionStatement[expression.callee.name=test]`,
              `:matches(${selectors.block}) > ExpressionStatement[expression.callee.object.name=test][expression.callee.property.name=/^(?:only|skip)$/u]`,
              `:matches(${selectors.block}) > ExpressionStatement[expression.callee.callee.object.name=test][expression.callee.callee.property.name=each]`,
              `:matches(${selectors.block}) > ExpressionStatement[expression.callee.callee.object.object.name=test][expression.callee.callee.object.property.name=/^(?:only|skip)$/u][expression.callee.callee.property.name=each]`
            ],
            prev: `:matches(${selectors.block}) > :matches(${selectors.statement})`
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
            _id: "real-facades/test-utils",
            altLocalNames: ["facadesTestUtils"],
            source: "real-facades/src/test-utils",
            sourcePattern: "real-facades/{dist,es}/test-utils",
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
            _id: "real-fns/test-utils",
            altLocalNames: ["functionsTestUtils"],
            source: "real-fns/src/test-utils",
            sourcePattern: "real-fns/{dist,es}/test-utils",
            wildcard: true
          },
          {
            _id: "lodash-commonjs-es",
            autoImport: true,
            localName: "_",
            source: "lodash-commonjs-es",
            wildcard: true
          },
          {
            _id: "quasar-extension/test-utils",
            altLocalNames: ["quasarTestUtils"],
            source: "quasar-extension/src/test-utils",
            sourcePattern: "quasar-extension/{dist,es}/test-utils",
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
    "misc/consistent-optional-props": [
      "warn",
      { classes: "undefined", interfaces: "optional" }
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
    "misc/no-sibling-import": "warn",
    "misc/object-format": ["warn", { maxLineLength: 80, maxObjectSize: 3 }],
    "misc/require-jsdoc": [
      "warn",
      {
        excludeSelectors: ["ClassDeclaration", "FunctionDeclaration"],
        includeSelectors: [
          `:matches(${selectors.documentedBlock}) >  FunctionDeclaration`,
          `:matches(${selectors.documentedBlock}) >  VariableDeclaration > .declarations > .id > .typeAnnotation > TSFunctionType`,
          `:matches(${selectors.documentedBlock}) >  VariableDeclaration > .declarations[id.typeAnnotation=undefined] > ObjectExpression > .properties > :matches(${selectors.functionExpression})`,
          `:matches(${selectors.documentedBlock}) >  VariableDeclaration > .declarations[id.typeAnnotation=undefined] > TSAsExpression > ObjectExpression > .properties > :matches(${selectors.functionExpression})`,
          `PropertyDefinition > :matches(${selectors.functionExpression})`
        ],
        interfaces: ["callSignatures", "constructSignatures"],
        properties: ["function"]
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
