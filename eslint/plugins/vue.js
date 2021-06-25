const { getAllRules } = require("./api");

module.exports = {
  overrides: [
    {
      files: "*.vue",
      plugins: ["vue"],
      rules: {
        ...getAllRules("eslint-plugin-vue"),
        "vue/attributes-order": [
          "warn",
          {
            alphabetical: true,
            order: [
              "DEFINITION",
              "LIST_RENDERING",
              "CONDITIONALS",
              "RENDER_MODIFIERS",
              "GLOBAL",
              "UNIQUE",
              "SLOT",
              "TWO_WAY_BINDING",
              "OTHER_DIRECTIVES",
              "OTHER_ATTR",
              "EVENTS",
              "CONTENT"
            ]
          }
        ],
        "vue/block-lang": ["warn", { script: { lang: "ts" } }],
        "vue/component-api-style": ["warn", ["composition"]],
        "vue/component-definition-name-casing": ["warn", "kebab-case"],
        "vue/component-options-name-casing": "off",
        "vue/custom-event-name-casing": ["warn", "camelCase"],
        "vue/match-component-file-name": "off",
        "vue/new-line-between-multi-line-property": "off",
        "vue/no-bare-strings-in-template": [
          "warn",
          {
            allowlist: [
              "(",
              ")",
              ",",
              ".",
              "&",
              "+",
              "-",
              "=",
              "*",
              "/",
              "#",
              "%",
              "!",
              "?",
              ":",
              "[",
              "]",
              "{",
              "}",
              "<",
              ">",
              "\u00B7",
              "\u2022",
              "\u2010",
              "\u2013",
              "\u2014",
              "\u2212",
              "|",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9"
            ]
          }
        ],
        "vue/no-multiple-template-root": "off",
        "vue/no-unused-properties": [
          "warn",
          {
            deepData: true,
            groups: ["computed", "data", "methods", "props", "setup"],
            ignorePublicMembers: false
          }
        ],
        "vue/no-unused-vars": [
          "warn",
          { ignorePattern: /^(?:_|omit)/u.source }
        ],
        "vue/no-v-model-argument": "off",
        "vue/object-shorthand": ["warn", "properties"],
        "vue/order-in-components": "off",
        "vue/return-in-computed-property": "off",
        "vue/sort-keys": "off",
        "vue/v-on-function-call": ["warn", "never"]
      }
    }
  ]
};
