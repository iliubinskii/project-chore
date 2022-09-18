module.exports = {
  collectCoverageFrom: [
    "{api,bin,commitlint,eslint,jest,package-json-lint,php-cs-fixer,phpstan,stylelint,tsconfig,typedoc}/**/*.{js,jsx,ts,tsx,vue}",
    "!**/*.d.ts"
  ],
  preset: "./jest/jest-preset",
  resolver: "./jest/resolver",
  testEnvironment: "./jest/environments/node",
  testSequencer: "./jest/sequencer"
};
