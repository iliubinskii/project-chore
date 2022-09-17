import fs from "node:fs";
import path from "node:path";

export { default as fs } from "node:fs";
export { default as path } from "node:path";

export const a = import(
  /* webpackChunkName: "dynamic/a" */
  "node:buffer"
);

export const b = import(
  /* webpackChunkName: "dynamic/a/b" */
  "node:buffer"
);

export const constructor = 1;

fs.existsSync("");
path.basename("");
