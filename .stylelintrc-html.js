module.exports = {
  extends: ["./stylelint/html"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      { ignore: ["css-nesting"] }
    ]
  }
};
