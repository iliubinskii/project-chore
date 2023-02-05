module.exports = {
  collectCoverageFrom: ["api/**/*.{js,jsx,ts,tsx,vue}", "!**/*.d.ts"],
  preset: "./jest/jest-preset",
  resolver: "./jest/resolver",
  testEnvironment: "./jest/environments/node",
  testSequencer: "./jest/sequencer"
};
