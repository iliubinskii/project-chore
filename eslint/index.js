module.exports = {
  ignorePatterns: [
    "!.*",
    ".quasar/**",
    "cache/**",
    "coverage/**",
    "dist/**",
    "es/**",
    "node_modules/**",
    "out/**",
    "vendor/**"
  ],
  extends: "./plugins",
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
