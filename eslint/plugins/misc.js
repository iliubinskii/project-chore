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
            emptyLine: "commented",
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
          { _id: "base-64", source: "base-64", wildcard: true },
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
            _id: "react",
            autoImport: true,
            localName: "React",
            source: "react"
          },
          {
            _id: "react-dom/client",
            autoImport: true,
            localName: "ReactDOM",
            source: "react-dom/client"
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
            _id: "real-service-providers/test-utils",
            altLocalNames: ["providersTestUtils"],
            source: "real-service-providers/src/test-utils",
            sourcePattern: "real-service-providers/{dist,es}/test-utils",
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
          "@fontsource/roboto/*",
          "@typescript-eslint/utils/dist/ts-eslint",
          "@vue/test-utils/dist/interfaces/wrapperLike",
          "@vue/test-utils/dist/types",
          "date-fns/locale/*",
          "flag-icon-css/flags/*/*.svg",
          "jest-extended/all",
          "quasar/wrappers",
          "react-dom/client",
          "real-config/api",
          "real-facades/dist/test-utils",
          "real-fns/dist/test-utils",
          "real-service-providers/dist/test-utils",
          "ts-toolbelt/**",
          "typeface-roboto-multilang/*.css"
        ]
      }
    ],
    "misc/no-shadow": [
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
      // eslint-disable-next-line no-warning-comments -- Wait for eslint-plugin-misc update
      // fixme
      files: ["index.js", "index.ts", "index.tsx"],
      rules: {
        "misc/consistent-filename": "off",
        "misc/only-export-name": "off",
        "misc/prefer-only-export": "off"
      }
    }
  ]
};
