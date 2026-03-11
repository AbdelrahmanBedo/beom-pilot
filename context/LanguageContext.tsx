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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setDir(lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const content = lang === "en" ? enContent : arContent;

  return (
    <LanguageContext.Provider value={{ lang, setLang, content, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
