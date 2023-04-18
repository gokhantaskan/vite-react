import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useField } from "formik";
import { FC, useMemo, useState } from "react";

interface InputFieldProps {
  name: string;
  label: string;
  toggleable?: boolean;
}

const InputField: FC<InputFieldProps & TextFieldProps> = ({
  name,
  label,
  type = "text",
  toggleable = true,
  helperText,
  ...props
}) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const isPasswordField = useMemo(() => type === "password", [type]);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      label={label}
      {...props}
      {...field}
      type={isPasswordField && showPassword ? "text" : type}
      helperText={errorText || helperText}
      error={!!errorText}
      InputProps={{
        endAdornment: isPasswordField && toggleable && (
          <InputAdornment position="end">
            <IconButton
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
