try {
  const husky = require("husky");

  const isCi = require("is-ci");

  if (isCi) {
    // Running on a CI server
  } else husky.install();
} catch (e) {
  if (e.code === "MODULE_NOT_FOUND") {
    // Expected
  } else throw e;
}
