module.exports = {
  overrides: [
    { files: ["*.ts", "*.tsx", "*.vue"], extends: "plugin:misc/typescript" },
    {
      files: "*.*.ts",
      rules: {
        "misc/consistent-filename": "off",
        "misc/only-export-name": "off",
        "misc/prefer-only-export": "off"
      }
    }
  ]
};
