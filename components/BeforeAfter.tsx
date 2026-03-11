"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BeforeAfter() {
  const { content } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section className="py-24 bg-white" id="impact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight text-midnight"
          >
            {content.beforeAfter.title}
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 relative">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-slate-50 p-10 rounded-3xl border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="size-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <span className="material-symbols-outlined">block</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-400">{content.beforeAfter.before.title}</h3>
            </div>
            <ul className="space-y-6">
              {content.beforeAfter.before.items.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm group hover:shadow-md transition-shadow"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2 }}
                    className="material-symbols-outlined text-red-400 mt-1"
                  >
                    history
                  </motion.span>
                  <div>
                    <h4 className="font-bold text-midnight group-hover:text-neon transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow with animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center py-10 px-4"
          >
            <motion.div 
              animate={{ 
                x: [0, 10, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 rounded-full bg-neon text-white flex items-center justify-center shadow-lg shadow-neon/40"
            >
              <span className="material-symbols-outlined text-4xl">arrow_forward</span>
            </motion.div>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-neon/5 p-10 rounded-3xl border border-neon/20 relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute -top-4 -right-4 bg-neon text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              {content.beforeAfter.after.badge}
            </div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="size-10 rounded-full bg-neon flex items-center justify-center text-white"
              >
                <span className="material-symbols-outlined">auto_awesome</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-neon">{content.beforeAfter.after.title}</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {content.beforeAfter.after.items.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neon/20 group hover:shadow-lg hover:border-neon/40 transition-all"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="material-symbols-outlined text-neon mt-1"
                  >
                    hub
                  </motion.span>
                  <div>
                    <h4 className="font-bold text-midnight group-hover:text-neon transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
