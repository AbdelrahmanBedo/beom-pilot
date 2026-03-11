"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-midnight">
      <div className="absolute inset-0 network-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/20 border border-neon/30 text-neon text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            {content.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            {content.hero.title} <br />
            <span className="text-neon">{content.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-neon hover:scale-105 transition-transform text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-neon/25"
            >
              {content.hero.primaryCTA}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-slate-500 hover:border-neon text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              {content.hero.secondaryCTA}
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square bg-neon/5 rounded-3xl border border-neon/20 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
              <motion.div 
                whileHover={{ y: -8 }}
                className="glass-card p-6 rounded-2xl"
              >
                <span className="material-symbols-outlined text-neon text-4xl mb-4">memory</span>
                <div className="text-white font-bold">Smart Logic</div>
                <div className="text-slate-400 text-xs mt-2">LLM Integrated Workflows</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8 }}
                className="glass-card p-6 rounded-2xl transform translate-y-8"
              >
                <span className="material-symbols-outlined text-neon text-4xl mb-4">database</span>
                <div className="text-white font-bold">Data Mining</div>
                <div className="text-slate-400 text-xs mt-2">Automated Lead Extraction</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8 }}
                className="glass-card p-6 rounded-2xl transform -translate-y-4"
              >
                <span className="material-symbols-outlined text-neon text-4xl mb-4">api</span>
                <div className="text-white font-bold">API Mesh</div>
                <div className="text-slate-400 text-xs mt-2">Seamless App Connectivity</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8 }}
                className="glass-card p-6 rounded-2xl transform translate-y-4"
              >
                <span className="material-symbols-outlined text-neon text-4xl mb-4">query_stats</span>
                <div className="text-white font-bold">Analytics</div>
                <div className="text-slate-400 text-xs mt-2">Real-time Performance</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
