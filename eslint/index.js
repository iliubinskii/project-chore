module.exports = {
  ignorePatterns: [
    "!.*",
    ".cache/**",
    ".expo/**",
    ".next/**",
    "coverage/**",
    "dist/**",
    "es/**",
    "node_modules/**",
    "out/**",
    "vendor/**"
  ],
  extends:
    // @sorted
    [
      "./plugins/core",
      "./plugins/css-modules",
      "./plugins/deprecation",
      "./plugins/es",
      "./plugins/escompat",
      "./plugins/eslint-comments",
      "./plugins/etc",
      "./plugins/github",
      "./plugins/import",
      "./plugins/jsdoc",
      "./plugins/misc",
      "./plugins/misc.project-chore",
      "./plugins/misc.typescript",
      "./plugins/no-type-assertion",
      "./plugins/no-use-extend-native",
      "./plugins/node",
      "./plugins/only-warn",
      "./plugins/pii",
      "./plugins/prettier",
      "./plugins/promise",
      "./plugins/regexp",
      "./plugins/security",
      "./plugins/sonarjs",
      "./plugins/sort-destructure-keys",
      "./plugins/sort-imports-requires",
      "./plugins/spellcheck",
      "./plugins/typescript-eslint",
      "./plugins/typescript-sort-keys",
      "./plugins/unicorn",
      "./plugins/unused-imports",
      "./plugins/xss"
    ],
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    project: "tsconfig.json",
    sourceType: "module"
  }
};
