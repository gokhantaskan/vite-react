import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const languageAtom = atomWithStorage("language", "en");
languageAtom.debugLabel = "languageAtom";

const themeAtom = atomWithStorage("theme", "light");
themeAtom.debugLabel = "themeAtom";

export function useAppStore() {
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(themeAtom);

  return {
    // state
    language,
    theme,
    // actions
    setLanguage,
    setTheme,
  };
}
