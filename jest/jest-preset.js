/* eslint-disable github/unescaped-html-literal -- Ok */
/* eslint-disable xss/no-mixed-html -- Ok */

const fs = require("node:fs");

module.exports = {
  cacheDirectory: "./.cache/jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
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
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    [/^@$/u.source]: "<rootDir>/src",
    [/^@\/(.+)/u.source]: "<rootDir>/src/$1",
    [/^lodash-es$/u.source]: "lodash",
    [/^uuid$/u.source]: "<rootDir>/node_modules/uuid/dist/index.js"
  },
  modulePathIgnorePatterns: [
    "/(?:\\.cache|\\.git|\\.vscode|coverage|dist|docs|es|node_modules)/"
  ],
  resolver: "project-chore/jest/resolver",
  setupFiles: fs.existsSync("./jest.setup.ts") ? ["./jest.setup.ts"] : [],
  setupFilesAfterEnv: fs.existsSync("./jest.setup-after-env.ts")
    ? ["./jest.setup-after-env.ts"]
    : [],
  testEnvironment: "project-chore/jest/environments/node",
  testMatch: [
    "<rootDir>/src/**/*.test.{ts,tsx}",
    "<rootDir>/src/**/__tests__/*.{ts,tsx}",
    "<rootDir>/tests/**/*.{ts,tsx}"
  ],
  testSequencer: "project-chore/jest/sequencer",
  testTimeout: 10_000,
  transform: {
    [/\.(?:css|gif|jpg|less|png|sass|scss|styl|svg|ttf|woff|woff2)$/u.source]:
      "jest-transform-stub",
    [/\.(?:js|jsx)$/u.source]: "babel-jest",
    [/\.(?:ts|tsx)$/u.source]: [
      "ts-jest",
      { isolatedModules: true, tsconfig: "./tsconfig-min.json" }
    ]
  },
  transformIgnorePatterns: [/\/node_modules\//u.source]
};
