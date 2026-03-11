"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { content as enContent } from "@/lib/content-en";
import { content as arContent } from "@/lib/content-ar";
import { Content } from "@/lib/content-en";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content;
  dir: "ltr" | "rtl";
}

const defaultContent: Content = enContent;

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  content: defaultContent,
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      setDir(lang === "ar" ? "rtl" : "ltr");
    }
  }, [lang]);

  const content = lang === "en" ? enContent : (arContent || enContent);

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: "en", setLang: () => {}, content: defaultContent, dir: "ltr" }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, content, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
