"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputVariants = {
    focus: { borderColor: "#8A2BE2", boxShadow: "0 0 0 3px rgba(138, 44, 226, 0.1)" }
  };

  return (
    <section className="py-24 bg-ice" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-neon/10 text-neon rounded-full text-sm font-medium mb-4"
            >
              Contact
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-midnight">
              {content.contact.title}
            </h2>
            <p className="text-slate-500 mb-10">{content.contact.subtitle}</p>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-midnight">{content.contact.info.title}</h3>
                <div className="space-y-3">
                  {[
                    { icon: "mail", value: content.contact.info.email, href: `mailto:${content.contact.info.email}` },
                    { icon: "mail", value: content.contact.info.email2, href: `mailto:${content.contact.info.email2}` },
                    { icon: "call", value: content.contact.info.phone, href: `tel:${content.contact.info.phone}` },
                    { icon: "call", value: content.contact.info.phone2, href: `tel:${content.contact.info.phone2}` },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, color: "#8A2BE2" }}
                      className="flex items-center gap-3 text-slate-600 transition-colors"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="material-symbols-outlined text-neon"
                      >
                        {item.icon}
                      </motion.span>
                      {item.value}
                    </motion.a>
                  ))}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="material-symbols-outlined text-neon">location_on</span>
                    {content.contact.info.location}
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-midnight">{content.contact.consultation.title}</h3>
                <ul className="space-y-2">
                  {content.contact.consultation.steps.map((step, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 rounded-full bg-neon/10 text-neon flex items-center justify-center text-sm font-bold"
                      >
                        {index + 1}
                      </motion.span>
                      {step}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon/5 rounded-full blur-2xl" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div
                whileFocus="focus"
              >
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.name}
                </label>
                <motion.input
                  variants={inputVariants}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all"
                />
              </motion.div>

              <motion.div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.email}
                </label>
                <motion.input
                  variants={inputVariants}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all"
                />
              </motion.div>

              <motion.div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.company}
                </label>
                <motion.input
                  variants={inputVariants}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all"
                />
              </motion.div>

              <motion.div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.message}
                </label>
                <motion.textarea
                  variants={inputVariants}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all resize-none"
                ></motion.textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon hover:bg-neon/90 disabled:scale-100 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-neon/25 transition-all disabled:opacity-70 relative overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.span 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="material-symbols-outlined"
                      >
                        sync
                      </motion.span>
                      {content.contact.form.sending}
                    </motion.span>
                  ) : isSuccess ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.span 
                        animate={{ scale: [1, 1.2, 1] }}
                        className="material-symbols-outlined"
                      >
                        check_circle
                      </motion.span>
                      {content.contact.form.success}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {content.contact.form.submit}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
