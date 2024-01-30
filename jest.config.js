module.exports = {
  collectCoverageFrom: ["api/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
  preset: "./jest/jest-preset",
  resolver: "./jest/resolver",
  testEnvironment: "./jest/environments/node",
  testSequencer: "./jest/sequencer"
};
