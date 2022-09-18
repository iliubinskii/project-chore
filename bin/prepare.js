try {
  const husky = require("husky");

  husky.install();
} catch (e) {
  if (e.code === "MODULE_NOT_FOUND") {
    // Expected
  } else throw e;
}
