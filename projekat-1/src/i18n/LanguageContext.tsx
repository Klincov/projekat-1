import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { translations, type Language } from "./translations";

const STORAGE_KEY = "language";

type TranslateParams = Record<string, string | number>;

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, params?: TranslateParams) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "sr" || saved === "en") return saved;
  } catch {
    // localStorage nije dostupan - koristi se podrazumevani jezik
  }
  return "sr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignoriši
    }
  }, []);

  const t = useCallback(
    (key: string, params?: TranslateParams) => {
      let text = translations[lang][key] ?? translations.sr[key] ?? key;

      if (params) {
        for (const [name, value] of Object.entries(params)) {
          text = text.replace(`{${name}}`, String(value));
        }
      }

      return text;
    },
    [lang]
  );

  // Naslov taba i lang atribut prate izabrani jezik
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t("app.title");
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage mora da se koristi unutar LanguageProvider-a");
  }

  return context;
}
