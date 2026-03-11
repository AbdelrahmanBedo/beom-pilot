"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function WhyAutomation() {
  const { content } = useLanguage();

  const icons: Record<string, string> = {
    timer: "timer",
    bolt: "bolt",
    chat_bubble: "chat_bubble",
    gpp_maybe: "gpp_maybe",
    trending_up: "trending_up",
  };

  return (
    <section className="py-24 bg-ice" id="why">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-midnight">
            {content.whyAutomation.title}
          </h2>
          <p className="text-slate-600">{content.whyAutomation.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {content.whyAutomation.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-neon/30 transition-all group"
            >
              <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center text-neon mb-6 group-hover:bg-neon group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{icons[card.icon]}</span>
              </div>
              <h3 className="font-bold text-lg mb-3 text-midnight">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
