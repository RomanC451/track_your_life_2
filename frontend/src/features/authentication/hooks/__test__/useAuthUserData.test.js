import { renderHook } from "@testing-library/react";
import useAuthUserData from "../useAuthUserData";

describe("useAuthUserData tests", () => {
  test("renders without crashing and the result has the desired items", () => {
    const { result } = renderHook(() =>
      useAuthUserData({ email: "", password: "" })
    );
    expect(result.current.length).toBe(2);

    const [userData, handleChange] = result.current;
    expect(Object.keys(userData)).toEqual(["email", "password"]);
    expect(typeof handleChange).toBe("function");
  });
});
