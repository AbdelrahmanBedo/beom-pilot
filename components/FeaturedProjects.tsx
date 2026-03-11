"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-midnight"
        >
          {content.projects.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.projects.cards.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.color} mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-8xl opacity-30">
                    {index === 0 ? "task" : index === 1 ? "description" : "location_on"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-midnight">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{project.description}</p>
              <div className="text-neon font-bold text-2xl tracking-tight">{project.impact}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
