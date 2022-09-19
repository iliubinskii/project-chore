module.exports = {
  collectCoverageFrom: ["api/**/*.{js,ts,vue}", "!**/*.d.ts"],
  preset: "./jest/jest-preset",
  resolver: "./jest/resolver",
  testEnvironment: "./jest/environments/node",
  testSequencer: "./jest/sequencer"
};
