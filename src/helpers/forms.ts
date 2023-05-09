import { FormikHelpers, FormikTouched } from "formik";

import { focusOnFirstInvalidInput } from "@/utils/common";

export async function handleFormikSubmission<T extends {}>(
  formElement: HTMLFormElement | null,
  {
    validateForm,
    setTouched,
  }: Pick<FormikHelpers<T>, "validateForm" | "setTouched">,
  cb?: Function
) {
  const errors = await validateForm();

  if (Object.keys(errors).length > 0) {
    setTouched(
      Object.fromEntries(
        Object.keys(errors).map(key => [key, true])
      ) as FormikTouched<T>
    );

    setTimeout(() => focusOnFirstInvalidInput(formElement));
    return;
  } else {
    cb?.();
  }
}
