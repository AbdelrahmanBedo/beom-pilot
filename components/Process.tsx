"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Process() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-midnight text-white overflow-hidden relative" id="process">
      {/* Static background blobs — no continuous animation */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          {content.process.title}
        </motion.h2>

        <div className="relative">
          {/* Connector line */}
          <motion.div
            className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon/50 to-transparent hidden lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold ${
                    index === 3
                      ? "bg-neon text-white"
                      : "bg-midnight border-4 border-neon text-neon"
                  }`}
                >
                  {step.number}
                </motion.div>

                <h3 className="text-xl font-bold group-hover:text-neon transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
