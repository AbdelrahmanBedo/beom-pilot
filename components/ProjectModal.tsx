"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProjectDetails {
  problem: string;
  solution: string;
  capabilities: string[];
  result: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    impact: string;
    color: string;
    fullDetails?: ProjectDetails;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          >
            {/* Header */}
            <div className={`relative h-48 bg-gradient-to-br ${project.color} rounded-t-3xl overflow-hidden`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-white/30 text-9xl">
                  {project.title.includes("Project Management") ? "task" : project.title.includes("Resume") ? "description" : "location_on"}
                </span>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-white">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-midnight mb-2"
              >
                {project.title}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-block px-4 py-1.5 bg-neon/10 text-neon rounded-full text-sm font-medium mb-6"
              >
                {project.impact}
              </motion.div>

              {project.fullDetails && (
                <div className="space-y-6">
                  {/* Problem */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="flex items-center gap-2 text-lg font-bold text-midnight mb-2">
                      <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-500 text-lg">warning</span>
                      </span>
                      The Problem
                    </h3>
                    <p className="text-slate-600 leading-relaxed ml-10">
                      {project.fullDetails.problem}
                    </p>
                  </motion.div>

                  {/* Solution */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h3 className="flex items-center gap-2 text-lg font-bold text-midnight mb-2">
                      <span className="w-8 h-8 bg-neon/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-neon text-lg">lightbulb</span>
                      </span>
                      Our Solution
                    </h3>
                    <p className="text-slate-600 leading-relaxed ml-10">
                      {project.fullDetails.solution}
                    </p>
                  </motion.div>

                  {/* Capabilities */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="flex items-center gap-2 text-lg font-bold text-midnight mb-3">
                      <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-purple-500 text-lg">settings</span>
                      </span>
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-10">
                      {project.fullDetails.capabilities.map((cap, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + index * 0.05 }}
                          className="flex items-center gap-2 text-slate-600"
                        >
                          <span className="w-1.5 h-1.5 bg-neon rounded-full flex-shrink-0" />
                          {cap}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Result */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-neon/10 to-purple-10 rounded-2xl p-6"
                  >
                    <h3 className="flex items-center gap-2 text-lg font-bold text-midnight mb-2">
                      <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-green-500 text-lg">trending_up</span>
                      </span>
                      Business Impact
                    </h3>
                    <p className="text-slate-600 leading-relaxed ml-10">
                      {project.fullDetails.result}
                    </p>
                  </motion.div>
                </div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-slate-100 flex justify-center"
              >
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-neon hover:bg-neon/90 text-white rounded-xl font-medium transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
