import "./assets/styles/tailwind/tailwind.scss";

import { Provider as JotaiProvider } from "jotai";
import { useAtomsDebugValue, useAtomsDevtools } from "jotai-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import packageJson from "../package.json";
import { ToastContainer } from "./plugins/hot-toast";
import { I18nCustomProvider } from "./plugins/i18n-next";
import Root from "./Root";

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

const AtomDevtools = ({ children }: { children: React.ReactElement }) => {
  useAtomsDevtools(`${packageJson.name}-${packageJson.version}`);
  return children;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JotaiProvider>
      <DebugAtoms />
      <AtomDevtools>
        <I18nCustomProvider>
          <HelmetProvider>
            <Root />
            <ToastContainer />
          </HelmetProvider>
        </I18nCustomProvider>
      </AtomDevtools>
    </JotaiProvider>
  </React.StrictMode>
);
