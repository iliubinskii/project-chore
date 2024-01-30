module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: "plugin:misc/typescript",
      overrides: [
        {
          files: ["*.*.ts", "*.*.tsx"],
          rules: {
            "misc/consistent-filename": "off",
            "misc/only-export-name": "off",
            "misc/prefer-only-export": "off"
          }
        }
      ]
    }
  ]
};
