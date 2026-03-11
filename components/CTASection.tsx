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
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-neon/5 opacity-50"
        animate={{ 
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity
        }}
      />
      
      {/* Floating shapes */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-neon/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
          {content.cta.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-lg mb-10 leading-relaxed"
        >
          {content.cta.subtitle}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 40px rgba(138, 44, 226, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="bg-neon hover:bg-neon/90 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl shadow-neon/40 relative overflow-hidden group"
        >
          <motion.span 
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <span className="relative z-10 flex items-center gap-2">
            {content.cta.button}
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </motion.span>
          </span>
        </motion.button>
      </div>
    </section>
  );
}
