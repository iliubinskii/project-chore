module.exports = {
  rules: {
    "font-family-name-quotes": "always-unless-keyword",
    "selector-class-pattern": [
      /^[\w-]+$/u.source,
      { resolveNestedSelectors: true }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["deep", "global"] }
    ]
  }
};
