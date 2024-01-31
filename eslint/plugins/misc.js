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
            _id: `${pkg.name}/src/test-utils`,
            source: `${pkg.name}/src/test-utils`,
            wildcard: true
          },
          {
            _id: "**/*.module.scss",
            localName: "style",
            source: "**/*.module.scss",
            sourcePattern: "**/*.module.scss"
          },
          {
            _id: "@fullcalendar/daygrid",
            autoImport: true,
            localName: "dayGridPlugin",
            source: "@fullcalendar/daygrid"
          },
          {
            _id: "@fullcalendar/react",
            autoImport: true,
            localName: "FullCalendar",
            source: "@fullcalendar/react"
          },
          {
            _id: "@react-native-async-storage/async-storage",
            autoImport: true,
            localName: "AsyncStorage",
            source: "@react-native-async-storage/async-storage"
          },
          {
            _id: "@react-native-community/slider",
            localName: "Slider",
            source: "@react-native-community/slider"
          },
          {
            _id: "@react-native-firebase/firestore",
            autoImport: true,
            localName: "firestore",
            source: "@react-native-firebase/firestore"
          },
          {
            _id: "@react-native-masked-view/masked-view",
            autoImport: true,
            localName: "MaskedView",
            source: "@react-native-masked-view/masked-view"
          },
          {
            _id: "@sinonjs/fake-timers",
            autoImport: true,
            source: "@sinonjs/fake-timers",
            wildcard: true
          },
          {
            _id: "base-64",
            autoImport: true,
            source: "base-64",
            wildcard: true
          },
          {
            _id: "base64-arraybuffer",
            autoImport: true,
            localName: "base64",
            source: "base64-arraybuffer",
            wildcard: true
          },
          {
            _id: "chartjs-plugin-zoom",
            autoImport: true,
            localName: "Zoom",
            source: "chartjs-plugin-zoom"
          },
          {
            _id: "estree",
            autoImport: true,
            source: "estree",
            wildcard: true
          },
          {
            _id: "expo-background-fetch",
            autoImport: true,
            localName: "BackgroundFetch",
            source: "expo-background-fetch",
            wildcard: true
          },
          {
            _id: "expo-notifications",
            autoImport: true,
            localName: "Notifications",
            source: "expo-notifications",
            wildcard: true
          },
          {
            _id: "expo-splash-screen",
            autoImport: true,
            localName: "SplashScreen",
            source: "expo-splash-screen",
            wildcard: true
          },
          {
            _id: "expo-task-manager",
            autoImport: true,
            localName: "TaskManager",
            source: "expo-task-manager",
            wildcard: true
          },
          {
            _id: "expo-updates",
            autoImport: true,
            localName: "Updates",
            source: "expo-updates",
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
            _id: "gravatar",
            autoImport: true,
            source: "gravatar",
            wildcard: true
          },
          { _id: "hyphenated-ru", localName: "ru", source: "hyphenated-ru" },
          {
            _id: "jest-extended/all",
            altLocalNames: ["jestExtendedMatchers"],
            autoImport: true,
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
            _id: "mui-image",
            autoImport: true,
            localName: "MuiImage",
            source: "mui-image"
          },
          { _id: "next/image", localName: "Image", source: "next/image" },
          { _id: "next/script", localName: "Script", source: "next/script" },
          {
            _id: "path",
            altLocalNames: ["nodePath"],
            autoImport: true,
            localName: "path",
            source: "node:path"
          },
          {
            _id: "react",
            autoImport: true,
            localName: "React",
            source: "react",
            wildcard: true
          },
          {
            _id: "react-dom/client",
            autoImport: true,
            localName: "ReactDOM",
            source: "react-dom/client"
          },
          {
            _id: "react-native-code-push",
            autoImport: true,
            localName: "CodePush",
            source: "react-native-code-push"
          },
          {
            _id: "react-native-country-flag",
            autoImport: true,
            localName: "CountryFlag",
            source: "react-native-country-flag"
          },
          {
            _id: "react-native-linear-gradient",
            autoImport: true,
            localName: "LinearGradient",
            source: "react-native-linear-gradient"
          },
          {
            _id: "react-native-qrcode-svg",
            autoImport: true,
            localName: "QrCode",
            source: "react-native-qrcode-svg"
          },
          {
            _id: "react-native-reanimated",
            autoImport: true,
            localName: "Animated",
            source: "react-native-reanimated"
          },
          {
            _id: "react-native-restart",
            localName: "Restart",
            source: "react-native-restart"
          },
          {
            _id: "react-native-sound",
            autoImport: true,
            localName: "Sound",
            source: "react-native-sound"
          },
          {
            _id: "react-native-svg",
            autoImport: true,
            localName: "Svg",
            source: "react-native-svg"
          },
          {
            _id: "react-native-swipe-gestures",
            localName: "GestureRecognizer",
            source: "react-native-swipe-gestures"
          },
          {
            _id: "realm",
            autoImport: true,
            localName: "Realm",
            source: "realm"
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
            _id: "typescript-misc/dist/test-utils",
            source: "typescript-misc/dist/test-utils",
            wildcard: true
          },
          {
            _id: "vscode",
            autoImport: true,
            source: "vscode",
            wildcard: true
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
          "@expo/vector-icons/build/createIconSet",
          "@fontsource/roboto/*",
          "@mui/material/locale",
          "@mui/x-date-pickers/AdapterDateFns",
          "@react-navigation/bottom-tabs/lib/typescript/src/types",
          "@typescript-eslint/utils/dist/ts-eslint",
          "@vercel/analytics/react",
          "@vercel/speed-insights/next",
          "country-flag-icons/react/1x1",
          "country-flag-icons/react/3x2",
          "date-fns/locale",
          "expo/metro-config",
          "expo-router/build/types",
          "firebase/app",
          "firebase/auth",
          "flag-icon-css/flags/*/*.svg",
          "jest-extended/all",
          "next/font/google",
          "next/image",
          "next/jest",
          "next/script",
          "project-chore/api",
          "react-dom/client",
          "react-native-vector-icons/*",
          "react-transition-group/CSSTransition",
          "redux-persist/integration/react",
          "ts-toolbelt/**",
          "typeface-roboto-multilang/*.css",
          "typescript-misc/dist/test-utils"
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
