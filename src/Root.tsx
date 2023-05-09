import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffectOnce } from "react-use";

import { darkTheme, lightTheme } from "./plugins/mui";
import Router from "./router";
import { useAppStore } from "./store/appStore";
import { useAuthStore } from "./store/authStore";

function Root() {
  const { theme, language, setLanguage, setTheme } = useAppStore();
  const { init: initAuth } = useAuthStore();
  const { i18n } = useTranslation();

  useEffectOnce(() => {
    initAuth();

    if (navigator?.language && !localStorage.getItem("language")) {
      const navigatorLanguage = navigator.language;
      setLanguage(navigatorLanguage.split("-")[0].toLowerCase());
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

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    i18n.changeLanguage(language);
  }, [language]);

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
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
    </Fragment>
  );
}

export default Root;
