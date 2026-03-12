"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import LearnMoreModal from "./LearnMoreModal";

export default function ServicesOverview() {
  const { content } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const icons: Record<string, string> = {
    forum: "forum",
    handshake: "handshake",
    filter_alt: "filter_alt",
    settings_suggest: "settings_suggest",
    table_chart: "table_chart",
    neurology: "neurology",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <section className="py-24 bg-ice" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-neon/10 text-neon rounded-full text-sm font-medium mb-4"
              >
                Services
              </motion.span>
              <h2 className="text-4xl font-bold mb-4 text-midnight">{content.services.title}</h2>
              <p className="text-slate-500 max-w-xl">{content.services.subtitle}</p>
            </div>
            <div className="h-px flex-1 bg-slate-200 mx-10 hidden md:block"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {content.services.cards.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedService(index)}
                className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-neon/50 transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="material-symbols-outlined text-neon text-5xl mb-6 block relative z-10">
                    {icons[service.icon]}
                  </span>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-midnight group-hover:text-neon transition-colors relative z-10">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{service.description}</p>
                
                <motion.div 
                  className="mt-5 flex items-center gap-2 text-neon font-medium text-sm relative z-10"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="px-4 py-2 bg-neon/10 hover:bg-neon/20 rounded-lg transition-colors flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn more</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </motion.span>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <LearnMoreModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        serviceIndex={selectedService || 0}
      />
    </>
  );
}
