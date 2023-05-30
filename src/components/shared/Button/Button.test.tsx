import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Button, { ButtonProps } from "./Button";

describe("Button", () => {
  const defaultProps: ButtonProps = {
    children: "Click me",
  };

  test("renders the button with the correct text", () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the button in a disabled state when loading", () => {
    render(
      <Button
        {...defaultProps}
        loading
      />
    );
    const buttonElement = screen.getByRole("button") as HTMLButtonElement;
    expect(buttonElement).toBeDisabled();
  });

  test("renders the CircularProgress when loading", () => {
    render(
      <Button
        {...defaultProps}
        loading
      />
    );
    const loader = screen.getByRole("progressbar");
    expect(loader).toBeInTheDocument();
  });

  test("renders the button in a disabled state when explicitly disabled", () => {
    render(
      <Button
        {...defaultProps}
        disabled
      />
    );
    const buttonElement = screen.getByRole("button") as HTMLButtonElement;
    expect(buttonElement).toBeDisabled();
  });

  test("calls onClick when the button is clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button
        {...defaultProps}
        onClick={handleClick}
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
