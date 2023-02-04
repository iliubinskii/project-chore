module.exports = {
  extends: [
    "../plugins/react",
    "../plugins/react-hooks",
    "../plugins/react-native"
  ],
  overrides: [
    {
      files: "./src/setupTests.ts",
      rules: { "misc/consistent-filename": "off" }
    }
  ]
};
