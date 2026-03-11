"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const { content } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden bg-midnight">
      <div className="absolute inset-0 network-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 via-transparent to-transparent"></div>
      
      {/* Animated floating shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-neon/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/20 border border-neon/30 text-neon text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            {content.hero.badge}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            {content.hero.title} <br />
            <motion.span 
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-purple-400 to-neon bg-[length:200%_auto]"
            >
              {content.hero.titleHighlight}
            </motion.span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
            {content.hero.subtitle}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-neon hover:bg-neon/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-neon/25 relative overflow-hidden group"
            >
              <motion.span 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">{content.hero.primaryCTA}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#8A2BE2" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("services")}
              className="border border-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors relative overflow-hidden group"
            >
              <motion.span 
                className="absolute inset-0 bg-neon/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">{content.hero.secondaryCTA}</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-square bg-neon/5 rounded-3xl border border-neon/20 overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
              {[
                { icon: "memory", title: "Smart Logic", desc: "LLM Integrated Workflows", delay: 0 },
                { icon: "database", title: "Data Mining", desc: "Automated Lead Extraction", delay: 0.1 },
                { icon: "api", title: "API Mesh", desc: "Seamless App Connectivity", delay: 0.2 },
                { icon: "query_stats", title: "Analytics", desc: "Real-time Performance", delay: 0.3 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + item.delay }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`glass-card p-6 rounded-2xl ${index === 1 ? "transform translate-y-8" : index === 2 ? "transform -translate-y-4" : index === 3 ? "transform translate-y-4" : ""}`}
                >
                  <motion.span 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="material-symbols-outlined text-neon text-4xl mb-4 block"
                  >
                    {item.icon}
                  </motion.span>
                  <div className="text-white font-bold">{item.title}</div>
                  <div className="text-slate-400 text-xs mt-2">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
