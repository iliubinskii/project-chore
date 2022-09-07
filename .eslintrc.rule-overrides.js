module.exports = {
  rules: {
    "misc/no-sibling-import": [
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
