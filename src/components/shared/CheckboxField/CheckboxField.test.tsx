import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form, Formik } from "formik";
import { describe, expect, test } from "vitest";
import * as yup from "yup";

import CheckboxField from "./CheckboxField";

describe("CheckboxField", () => {
  const initialValues = {
    terms: false,
  };

  const validationSchema = yup.object({
    terms: yup.boolean().oneOf([true], "Accepting terms is required"),
  });

  function renderForm() {
    return render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Form>
          <CheckboxField
            name="terms"
            label="Accept Terms"
            helperText="Custom helper text"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }

  test("renders the checkbox with the correct label", () => {
    renderForm();
    expect(screen.getByText("Accept Terms")).toBeInTheDocument();
  });

  test("renders the component with a custom helper text", () => {
    renderForm();
    expect(screen.getByText("Custom helper text")).toBeInTheDocument();
  });

  test("updates the value of the checkbox when clicked", async () => {
    const user = userEvent.setup();
    renderForm();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    await waitFor(() => {
      expect(checkbox).toBeChecked();
    });
  });

  test("displays error message when the field has an error and is touched", async () => {
    const user = userEvent.setup();
    renderForm();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(await screen.findByText("Accepting terms is required")).toBeInTheDocument();
  });
});
