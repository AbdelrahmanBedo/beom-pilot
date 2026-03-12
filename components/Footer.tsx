"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-midnight py-20 text-slate-300 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-1 space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/logo.svg"
              alt="BEOM Pilot"
              className="h-24 w-auto"
            />
          </motion.div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {content.footer.description}
          </p>
          <div className="flex gap-4">
            {[
              { icon: "share", href: "#" },
              { icon: "alternate_email", href: "#" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1, backgroundColor: "#8A2BE2" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-white font-bold mb-6">{content.footer.company}</h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: content.footer.links.about, section: "services" },
              { label: content.footer.links.why, section: "why" },
              { label: content.footer.links.projects, section: "projects" },
              { label: content.footer.links.contact, section: "contact" },
            ].map((link, index) => (
              <li key={index}>
                <motion.button
                  onClick={() => scrollToSection(link.section)}
                  whileHover={{ x: 5, color: "#8A2BE2" }}
                  className="hover:text-neon transition-colors text-left"
                >
                  {link.label}
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-white font-bold mb-6">{content.footer.services}</h4>
          <ul className="space-y-4 text-sm">
            {[
              content.footer.links.leadGen,
              content.footer.links.crm,
              content.footer.links.chatbots,
              content.footer.links.workflow,
            ].map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5, color: "#8A2BE2" }}
                className="hover:text-neon transition-colors cursor-pointer"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-white font-bold mb-6">{content.footer.contact}</h4>
          <ul className="space-y-4 text-sm">
            {[
              { icon: "mail", value: content.contact.info.email },
              { icon: "call", value: content.contact.info.phone },
              { icon: "location_on", value: content.contact.info.location },
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <span className="material-symbols-outlined text-neon text-lg">{item.icon}</span>
                <span>{item.value}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {content.footer.copyright}
        </motion.p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service"].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ color: "white" }}
              className="hover:text-white transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
