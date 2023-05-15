module.exports = {
  extends: [
    "plugin:misc/jest",
    "../plugins/jest",
    "../plugins/jest-extended",
    "../options/allow-nodejs-modules",
    "../options/allow-require",
    "../options/allow-require-unsafe",
    "../options/skip-filename-check",
    "../options/skip-html-literal-check"
  ],
  env: { jest: true },
  rules: {
    "@typescript-eslint/no-extraneous-class": "off",
    "max-classes-per-file": "off",
    "misc/class-match-filename": "off",
    "misc/consistent-enum-members": "off",
    "misc/no-at-sign-import": "off",
    "misc/no-at-sign-internal-import": ["warn", { allow: "@/test-utils" }],
    // eslint-disable-next-line no-warning-comments -- Wait for eslint-plugin-misc to take account for .test.ts(x)
    // fixme
    "misc/no-sibling-import": "off",
    "misc/real-fns/guards/require-object-type-param": "off",
    "misc/require-jsdoc": "off",
    "react/jsx-no-literals": "off",
    "react/no-multi-comp": "off",
    "react-native/no-raw-text": "off",
    "unicorn/no-null": "off"
  }
};
