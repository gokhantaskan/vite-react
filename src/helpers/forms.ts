import { FormikHelpers, FormikTouched } from "formik";

import { focusOnFirstInvalidInput } from "@/utils";

export async function handleFormikSubmission<T extends {}>(
  formElement: HTMLFormElement | null,
  { validateForm, setTouched }: FormikHelpers<T>,
  cb: Function
) {
  const errors = await validateForm();

  if (Object.keys(errors).length > 0) {
    setTouched(
      Object.fromEntries(
        Object.keys(errors).map(key => [key, true])
      ) as FormikTouched<T>
    );

    setTimeout(() => focusOnFirstInvalidInput(formElement), 0);
    return;
  } else {
    cb();
  }
}
