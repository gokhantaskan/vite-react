import { Switch } from "@mui/material";
import { Fragment } from "react";

import { useAppStore } from "@/store/appStore";

export function ThemeSwitch() {
  const { theme, setTheme } = useAppStore();

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Fragment>
      <Switch
        checked={theme === "dark"}
        onChange={handleSwitchTheme}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <span>Current theme: {theme}</span>
    </Fragment>
  );
}
