/* eslint jest/max-expects: [warn, { max: 3 }] -- Ok */

// eslint-disable-next-line misc/no-relative-parent-import, misc/typescript/no-shadow -- Ok
import { eslint, jest } from "../api";

test("eslint", () => {
  expect(eslint.getAllRules).toBeInstanceOf(Function);
  expect(typeof eslint.rules["misc/consistent-import"]).toBe("object");
  expect(typeof eslint.rules["misc/typescript/no-shadow"]).toBe("object");
});

test("jest", () => {
  expect(typeof jest.preset).toBe("object");
});
