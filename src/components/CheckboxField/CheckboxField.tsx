import Checkbox, { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import clsx from "clsx";
import { useField } from "formik";
import { ReactNode } from "react";

function CheckboxField({
  name,
  label,
  ...props
}: {
  name: string;
  label: ReactNode;
} & CheckboxProps) {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FormControl error={Boolean(errorText)}>
      <FormControlLabel
        onClick={e => e.stopPropagation()}
        control={
          <Checkbox
            className={clsx(errorText && "u-text-error")}
            checked={field.value}
            {...props}
            {...field}
          />
        }
        label={label}
      />

      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
}

export default CheckboxField;
