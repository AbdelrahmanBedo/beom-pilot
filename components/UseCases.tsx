"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function UseCases() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-neon/10 text-neon rounded-full text-sm font-medium mb-4"
          >
            Use Cases
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-midnight">
            {content.useCases.title}
          </h2>
          <p className="text-slate-500">{content.useCases.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.useCases.cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="p-6 bg-ice rounded-2xl border border-slate-100 hover:border-neon/30 hover:shadow-lg transition-all group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon mb-4 group-hover:bg-neon group-hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">auto_awesome</span>
              </motion.div>
              <h3 className="font-bold text-lg mb-2 text-midnight group-hover:text-neon transition-colors">{useCase.title}</h3>
              <p className="text-sm text-slate-500">{useCase.description}</p>
              
              <motion.div 
                className="mt-4 flex items-center gap-1"
              >
                <motion.div 
                  className="h-0.5 bg-neon"
                  initial={{ width: 0 }}
                  whileHover={{ width: 40 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="text-neon text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Explore
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
