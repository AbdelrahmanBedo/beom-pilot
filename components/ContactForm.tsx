"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

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
    
    // Simulate form submission
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

  return (
    <section className="py-24 bg-ice" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-midnight">
              {content.contact.title}
            </h2>
            <p className="text-slate-500 mb-10">{content.contact.subtitle}</p>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-midnight">{content.contact.info.title}</h3>
                <div className="space-y-3">
                  <a href={`mailto:${content.contact.info.email}`} className="flex items-center gap-3 text-slate-600 hover:text-neon transition-colors">
                    <span className="material-symbols-outlined text-neon">mail</span>
                    {content.contact.info.email}
                  </a>
                  <a href={`mailto:${content.contact.info.email2}`} className="flex items-center gap-3 text-slate-600 hover:text-neon transition-colors">
                    <span className="material-symbols-outlined text-neon">mail</span>
                    {content.contact.info.email2}
                  </a>
                  <a href={`tel:${content.contact.info.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-neon transition-colors">
                    <span className="material-symbols-outlined text-neon">call</span>
                    {content.contact.info.phone}
                  </a>
                  <a href={`tel:${content.contact.info.phone2}`} className="flex items-center gap-3 text-slate-600 hover:text-neon transition-colors">
                    <span className="material-symbols-outlined text-neon">call</span>
                    {content.contact.info.phone2}
                  </a>
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="material-symbols-outlined text-neon">location_on</span>
                    {content.contact.info.location}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-midnight">{content.contact.consultation.title}</h3>
                <ul className="space-y-2">
                  {content.contact.consultation.steps.map((step, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <span className="w-6 h-6 rounded-full bg-neon/10 text-neon flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.company}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-neon focus:ring-2 focus:ring-neon/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon hover:scale-[1.02] disabled:scale-100 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-neon/25 transition-all disabled:opacity-70"
              >
                {isSubmitting ? content.contact.form.sending : isSuccess ? content.contact.form.success : content.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
