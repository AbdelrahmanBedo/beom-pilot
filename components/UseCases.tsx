"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function UseCases() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-midnight">
            {content.useCases.title}
          </h2>
          <p className="text-slate-500">{content.useCases.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.useCases.cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-ice rounded-2xl border border-slate-100 hover:border-neon/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon mb-4">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-midnight">{useCase.title}</h3>
              <p className="text-sm text-slate-500">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
