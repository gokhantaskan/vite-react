import { Close } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import { Fragment } from "react";
import { toast, ToastBar, Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 5_000,
        className: clsx(
          "!rounded shadow-lg",
          "light:bg-gray-50 light:text-gray-900",
          "dark:bg-gray-500 dark:text-white"
        ),
      }}
    >
      {t => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <Fragment>
              {icon}
              {message}
              {t.type !== "loading" && (
                <IconButton
                  className="!text-gray-500 dark:!text-gray-100"
                  onClick={() => toast.dismiss(t.id)}
                  size="small"
                >
                  <Close />
                </IconButton>
              )}
            </Fragment>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
