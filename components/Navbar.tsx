"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const { lang, setLang, content, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { key: "why", label: content.nav.links.why },
    { key: "services", label: content.nav.links.services },
    { key: "impact", label: content.nav.links.impact },
    { key: "projects", label: content.nav.links.projects },
    { key: "process", label: content.nav.links.process },
    { key: "contact", label: content.nav.links.contact },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-midnight/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo variant="nav" onClick={() => scrollToSection("hero")} />

        <nav className={`hidden md:flex items-center gap-1 ${dir === "rtl" ? "ml-8" : "mr-8"}`}>
          {navItems.map((item, index) => (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => scrollToSection(item.key)}
              className="relative text-sm font-medium text-slate-300 hover:text-neon transition-colors px-3 py-2 group"
            >
              {item.label}
              <motion.span 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-neon"
                initial={{ width: 0 }}
                whileHover={{ width: "60%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-sm font-medium text-slate-300 hover:text-neon transition-colors px-3 py-1.5 border border-slate-600 rounded-lg hover:border-neon relative overflow-hidden group"
          >
            <motion.span 
              className="absolute inset-0 bg-neon/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{lang === "en" ? "عربي" : "EN"}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="bg-neon hover:bg-neon/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all relative overflow-hidden group"
          >
            <motion.span 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{content.nav.bookConsultation}</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
