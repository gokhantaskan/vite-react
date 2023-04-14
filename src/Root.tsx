import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useEffectOnce } from "react-use";

import { darkTheme, lightTheme } from "./plugins/mui";
import { useAppStore } from "./store/appStore";

function Root() {
  const { theme, setLanguage, setTheme } = useAppStore();

  useEffectOnce(() => {
    if (navigator?.language && !localStorage.getItem("language")) {
      const navigatorLanguage = navigator.language;
      setLanguage(navigatorLanguage);
    }

    if (window?.matchMedia && !localStorage.getItem("theme")) {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(prefersDarkMode.matches ? "dark" : "light");
    }
  });

  // check if the theme is changed, and toggle the class
  useEffect(() => {
    const htmlTag = document.documentElement;

    htmlTag.classList.remove("dark", "light");
    htmlTag.classList.add(theme);
  }, [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Root;
