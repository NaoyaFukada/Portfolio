// Reference: https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
import "@testing-library/jest-dom/vitest";

if (typeof TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
