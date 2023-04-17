import clsx from "clsx";

import { ReactComponent as Icon } from "@/assets/img/icon.svg";

import LocaleChanger from "../LocaleChanger/LocaleChanger";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx([
        "py-4 bg-gray-100 dark:bg-gray-700 border-t text-sm",
        className,
      ])}
    >
      <div className="container flex items-center justify-center gap-2">
        <Icon className="h-4 text-primary-500" />
        {import.meta.env.VITE_APP_NAME} - Copyright © {new Date().getFullYear()}
        <LocaleChanger />
      </div>
    </footer>
  );
}
