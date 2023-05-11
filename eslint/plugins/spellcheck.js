module.exports = {
  plugins: ["spellcheck"],
  rules: {
    "spellcheck/spell-checker": [
      "warn",
      {
        minLength: 3,
        skipWordIfMatch: [
          /^[A-Za-z]{1,2}\d+$/u.source,
          /^\d+[A-Za-z]{1,2}$/u.source
        ],
        skipWords:
          // @sorted
          [
            "aaa",
            "abc",
            "accessor",
            "allowlist",
            "ast",
            "asyncs",
            "autofix",
            "axios",
            "basedir",
            "bbb",
            "bitfield",
            "bitwise",
            "booleans",
            "browserlist",
            "bundler",
            "calc",
            "callee",
            "camelcase",
            "canonicalize",
            "canonicalizes",
            "ccc",
            "changelog",
            "chartjs",
            "checkbox",
            "chunkname",
            "commitlint",
            "commonjs",
            "completable",
            "conds",
            "confirmable",
            "consts",
            "ctor",
            "ctx",
            "datasets",
            "datetime",
            "daygrid",
            "ddd",
            "debounce",
            "declarator",
            "deletable",
            "destructure",
            "destructured",
            "discordjs",
            "dnd",
            "dom",
            "dotenv",
            "droppable",
            "durations",
            "ecma",
            "eee",
            "eng",
            "english",
            "enqueue",
            "enqueues",
            "enum",
            "enums",
            "eol",
            "escompat",
            "eslintrc",
            "estree",
            "facebook",
            "falsish",
            "favicon",
            "fff",
            "fixme",
            "flexbox",
            "focusable",
            "fontsource",
            "fullcalendar",
            "func",
            "gapi",
            "getters",
            "ggg",
            "globals",
            "gmail",
            "gte",
            "gzip",
            "harbour",
            "hhh",
            "ico",
            "indexable",
            "inexhaustive",
            "javascript",
            "jpg",
            "jsdoc",
            "jsdom",
            "jsonschema",
            "jsx",
            "keyframes",
            "lang",
            "latin",
            "lightbox",
            "linebreaks",
            "loc",
            "lstat",
            "lte",
            "lunr",
            "markdownlint",
            "matcher",
            "matchers",
            "mdash",
            "mdi",
            "middlewares",
            "minimatch",
            "minisearch",
            "monday",
            "mui",
            "multicolumn",
            "multilang",
            "multiline",
            "namespace",
            "neq",
            "nevers",
            "newtab",
            "nlp",
            "nlu",
            "nodejs",
            "noopener",
            "noreferrer",
            "nullable",
            "num",
            "overline",
            "parens",
            "pathname",
            "perf",
            "php",
            "phpstan",
            "pii",
            "plusplus",
            "pos",
            "postcss",
            "postponable",
            "pouchdb",
            "preconfigured",
            "prepend",
            "pwa",
            "quasis",
            "readdir",
            "readme",
            "readonly",
            "realpath",
            "recs",
            "redeclare",
            "reindex",
            "replacer",
            "repliable",
            "rereduce",
            "resizable",
            "resize",
            "resizer",
            "resolvables",
            "reviver",
            "roboto",
            "routable",
            "rtl",
            "schemas",
            "scrollable",
            "scrollbar",
            "sdk",
            "searchable",
            "sinonjs",
            "smacss",
            "snackbar",
            "sonarjs",
            "ssr",
            "starrable",
            "str",
            "stringifies",
            "strs",
            "stylelint",
            "styles",
            "subcommand",
            "subcommands",
            "subcomponent",
            "subdir",
            "subfolder",
            "subname",
            "suboption",
            "suboptions",
            "subtest",
            "subtype",
            "subtypes",
            "sunday",
            "svg",
            "swipeable",
            "toolbelt",
            "tooltip",
            "tooltips",
            "transitionend",
            "transpile",
            "tsconfig",
            "tsutils",
            "tsx",
            "typedoc",
            "typeof",
            "uglified",
            "unary",
            "uncapitalize",
            "uncomplete",
            "undef",
            "unescaped",
            "unmount",
            "unpad",
            "unpadded",
            "unpads",
            "unpostpone",
            "unserialized",
            "unserializes",
            "unshifts",
            "unstar",
            "unstarred",
            "vercel",
            "vscode",
            "vue",
            "vuedraggable",
            "webpack",
            "whitespace",
            "wildcard",
            "workbox",
            "wrappable",
            "xss",
            "xyz"
          ]
      }
    ]
  }
};
