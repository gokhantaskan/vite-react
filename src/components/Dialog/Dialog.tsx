import CloseIcon from "@mui/icons-material/Close";
import MuiDialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import { ReactNode } from "react";

function Dialog({
  children,
  title,
  actions,
  onClose,
  ...props
}: {
  title: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
} & DialogProps) {
  return (
    <MuiDialog
      onClose={onClose}
      {...props}
    >
      <div className="divide-y">
        <div
          className={clsx(
            "p-4 relative",
            "flex justify-between items-baseline gap-4"
          )}
        >
          <h3 className="m-0 leading-[32px] text-xl pr-[calc(32px+0.5rem)]">
            {title}
          </h3>

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
