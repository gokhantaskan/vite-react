import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    <Fragment>
      <Helmet titleTemplate={`%s | ${import.meta.env.VITE_APP_NAME}`}>
        <meta
          name="description"
          content="Vite-React is a scaffold project for quickly setting up a React application with Vite, providing an integrated solution for using Tailwind CSS, Material-UI theme, twin.macro, and other essential libraries."
        />
      </Helmet>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </StyledEngineProvider>
    </Fragment>
  );
}

export default Root;
