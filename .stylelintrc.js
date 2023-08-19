module.exports = {
  extends: ["./stylelint/scss"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      { ignore: ["css-nesting"] }
    ]
  }
};
