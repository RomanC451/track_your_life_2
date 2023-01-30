import isNumeric from "../isNumeric";

describe("isNumeric tests", () => {
  test("Should return false for empty string", () => {
    expect(isNumeric("")).toBeFalsy();
  });

  test("Should return false for a combination of letters and numbers", () => {
    expect(isNumeric("2345s")).toBeFalsy();
  });

  test("Should return false for spaces", () => {
    expect(isNumeric("   ")).toBeFalsy();
  });

  test("Should return false for a combination of letters and numbers", () => {
    expect(isNumeric("2345s")).toBeFalsy();
  });

  test("Should throw an error if the argument is not a string, because it is meant to  be used only for strings", () => {
    expect(() => isNumeric(2345)).toThrow("isNumeric expects a string");
  });

  test("Should return true for a number", () => {
    expect(isNumeric("2345")).toBeTruthy();
  });

  test("Should return true for a negative number", () => {
    expect(isNumeric("-23")).toBeTruthy();
  });

  test("Should return true for a number with decimals", () => {
    expect(isNumeric("23.56")).toBeTruthy();
  });

  test("Should return true for hexadecimal numbers", () => {
    expect(isNumeric("0x10")).toBeTruthy();
  });

  test("Should return true for binary numbers", () => {
    expect(isNumeric("0b10")).toBeTruthy();
  });
});
