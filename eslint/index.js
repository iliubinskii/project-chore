module.exports = {
  ignorePatterns: [
    "!.*",
    ".quasar/**",
    "dist/**",
    "es/**",
    "lcov-report/**",
    "node_modules/**"
  ],
  extends: ["./plugins"],
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2017,
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    project: "tsconfig.json",
    sourceType: "module"
  }
};
