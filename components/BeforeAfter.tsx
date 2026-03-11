"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-white" id="impact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight text-midnight"
        >
          {content.beforeAfter.title}
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 relative">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-slate-50 p-10 rounded-3xl border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="size-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">block</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-400">{content.beforeAfter.before.title}</h3>
            </div>
            <ul className="space-y-6">
              {content.beforeAfter.before.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <span className="material-symbols-outlined text-red-400 mt-1">history</span>
                  <div>
                    <h4 className="font-bold text-midnight">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center py-10 px-4">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-full bg-neon text-white flex items-center justify-center shadow-lg shadow-neon/40"
            >
              <span className="material-symbols-outlined text-4xl">arrow_forward</span>
            </motion.div>
          </div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-neon/5 p-10 rounded-3xl border border-neon/20 relative"
          >
            <div className="absolute -top-4 -right-4 bg-neon text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              {content.beforeAfter.after.badge}
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="size-10 rounded-full bg-neon flex items-center justify-center text-white">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-bold text-neon">{content.beforeAfter.after.title}</h3>
            </div>
            <ul className="space-y-6">
              {content.beforeAfter.after.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neon/20">
                  <span className="material-symbols-outlined text-neon mt-1">hub</span>
                  <div>
                    <h4 className="font-bold text-midnight">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
