"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function ServicesOverview() {
  const { content } = useLanguage();

  const icons: Record<string, string> = {
    forum: "forum",
    handshake: "handshake",
    filter_alt: "filter_alt",
    settings_suggest: "settings_suggest",
    table_chart: "table_chart",
    neurology: "neurology",
  };

  return (
    <section className="py-24 bg-ice" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-midnight">{content.services.title}</h2>
            <p className="text-slate-500 max-w-xl">{content.services.subtitle}</p>
          </div>
          <div className="h-px flex-1 bg-slate-200 mx-10 hidden md:block"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.cards.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-10 bg-white rounded-3xl border border-slate-100 hover:border-neon transition-colors group"
            >
              <span className="material-symbols-outlined text-neon text-5xl mb-6 group-hover:scale-110 transition-transform">
                {icons[service.icon]}
              </span>
              <h3 className="text-xl font-bold mb-4 text-midnight">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
