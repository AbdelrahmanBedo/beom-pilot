"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-midnight">
      {/* Static background — no CPU cost */}
      <div className="absolute inset-0 network-bg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 via-transparent to-transparent" />
      
      {/* Animated floating orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-neon/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" 
      />
      
      {/* Additional floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neon/30 rounded-full"
          initial={{ 
            x: Math.random() * 1000, 
            y: Math.random() * 600,
            opacity: 0 
          }}
          animate={{ 
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${60 + (i % 3) * 10}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/20 border border-neon/30 text-neon text-xs font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            {content.hero.badge}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            {content.hero.title} <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-purple-400 via-pink-400 to-neon bg-[length:300%_auto]"
              animate={{
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(138, 44, 226, 0.5)",
                    "0 0 30px rgba(138, 44, 226, 0.8)",
                    "0 0 50px rgba(138, 44, 226, 1)",
                    "0 0 30px rgba(138, 44, 226, 0.8)",
                    "0 0 10px rgba(138, 44, 226, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {content.hero.titleHighlight}
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-neon hover:bg-neon/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-neon/25"
            >
              {content.hero.primaryCTA}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("services")}
              className="border border-slate-500 hover:border-neon text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              {content.hero.secondaryCTA}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: feature cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square bg-neon/5 rounded-3xl border border-neon/20 overflow-hidden flex items-center justify-center">
            <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
              {[
                { icon: "memory", title: "Smart Logic", desc: "LLM Integrated Workflows", offset: "" },
                { icon: "database", title: "Data Mining", desc: "Automated Lead Extraction", offset: "translate-y-8" },
                { icon: "api", title: "API Mesh", desc: "Seamless App Connectivity", offset: "-translate-y-4" },
                { icon: "query_stats", title: "Analytics", desc: "Real-time Performance", offset: "translate-y-4" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass-card p-6 rounded-2xl transform ${item.offset}`}
                >
                  <span className="material-symbols-outlined text-neon text-4xl mb-4 block">
                    {item.icon}
                  </span>
                  <div className="text-white font-bold">{item.title}</div>
                  <div className="text-slate-400 text-xs mt-2">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
