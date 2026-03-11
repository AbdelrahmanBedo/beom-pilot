"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Process() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-midnight text-white overflow-hidden" id="process">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div 
          animate={{ 
            x: [-100, 100],
            y: [-50, 50]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [100, -100],
            y: [50, -50]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          {content.process.title}
        </motion.h2>

        <div className="relative">
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon/50 to-transparent hidden lg:block -translate-y-1/2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center space-y-6 group"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(138, 44, 226, 0.5)"
                  }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold relative z-20 ${
                    index === 3 
                      ? 'bg-neon text-white' 
                      : 'bg-midnight border-4 border-neon text-neon'
                  }`}
                >
                  <span className="relative z-10">{step.number}</span>
                  
                  {/* Animated ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-neon/30"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </motion.div>
                
                <motion.h3 
                  whileHover={{ color: "#8A2BE2" }}
                  className="text-xl font-bold"
                >
                  {step.title}
                </motion.h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.description}
                </p>

                {/* Connector dots */}
                {index < 3 && (
                  <motion.div 
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-neon/20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
