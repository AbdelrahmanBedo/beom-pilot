"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { lang, setLang, content, dir } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-midnight/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neon rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">rocket_launch</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            {content.nav.logo}
          </span>
        </div>

        <nav className={`hidden md:flex items-center gap-8 ${dir === "rtl" ? "ml-8" : "mr-8"}`}>
          <button
            onClick={() => scrollToSection("why")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors"
          >
            {content.nav.links.why}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors"
          >
            {content.nav.links.services}
          </button>
          <button
            onClick={() => scrollToSection("impact")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors"
          >
            {content.nav.links.impact}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors"
          >
            {content.nav.links.projects}
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors"
          >
            {content.nav.links.process}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors"
          >
            {content.nav.links.contact}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors px-3 py-1 border border-slate-600 rounded-lg"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-neon hover:bg-neon/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:scale-105"
          >
            {content.nav.bookConsultation}
          </button>
        </div>
      </div>
    </header>
  );
}
