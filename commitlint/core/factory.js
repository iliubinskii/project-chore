module.exports = sources => {
  const fs = require("node:fs");

  const path = require("node:path");

  const config = (() => {
    const result = { dirs: [], scopes: [] };

    for (const source of sources) {
      const part = require(fs.realpathSync(source));

      if (part.scopes) result.scopes.push(...part.scopes);

      if (part.dirs) result.dirs.push(...part.dirs);
    }

    return result;
  })();

  const types =
    // @sorted
    [
      "build",
      "chore",
      "docs",
      "feat",
      "fix",
      "perf",
      "refactor",
      "revert",
      "style",
      "test"
    ];

  const defaultScopes =
    // @sorted
    [
      "assets",
      "auto-eslint",
      "auto-json",
      "auto-linebreaks",
      "auto-markdownlint",
      "auto-stylelint",
      "babel",
      "browserlist",
      "changelog",
      "commitlint",
      "deps-major-update",
      "deps-update",
      "eas",
      "env",
      "eslint",
      "expo",
      "fix",
      "git",
      "github",
      "husky",
      "jest",
      "markdownlint",
      "npm",
      "package",
      "package-json-lint",
      "perf",
      "pre-commit",
      "readme",
      "recommended-config-lint",
      "recommended-eslint",
      "recommended-markdownlint",
      "recommended-package-json-lint",
      "recommended-stylelint",
      "refactor",
      "revert",
      "style",
      "stylelint",
      "typedoc",
      "typescript",
      "vscode",
      "workflows"
    ];

  const scopes = unique([
    ...defaultScopes,
    ...config.scopes,
    ...scopesFromDirectories(config.dirs)
  ]);

  return {
    extends: ["@commitlint/config-conventional"],
    ignores: [commit => ignore(commit)],
    rules: {
      "scope-enum": [2, "always", [...scopes]],
      "subject-case": [2, "always", ["sentence-case"]],
      "type-enum": [2, "always", types]
    }
  };

  function ignore(commit) {
    commit = commit.trimEnd();

    // eslint-disable-next-line regexp/no-obscure-range -- Ok
    if (/[A-Za-z][\d_]*[А-Яа-я]|[А-Яа-я][\d_]*[A-Za-z]/u.test(commit))
      throw new Error("No language mixing");

    if (/^(?:initial commit|refactor|style)$/u.test(commit)) return true;

    if (/^(?:build|chore)\(deps-update\)$/u.test(commit)) return true;

    if (/^(?:chore|docs|test)\((?:refactor|style)\)$/u.test(commit))
      return true;

    {
      const re = /^(?:refactor|style)\(([^),]+)\)$/u;

      const matches = commit.match(re);

      if (matches && scopes.includes(matches[1])) return true;
    }

    {
      const re = /^(?:chore|docs|test)\((?:refactor|style),([^),]+)\)$/u;

      const matches = commit.match(re);

      if (matches && scopes.includes(matches[1])) return true;
    }

    {
      const re = /^(?:refactor|style)\(([^),]+),([^),]+)\)$/u;

      const matches = commit.match(re);

      if (matches && scopes.includes(matches[1]) && scopes.includes(matches[2]))
        return true;
    }

    {
      const re =
        /^(?:chore|docs|test)\((?:refactor|style),([^),]+),([^),]+)\)$/u;

      const matches = commit.match(re);

      if (matches && scopes.includes(matches[1]) && scopes.includes(matches[2]))
        return true;
    }

    return false;
  }

  function scopesFromDirectories(directories) {
    const result = [];

    for (const dir of directories) if (fs.existsSync(dir)) recurs(dir);

    return result;

    function recurs(subdir) {
      for (const base of fs.readdirSync(subdir)) {
        const { name } = path.parse(base);

        const filename = path.join(subdir, base);

        result.push(name);

        if (fs.lstatSync(filename).isDirectory()) recurs(filename);
      }
    }
  }

  function unique(array) {
    return [...new Set(array).values()];
  }
};
