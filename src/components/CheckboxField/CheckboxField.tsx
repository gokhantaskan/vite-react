import Checkbox, { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import clsx from "clsx";
import { useField } from "formik";
import { ReactNode, useId } from "react";

function CheckboxField({
  name,
  label,
  className,
  helperText,
  ...props
}: {
  name: string;
  label: ReactNode;
  className?: string;
  helperText?: string;
} & CheckboxProps) {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const uuid = useId();

  return (
    <FormControl
      error={Boolean(errorText)}
      className={clsx(className, errorText && "in-error-state")}
    >
      <FormControlLabel
        onClick={e => e.stopPropagation()}
        control={
          <Checkbox
            {...props}
            {...field}
            className={clsx(errorText && "u-text-error")}
            checked={field.value}
            inputProps={{
              ...(errorText && { "aria-invalid": !!errorText }),
              ...((errorText || helperText) && { "aria-describedby": uuid }),
            }}
          />
        }
        label={label}
      />

      {(errorText || helperText) && (
        <FormHelperText id={uuid}>{errorText || helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default CheckboxField;
