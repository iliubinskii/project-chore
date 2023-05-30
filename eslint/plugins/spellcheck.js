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
            "appbar",
            "argv",
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
            "cjs",
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
            "dec",
            "declarator",
            "decrementor",
            "deletable",
            "destructure",
            "destructured",
            "discordjs",
            "dnd",
            "dom",
            "dotenv",
            "droppable",
            "durations",
            "eas",
            "ecma",
            "eee",
            "eng",
            "english",
            "enqueue",
            "enqueues",
            "entypo",
            "enum",
            "enums",
            "eol",
            "escompat",
            "eslintrc",
            "estree",
            "exts",
            "facebook",
            "falsish",
            "favicon",
            "fff",
            "firebase",
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
            "incrementor",
            "indexable",
            "inexhaustive",
            "ionicons",
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
            "mongodb",
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
            "pressable",
            "pwa",
            "quasis",
            "readdir",
            "readme",
            "readonly",
            "realpath",
            "recs",
            "rect",
            "redeclare",
            "reindex",
            "renderer",
            "replacer",
            "repliable",
            "rereduce",
            "rerender",
            "resizable",
            "resize",
            "resizer",
            "resolvables",
            "responder",
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
            "stateful",
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
            "toggler",
            "toolbelt",
            "tooltip",
            "tooltips",
            "transitionend",
            "transpile",
            "tsconfig",
            "tsutils",
            "tsx",
            "ttf",
            "typedoc",
            "typeof",
            "uglified",
            "uid",
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
            "unsetter",
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
            "worklet",
            "wrappable",
            "xss",
            "xyz"
          ]
      }
    ]
  }
};
