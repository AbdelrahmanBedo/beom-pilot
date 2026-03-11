"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-midnight py-20 text-slate-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-neon rounded-lg">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <span className="text-xl font-bold tracking-tight">{content.nav.logo}</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {content.footer.description}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon transition-colors">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{content.footer.company}</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => scrollToSection("why")} className="hover:text-neon transition-colors text-left">{content.footer.links.about}</button></li>
            <li><button onClick={() => scrollToSection("why")} className="hover:text-neon transition-colors text-left">{content.footer.links.why}</button></li>
            <li><button onClick={() => scrollToSection("projects")} className="hover:text-neon transition-colors text-left">{content.footer.links.projects}</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-neon transition-colors text-left">{content.footer.links.contact}</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{content.footer.services}</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-neon transition-colors">{content.footer.links.leadGen}</li>
            <li className="hover:text-neon transition-colors">{content.footer.links.crm}</li>
            <li className="hover:text-neon transition-colors">{content.footer.links.chatbots}</li>
            <li className="hover:text-neon transition-colors">{content.footer.links.workflow}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{content.footer.contact}</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon text-lg">mail</span>
              {content.contact.info.email}
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon text-lg">call</span>
              {content.contact.info.phone}
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon text-lg">location_on</span>
              {content.contact.info.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>{content.footer.copyright}</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
