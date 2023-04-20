import "./assets/styles/tailwind/tailwind.scss";

// import loadable from "@loadable/component";
import { Provider as JotaiProvider } from "jotai";
import { useAtomsDebugValue, useAtomsDevtools } from "jotai-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import packageJson from "../package.json";
import { I18nCustomProvider } from "./plugins/i18n-next";
import { ToastifyContainer } from "./plugins/toastify";
import Router from "./router";

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

const AtomDevtools = ({ children }: { children: React.ReactElement }) => {
  useAtomsDevtools(`${packageJson.name}-${packageJson.version}`);
  return children;
};

// if (import.meta.env.MODE === "development") {
//   const _worker = loadable.lib(() => import("./mocks/browser"));
//   _worker.worker.start();
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JotaiProvider>
      <DebugAtoms />
      <AtomDevtools>
        <I18nCustomProvider>
          <HelmetProvider>
            <Router />
            <ToastifyContainer />
          </HelmetProvider>
        </I18nCustomProvider>
      </AtomDevtools>
    </JotaiProvider>
  </React.StrictMode>
);
