"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ServiceDetails {
  title: string;
  description: string;
  capabilities: string[];
  impact: string;
}

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceIndex: number;
}

const servicesContent: ServiceDetails[] = [
  {
    title: "Customer Communication Automation",
    description: "Transform your customer support with AI-powered communication tools that engage customers instantly, 24/7. Our intelligent chatbots and automated email systems provide human-like interactions while handling thousands of inquiries simultaneously.",
    capabilities: [
      "AI-powered chatbots with natural language processing",
      "Automated email responders with smart routing",
      "Multi-channel support (Website, WhatsApp, Social Media)",
      "Intelligent FAQ handling and problem resolution",
      "Automated follow-up and follow-through messages",
      "Seamless escalation to human agents when needed",
      "Integration with CRM and helpdesk platforms"
    ],
    impact: "Reduces response time from hours to seconds, improves customer satisfaction by 40%, and handles 80% of inquiries automatically."
  },
  {
    title: "Sales Automation",
    description: "Accelerate your sales pipeline with intelligent automation that nurtures leads, schedules meetings, and closes deals on autopilot. Never let a potential customer slip through the cracks again.",
    capabilities: [
      "Automated lead tracking and scoring",
      "CRM workflow automation and data sync",
      "Meeting scheduling with calendar integration",
      "Automated follow-up sequences",
      "Sales pipeline visualization and analytics",
      "Quote and proposal generation automation",
      "Integration with email marketing platforms"
    ],
    impact: "Increases sales productivity by 50%, reduces administrative time by 15 hours/week, and improves conversion rates by 30%."
  },
  {
    title: "Lead Generation Automation",
    description: "Build a continuous stream of qualified leads with our automated data collection and enrichment tools. Identify, verify, and enrich leads from multiple sources without manual research.",
    capabilities: [
      "Automated business data collection from multiple sources",
      "Lead database creation and organization",
      "Email verification and data enrichment",
      "Campaign-driven prospect identification",
      "Webhook integration with CRM and marketing tools",
      "Real-time lead notifications",
      "Configurable search parameters and filters"
    ],
    impact: "Generates 1,000+ qualified leads monthly, reduces lead research time by 90%, and improves lead quality by 60%."
  },
  {
    title: "Operations & CRM Automation",
    description: "Connect your entire software ecosystem and eliminate manual data entry. Let your systems talk to each other and automate complex operational workflows across departments.",
    capabilities: [
      "Cross-application data synchronization",
      "Custom workflow automation triggers",
      "Task assignment and progress tracking",
      "Approval and escalation workflows",
      "Internal team coordination automation",
      "Real-time data sync between platforms",
      "Custom API integrations"
    ],
    impact: "Eliminates 20+ hours of manual data entry weekly, reduces errors by 95%, and improves team coordination by 70%."
  },
  {
    title: "Automated Reporting & Analytics",
    description: "Stop building spreadsheets manually. Get real-time dashboards and scheduled reports that aggregate data from all your systems and deliver actionable insights to your inbox.",
    capabilities: [
      "Multi-source data aggregation and visualization",
      "Real-time KPI dashboards",
      "Scheduled automated report generation",
      "Custom metric tracking and alerts",
      "Export to PDF, Excel, and email",
      "Interactive data filtering and drill-down",
      "White-label reporting options"
    ],
    impact: "Saves 10+ hours weekly on reporting, provides real-time visibility into business performance, and enables faster data-driven decisions."
  },
  {
    title: "AI-Powered Analysis",
    description: "Leverage advanced AI to analyze documents, extract insights, and classify data at scale. Transform unstructured data into actionable business intelligence.",
    capabilities: [
      "Large-scale document processing and analysis",
      "Sentiment analysis for reviews and feedback",
      "Resume screening and candidate evaluation",
      "Automatic data classification and tagging",
      "AI-generated insights and recommendations",
      "Custom machine learning model training",
      "Predictive analytics and forecasting"
    ],
    impact: "Processes 10,000+ documents in minutes, reduces analysis time by 85%, and uncovers insights that would take humans weeks to find."
  }
];

export default function LearnMoreModal({ isOpen, onClose, serviceIndex }: LearnMoreModalProps) {
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

  const service = servicesContent[serviceIndex];
  const icon = ["forum", "handshake", "filter_alt", "settings_suggest", "table_chart", "neurology"][serviceIndex];

  if (!service) return null;

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
            className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-midnight to-[#252542] rounded-2xl shadow-2xl border border-white/10"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-neon/20 rounded-xl flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-neon text-2xl">{icon}</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl font-bold text-white"
                >
                  {service.title}
                </motion.h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-white">close</span>
              </motion.button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-140px)] px-8 py-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 leading-relaxed mb-6"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon">checklist</span>
                  Key Capabilities
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {service.capabilities.map((cap, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.03 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{cap}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-neon/20 to-purple-500/20 rounded-xl p-5 border border-neon/30"
              >
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon">trending_up</span>
                  Business Impact
                </h3>
                <p className="text-neon font-medium">{service.impact}</p>
              </motion.div>
            </div>

            <div className="px-8 py-4 border-t border-white/10 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="px-6 py-2 bg-neon hover:bg-neon/80 text-white rounded-lg font-medium transition-colors"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
