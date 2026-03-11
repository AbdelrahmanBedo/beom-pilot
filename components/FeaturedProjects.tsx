"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-midnight"
        >
          {content.projects.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 mb-16 max-w-2xl"
        >
          Explore our success stories and see how we've helped businesses transform their operations through intelligent automation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.projects.cards.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
            >
              <motion.div 
                className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.color} mb-6 overflow-hidden relative`}
              >
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="material-symbols-outlined text-white text-8xl opacity-30">
                    {index === 0 ? "task" : index === 1 ? "description" : "location_on"}
                  </span>
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium"
                  >
                    View Case Study
                  </motion.button>
                </motion.div>

                {/* Floating badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                  animate={{ 
                    y: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <span className="text-white text-xs font-medium">Project {index + 1}</span>
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold mb-2 text-midnight group-hover:text-neon transition-colors"
              >
                {project.title}
              </motion.h3>
              <p className="text-slate-500 text-sm mb-4">{project.description}</p>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <div className="text-neon font-bold text-2xl tracking-tight">{project.impact}</div>
                <motion.span 
                  className="material-symbols-outlined text-neon opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  arrow_forward
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
