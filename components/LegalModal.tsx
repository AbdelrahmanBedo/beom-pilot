"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface LegalSection {
  title: string;
  content?: string;
  list?: string[];
  note?: string;
  subsections?: {
    title: string;
    items: string[];
  }[];
}

interface LegalContent {
  title: string;
  sections: LegalSection[];
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy";
}

const termsContent: LegalContent = {
  title: "Terms of Service",
  sections: [
    {
      title: "1. Introduction",
      content: "Welcome to BEOM. These Terms of Service govern your access to and use of our website, services, and automation solutions. By accessing or using our website, you agree to comply with these Terms."
    },
    {
      title: "2. Company Information",
      content: "BEOM provides business automation solutions, workflow systems, and AI-powered operational tools designed to improve efficiency and support business operations."
    },
    {
      title: "3. Use of the Website",
      content: "Users agree to use the website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the website.",
      list: [
        "Attempt to gain unauthorized access to the website or systems",
        "Use the website to distribute malicious software",
        "Copy or reproduce website content without permission"
      ]
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this website, including text, graphics, system designs, automation workflows, and branding, is the intellectual property of BEOM unless otherwise stated. Unauthorized reproduction, distribution, or commercial use of any materials from the website is strictly prohibited without prior written permission."
    },
    {
      title: "5. Service Descriptions",
      content: "BEOM provides descriptions of automation services and business solutions on the website. While we strive to ensure accuracy, service details may change as solutions evolve or are customized for specific clients."
    },
    {
      title: "6. Client Engagement",
      content: "Any formal engagement with BEOM services will be governed by a separate agreement or proposal that outlines the scope of work, timelines, pricing, and responsibilities of both parties."
    },
    {
      title: "7. Limitation of Liability",
      content: "BEOM shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on the information provided. All services and information are provided on an \"as is\" basis without warranties of any kind."
    },
    {
      title: "8. Third-Party Tools and Integrations",
      content: "Our solutions may involve integrations with third-party tools, platforms, or APIs. BEOM is not responsible for the policies, performance, or availability of third-party services."
    },
    {
      title: "9. Modifications to the Terms",
      content: "BEOM reserves the right to modify or update these Terms at any time. Updates will be posted on this page, and continued use of the website indicates acceptance of the updated terms."
    },
    {
      title: "10. Contact Information",
      content: "If you have any questions regarding these Terms of Service, please contact us through the website contact form or official communication channels."
    }
  ]
};

const privacyContent: LegalContent = {
  title: "Privacy Policy",
  sections: [
    {
      title: "1. Introduction",
      content: "BEOM is committed to protecting the privacy and security of visitors and clients. This Privacy Policy explains how we collect, use, and safeguard information obtained through our website."
    },
    {
      title: "2. Information We Collect",
      content: "",
      subsections: [
        {
          title: "Personal Information:",
          items: ["Name", "Email address", "Phone number", "Company name"]
        },
        {
          title: "Technical Information:",
          items: ["IP address", "Browser type", "Device information", "Website usage data"]
        }
      ]
    },
    {
      title: "3. How We Use the Information",
      content: "The information we collect may be used for:",
      list: [
        "Responding to inquiries and contact requests",
        "Providing information about services",
        "Improving website functionality",
        "Analyzing website traffic",
        "Communicating with potential clients"
      ],
      note: "We do not sell personal data to third parties."
    },
    {
      title: "4. Data Security",
      content: "BEOM implements reasonable technical and organizational measures to protect user information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is completely secure."
    },
    {
      title: "5. Third-Party Services",
      content: "Our website may use third-party services such as analytics tools or integrated platforms. These services may collect information according to their own privacy policies."
    },
    {
      title: "6. Data Retention",
      content: "Personal information submitted through the website may be retained as long as necessary to respond to inquiries or provide services."
    },
    {
      title: "7. User Rights",
      content: "Users may request access to or deletion of their personal information by contacting BEOM."
    },
    {
      title: "8. Policy Updates",
      content: "This Privacy Policy may be updated periodically."
    },
    {
      title: "9. Contact",
      content: "If you have questions regarding this Privacy Policy or how your data is handled, please contact BEOM through the website contact form."
    }
  ]
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
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

  const content: LegalContent = type === "terms" ? termsContent : privacyContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[5vh]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-midnight"
              >
                {content.title}
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-slate-600">close</span>
              </motion.button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-8 py-6">
              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-6 last:mb-0"
                >
                  <h3 className="text-lg font-bold text-midnight mb-2">{section.title}</h3>
                  
                  {section.content && (
                    <p className="text-slate-600 leading-relaxed mb-3">{section.content}</p>
                  )}

                  {section.list && (
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="text-slate-600">{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <p className="text-sm text-neon font-medium mb-3">{section.note}</p>
                  )}

                  {section.subsections && (
                    <div className="space-y-3 mb-3">
                      {section.subsections.map((sub, i) => (
                        <div key={i}>
                          <p className="text-slate-700 font-medium">{sub.title}</p>
                          <ul className="list-disc list-inside ml-4 space-y-1">
                            {sub.items.map((item, j) => (
                              <li key={j} className="text-slate-600">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
