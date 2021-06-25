/* eslint jest/max-expects: [warn, { max: 3 }] -- Ok */

// eslint-disable-next-line  @skylib/no-relative-parent-import, @skylib/typescript/no-shadow -- Ok
import { eslint, jest } from "../api";

test("eslint", () => {
  expect(eslint.getAllRules).toBeInstanceOf(Function);
  expect(typeof eslint.rules["@skylib/consistent-import"]).toBe("object");
  expect(typeof eslint.rules["@skylib/typescript/no-shadow"]).toBe("object");
});

test("jest", () => {
  expect(typeof jest.preset).toBe("object");
});
