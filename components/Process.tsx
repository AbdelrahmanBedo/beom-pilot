"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Process() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-midnight text-white overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          {content.process.title}
        </motion.h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neon/20 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-6"
              >
                <div className={`w-16 h-16 rounded-full bg-midnight border-4 ${index === 3 ? 'bg-neon border-neon text-white' : 'border-neon text-neon'} flex items-center justify-center mx-auto text-2xl font-bold relative z-20`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
