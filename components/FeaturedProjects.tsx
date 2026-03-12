"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projectImages = [
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
];

export default function FeaturedProjects() {
  const { content } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof content.projects.cards[0] | null>(null);

  return (
    <>
      <section className="py-24 bg-white" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-midnight"
          >
            {content.projects.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 mb-16 max-w-2xl"
          >
            Explore our success stories and see how we've helped businesses
            transform their operations through intelligent automation.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.projects.cards.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                {/* Image card */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-6 shadow-md">
                  {/* Photo */}
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  />

                  {/* Dark vignette */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium text-sm hover:bg-white/30 transition-colors"
                    >
                      View Case Study
                    </motion.button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">
                      Project {index + 1}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-2 text-midnight group-hover:text-neon transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">{project.description}</p>

                <div className="flex items-center gap-2">
                  <span className="text-neon font-bold text-2xl tracking-tight">
                    {project.impact}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedProject(project)}
                    className="material-symbols-outlined text-neon opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    arrow_forward
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
