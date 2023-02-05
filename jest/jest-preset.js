/* eslint-disable github/unescaped-html-literal -- Ok */
/* eslint-disable xss/no-mixed-html -- Ok */

const fs = require("node:fs");

module.exports = {
  cacheDirectory: "./cache/jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,tsx,vue}", "!**/*.d.ts"],
  coverageDirectory: "./coverage",
  coverageReporters: ["lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  errorOnDeprecated: true,
  haste: { throwOnModuleCollision: true },
  maxWorkers: 1,
  moduleFileExtensions: ["js", "ts", "tsx", "vue"],
  moduleNameMapper: {
    [/^@$/u.source]: "<rootDir>/src",
    [/^@\/(.+)/u.source]: "<rootDir>/src/$1",
    [/^lodash-es$/u.source]: "lodash",
    [/^quasar$/u.source]:
      "<rootDir>/node_modules/quasar/dist/quasar.esm.prod.js",
    [/^uuid$/u.source]: "<rootDir>/node_modules/uuid/dist/index.js"
  },
  modulePathIgnorePatterns: [
    "/(?:\\.git|\\.quasar|\\.vscode|cache|coverage|dist|docs|es|node_modules)/"
  ],
  resolver: "real-config/jest/resolver",
  setupFiles: fs.existsSync("./jest.setup.ts") ? ["./jest.setup.ts"] : [],
  setupFilesAfterEnv: fs.existsSync("./jest.setup-after-env.ts")
    ? ["./jest.setup-after-env.ts"]
    : [],
  testEnvironment: "real-config/jest/environments/node",
  testMatch: ["<rootDir>/tests/**/*.{ts,tsx}"],
  testSequencer: "real-config/jest/sequencer",
  testTimeout: 10_000,
  transform: {
    [/\.(?:css|gif|jpg|less|png|sass|scss|styl|svg|ttf|woff|woff2)$/u.source]:
      "jest-transform-stub",
    [/\.(?:js|jsx)$/u.source]: "babel-jest",
    [/\.(?:ts|tsx)$/u.source]: [
      "ts-jest",
      { isolatedModules: true, tsconfig: "./tsconfig-min.json" }
    ],
    [/\.vue$/u.source]: "@vue/vue3-jest"
  },
  transformIgnorePatterns: [/\/node_modules\/(?!quasar\/)/u.source]
};
