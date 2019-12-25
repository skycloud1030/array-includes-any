/**
 * @jest-environment node
 */
const Module = require("../dist/wasm/array-includes-any.js");
const library = new Module();
const moduleReady = () => {
  return new Promise(resolve => {
    library.onRuntimeInitialized = function() {
      resolve();
    };
  });
};


describe("Wasm Tests", () => {
  beforeAll(async () => {
    await moduleReady();
  });
  it("Function is exist", () => {
    expect(typeof library.array_includes_any).toBe("function");
  });
  it("Any Mode", () => {
    expect(library.array_includes_any([1, 2], [1, 2])).toBe(true);
    expect(library.array_includes_any([1, 2], [1])).toBe(true);
    expect(library.array_includes_any([], [2, 1])).toBe(false);
    expect(library.array_includes_any([1, 2, 2], [1, 2, 2])).toBe(true);
    expect(library.array_includes_any({}, null)).toBe(false);
    expect(library.array_includes_any(undefined, undefined)).toBe(true);
  });
  it("Equal Mode", () => {
    expect(library.array_includes_any([1, 2], [1], "equal")).toBe(false);
    expect(library.array_includes_any([1, 2], [1, 2], "equal")).toBe(true);
    expect(library.array_includes_any([1, 2], [2, 1], "equal")).toBe(false);
    expect(library.array_includes_any([1, 2, 2], [1, 2], "equal")).toBe(false);
    expect(library.array_includes_any([1, 2, 2], [1, 2, 2], "equal")).toBe(
      true
    );
    expect(library.array_includes_any(null, null, "equal")).toBe(true);
    expect(library.array_includes_any(null, {}, "equal")).toBe(false);
    expect(library.array_includes_any(0, 0, "equal")).toBe(true);
    expect(library.array_includes_any(NaN, NaN, "equal")).toBe(true);
  });
});
