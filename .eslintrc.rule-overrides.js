module.exports = {
  rules: {
    "@skylib/no-sibling-import": [
      "warn",
      {
        rules: [
          {
            filesToLint: ["./*"],
            hierarchy: [["./jest.config"], ["./jest.config.fast"]]
          }
        ]
      }
    ]
  }
};
