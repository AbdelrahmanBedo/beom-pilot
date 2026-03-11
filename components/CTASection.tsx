"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function CTASection() {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-neon/5 opacity-50"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
          {content.cta.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg mb-10 leading-relaxed"
        >
          {content.cta.subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onClick={() => scrollToSection("contact")}
          className="bg-neon hover:scale-105 transition-transform text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl shadow-neon/40"
        >
          {content.cta.button}
        </motion.button>
      </div>
    </section>
  );
}
