import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "../TextField";

describe("Text field tests", () => {
  test("should reder without crashing", () => {
    render(<TextField label="Label Text" />);
    const inputElement = screen.getByRole("textbox");
    const labelElement = screen.getByText("Label Text", { selector: "label" });
    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  test("The label can be set via label prop", () => {
    render(<TextField label="This Label Text" />);
    const labelElement = screen.getByText("This Label Text", {
      selector: "label",
    });

    expect(labelElement).toBeInTheDocument();
  });

  test("The text box should be empty after first render", () => {
    render(<TextField label="Label Text" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.value).toBe("");
  });

  test("The value of the text box can be changed", () => {
    render(<TextField label="Label Text" />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, {
      target: { value: "The text was changed" },
    });
    expect(inputElement.value).toBe("The text was changed");
  });

  test("OnChange function should be called", () => {
    const mockedOnChange = jest.fn();
    render(<TextField onChange={mockedOnChange} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, {
      target: { value: "The text was changed" },
    });
    fireEvent.change(inputElement, {
      target: { value: "The text was changed2" },
    });
    expect(mockedOnChange).toHaveBeenCalledTimes(2);
  });
});
