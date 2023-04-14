import "./assets/styles/tailwind/tailwind.scss";

import { Provider as JotaiProvider } from "jotai";
import { useAtomsDebugValue, useAtomsDevtools } from "jotai-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import packageJson from "../package.json";
import Router from "./router";

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
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </AtomDevtools>
    </JotaiProvider>
  </React.StrictMode>
);
