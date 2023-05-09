import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { useRef, useState } from "react";
import { useEffectOnce } from "react-use";

export type ButtonProps = {
  loading?: boolean;
  CircularProgressProps?: CircularProgressProps;
} & MuiButtonProps;

function Button({ loading, CircularProgressProps, ...props }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [loaderHeight, setLoaderHeight] = useState<number>(16);

  useEffectOnce(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.getBoundingClientRect().height;
      setLoaderHeight(height / 2);
    }
  });

  return (
    <MuiButton
      {...props}
      disabled={loading || props.disabled}
      ref={buttonRef}
    >
      {loading ? (
        <CircularProgress
          {...CircularProgressProps}
          size={loaderHeight}
        />
      ) : (
        props.children
      )}
    </MuiButton>
  );
}

export default Button;
