import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogInForm from "../LogInForm";

var authMode = "login";

function MockSwitchAuthMode() {
  authMode = authMode === "login" ? "signup" : "login";
}

describe("Login form tests", () => {
  describe("Component rendering", () => {
    afterEach(cleanup);
    test("Title div", () => {
      render(<LogInForm switchAuthMode={MockSwitchAuthMode} />);
      const titleDiv = screen.getByText("LOG IN");
      expect(titleDiv).toBeInTheDocument();
    });
    test("Title div", () => {
      render(<LogInForm switchAuthMode={MockSwitchAuthMode} />);
      const titleDiv = screen.getByText("Take control of your life");
      expect(titleDiv).toBeInTheDocument();
    });
    test("Email input", () => {
      render(<LogInForm switchAuthMode={MockSwitchAuthMode} />);
      const inputElement = screen.getByText("Email", { selector: "label" });
      expect(inputElement).toBeInTheDocument();
    });
    test("Password input", () => {
      render(<LogInForm switchAuthMode={MockSwitchAuthMode} />);
      const inputElement = screen.getByText("Password", { selector: "label" });
      expect(inputElement).toBeInTheDocument();
    });
    test("Login button", () => {
      render(<LogInForm switchAuthMode={MockSwitchAuthMode} />);
      const buttonElement = screen.getByRole("button", {
        name: "I don't have an account.",
      });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
