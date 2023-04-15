import CloseIcon from "@mui/icons-material/Close";
import MuiDialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

function Dialog({
  children,
  title,
  titleTag = "h3",
  actions,
  onClose,
  ...props
}: {
  title: ReactNode;
  titleTag?: keyof JSX.IntrinsicElements;
  actions?: ReactNode;
  children: ReactNode;
} & DialogProps) {
  const Title = titleTag as keyof JSX.IntrinsicElements;
  const titleId = uuidv4();

  return (
    <MuiDialog
      onClose={onClose}
      {...props}
      aria-labelledby={titleId}
    >
      <div className="divide-y">
        <div
          className={clsx(
            "p-4 relative",
            "flex justify-between items-baseline gap-4"
          )}
        >
          <Title
            id={titleId}
            className="m-0 leading-[32px] text-xl pr-[calc(32px+0.5rem)]"
          >
            {title}
          </Title>

          <IconButton
            aria-label="close"
            onClick={onClose as any}
            color="error"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 32,
              height: 32,
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="p-4">{children}</div>

        {actions && <div>{actions}</div>}
      </div>
    </MuiDialog>
  );
}

export default Dialog;
