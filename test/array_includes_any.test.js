import array_includes_any from "../src/array_includes_any.js";
describe("Tests", () => {
  it("Any Mode", () => {
    expect(array_includes_any([1, 2], [1, 2])).toBe(true);
    expect(array_includes_any([1, 2], [1])).toBe(true);
    expect(array_includes_any([], [2, 1])).toBe(false);
    expect(array_includes_any([1, 2, 2], [1, 2, 2])).toBe(true);
    expect(array_includes_any({},null)).toBe(false);
    expect(array_includes_any(undefined, undefined)).toBe(true);
  });
  it("Equal Mode", () => {
    expect(array_includes_any([1, 2], [1], "equal")).toBe(false);
    expect(array_includes_any([1, 2], [1, 2], "equal")).toBe(true);
    expect(array_includes_any([1, 2], [2, 1], "equal")).toBe(false);
    expect(array_includes_any([1, 2, 2], [1, 2], "equal")).toBe(false);
    expect(array_includes_any([1, 2, 2], [1, 2, 2], "equal")).toBe(true);
    expect(array_includes_any(null, null, "equal")).toBe(true);
    expect(array_includes_any(null, {}, "equal")).toBe(false);
    expect(array_includes_any(0, 0, "equal")).toBe(true);
    expect(array_includes_any(NaN, NaN, "equal")).toBe(true);
  });
});
