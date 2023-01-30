import { renderHook, act, cleanup } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";

describe("useLocalStorage tests", () => {
  afterEach(cleanup);

  describe("Value initializations", () => {
    test("Value should be initialized with the default value passed in as an argument and stored in local storage", () => {
      const { result } = renderHook(() => useLocalStorage("randomName", 30));
      var [value, _] = result.current;
      expect(value).toBe(30);
      expect(localStorage.getItem("randomName")).toBe("30");
    });

    test("Hook should ignore the default value passed in as an argument, but initialize the value with the one stored in localStorage", () => {
      const { result } = renderHook(() => useLocalStorage("randomName", 30));
      var [value, _] = result.current;
      expect(value).not.toBe(20);
    });
  });

  describe("Test setValue method", () => {
    test("Value should change after calling setValue method", () => {
      const { result } = renderHook(() => useLocalStorage("randomName2", 30));
      var [value, setValue] = result.current;
      act(() => setValue(40));
      [value] = result.current;
      expect(value).toBe(40);
    });

    test("Value should be stored in local storage after calling setValue method", async () => {
      const { result } = renderHook(() => useLocalStorage("randomName2", 30));
      var [value, setValue] = result.current;
      act(() => setValue(50));
      [value] = result.current;
      expect(localStorage.getItem("randomName2")).toBe("50");
    });
  });

  describe("Test data type consistency", () => {
    describe("The type of value shoulb be consistent with the type of the default value passed in as an argument", () => {
      test("string", () => {
        const { result } = renderHook(() => useLocalStorage("color", "red"));
        var [value, setValue] = result.current;
        expect(typeof value).toBe("string");
      });
      test("number", () => {
        const { result } = renderHook(() => useLocalStorage("number", 20));
        var [value, setValue] = result.current;
        expect(typeof value).toBe("number");
      });
    });
  });
});
