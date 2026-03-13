"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ProjectModal from "./ProjectModal";

const projectImages = [
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
];

export default function FeaturedProjects() {
  const { content } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof content.projects.cards[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="py-24 bg-white" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-neon/10 text-neon rounded-full text-sm font-medium mb-4"
              >
                Portfolio
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight">
                {content.projects.title}
              </h2>
              <p className="text-slate-500 max-w-xl">
                Explore our success stories and see how we&apos;ve helped businesses
                transform their operations through intelligent automation.
              </p>
            </div>

            <div className="flex gap-3 mt-6 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "border-neon text-neon hover:bg-neon hover:text-white"
                    : "border-slate-200 text-slate-300 cursor-not-allowed"
                }`}
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "border-neon text-neon hover:bg-neon hover:text-white"
                    : "border-slate-200 text-slate-300 cursor-not-allowed"
                }`}
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-6 text-slate-400 text-sm"
            >
              <span className="material-symbols-outlined text-lg">swipe</span>
              <span>Scroll horizontally or use arrows</span>
            </motion.div>

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            >
              {content.projects.cards.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => {
                    setSelectedProject(project);
                    setSelectedIndex(index);
                  }}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] snap-center cursor-pointer group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-neon/30">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={projectImages[index]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 380px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-65 transition-opacity duration-300`}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium text-sm hover:bg-white/30 transition-colors"
                        >
                          View Case Study
                        </motion.button>
                      </div>

                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 text-midnight group-hover:text-neon transition-colors duration-200 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="text-neon font-bold text-lg tracking-tight">
                          {project.impact}
                        </span>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="material-symbols-outlined text-neon opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg"
                        >
                          arrow_forward
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        projectIndex={selectedIndex}
      />

    </>
  );
}
