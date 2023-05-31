// eslint-disable-next-line no-console -- Ok
console.log(
  Buffer.from(process.argv[2].replace(/:/gu, ""), "hex").toString("base64")
);
