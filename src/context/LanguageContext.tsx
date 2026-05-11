import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, ru: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ru" : "en"));
  const t = (en: string, ru: string) => (lang === "en" ? en : ru);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

export default LanguageContext;
