import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PasswordField from "../PasswordField";

describe("Text field tests", () => {
  test("should reder without crashing", () => {
    render(<PasswordField label="Label Text" id={1} />);
    const inputElement = screen.getByTestId("id-input-1");
    const labelElement = screen.getByText("Label Text", { selector: "label" });
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("The label can be set via label prop", () => {
    render(<PasswordField label="This Label Text" id={1} />);
    const labelElement = screen.getByText("This Label Text", {
      selector: "label",
    });

    expect(labelElement).toBeInTheDocument();
  });

  test("The text box should be empty after first render", () => {
    render(<PasswordField label="Label Text" id={1} />);
    const inputElement = screen.getByTestId("id-input-1");
    expect(inputElement.value).toBe("");
  });

  test("The value of the text box can be changed", () => {
    render(<PasswordField label="Label Text" id={1} />);
    const inputElement = screen.getByTestId("id-input-1");
    fireEvent.change(inputElement, {
      target: { value: "The text was changed" },
    });
    expect(inputElement.value).toBe("The text was changed");
  });

  test("OnChange function should be called", () => {
    const mockedOnChange = jest.fn();
    render(<PasswordField onChange={mockedOnChange} id={1} />);
    const inputElement = screen.getByTestId("id-input-1");
    fireEvent.change(inputElement, {
      target: { value: "The text was changed" },
    });
    fireEvent.change(inputElement, {
      target: { value: "The text was changed2" },
    });
    expect(mockedOnChange).toHaveBeenCalledTimes(2);
  });
});
