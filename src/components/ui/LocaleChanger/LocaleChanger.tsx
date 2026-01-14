import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { useAppStore } from "@/store/appStore";

function LocaleChanger({ className }: { className?: string }) {
  const { setLanguage } = useAppStore();
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className={clsx("p-1 rounded-md", className)}
      value={i18n.language}
      onChange={handleChange}
    >
      <option
        className="p-1"
        value="en"
      >
        English
      </option>
      <option
        className="p-1"
        value="tr"
      >
        Türkçe
      </option>
    </select>
  );
}

export default LocaleChanger;
