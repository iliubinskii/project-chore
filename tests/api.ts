/* eslint jest/max-expects: [warn, { max: 4 }] -- Ok */

// eslint-disable-next-line misc/no-relative-parent-import, misc/no-shadow -- Ok
import { eslint, jest } from "../api";

test("eslint", () => {
  expect(eslint.getAllRules).toBeInstanceOf(Function);
  expect(typeof eslint.rules["misc/consistent-import"]).toBe("object");
  expect(typeof eslint.rules["misc/no-shadow"]).toBe("object");
  expect(typeof eslint.rules["spellcheck/spell-checker"]).toBe("object");
});

test("jest", () => {
  expect(typeof jest.preset).toBe("object");
});
