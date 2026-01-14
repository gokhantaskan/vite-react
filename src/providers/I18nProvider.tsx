import i18next from "i18next";
import { FC } from "react";
import { I18nextProvider } from "react-i18next";

import commonEn from "@/locales/en/common.json";
import commonTr from "@/locales/tr/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: "en",
  resources: {
    en: {
      common: commonEn,
    },
    tr: {
      common: commonTr,
    },
  },
});

export const I18nProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
