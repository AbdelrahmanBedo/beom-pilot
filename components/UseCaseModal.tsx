"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface UseCaseDetails {
  title: string;
  description: string;
  details: string[];
  benefits: string[];
}

const useCasesContent: UseCaseDetails[] = [
  {
    title: "AI Customer Assistant",
    description: "Provide instant, 24/7 intelligent support that handles customer inquiries instantly. Our AI assistants understand context, sentiment, and can resolve issues without human intervention.",
    details: [
      "Natural language processing for human-like conversations",
      "Multi-language support for global customers",
      "Instant responses 24/7/365",
      "Handles thousands of conversations simultaneously",
      "Learns from interactions to improve over time",
      "Seamless handoff to human agents when needed",
      "Integration with existing helpdesk and CRM systems"
    ],
    benefits: [
      "40% reduction in support costs",
      "Instant response time (under 2 seconds)",
      "85% of issues resolved without human agent",
      "Improved customer satisfaction scores"
    ]
  },
  {
    title: "Customer Feedback Automation",
    description: "Automate the entire feedback loop from collection to analysis. Turn customer voices into actionable insights that drive business growth.",
    details: [
      "Automated feedback collection via email, SMS, and web",
      "AI-powered sentiment analysis",
      "Real-time alerts for negative feedback",
      "Trend identification and reporting",
      "Net Promoter Score (NPS) tracking",
      "Integration with CRM for customer journey mapping",
      "Customizable feedback forms and surveys"
    ],
    benefits: [
      "3x more feedback collected automatically",
      "Real-time sentiment insights",
      "Faster response to customer issues",
      "Data-driven product improvements"
    ]
  },
  {
    title: "Sales Automation",
    description: "Streamline your entire sales pipeline automatically. From lead capture to deal closure, let automation handle the repetitive tasks while your team focuses on selling.",
    details: [
      "Automated lead scoring and prioritization",
      "CRM data entry and synchronization",
      "Automated follow-up sequences",
      "Meeting scheduling and calendar management",
      "Quote and proposal generation",
      "Pipeline tracking and forecasting",
      "Sales analytics and reporting"
    ],
    benefits: [
      "50% more time for selling activities",
      "30% higher conversion rates",
      "15 hours saved weekly on admin tasks",
      "Never miss a follow-up again"
    ]
  },
  {
    title: "Lead Generation Automation",
    description: "Build a continuous stream of qualified leads with automated data collection, enrichment, and qualification. Focus only on leads that matter.",
    details: [
      "Automated data collection from multiple sources",
      "Email verification and validation",
      "Company and contact data enrichment",
      "Lead scoring based on firmographic data",
      "Webhook integration with CRM",
      "Automated lead distribution",
      "Custom qualification workflows"
    ],
    benefits: [
      "1,000+ qualified leads per month",
      "90% reduction in lead research time",
      "60% improvement in lead quality",
      "Lower cost per qualified lead"
    ]
  },
  {
    title: "Operations Automation",
    description: "Eliminate manual workflows and connect your business systems. Let automation handle task coordination, approvals, and process management.",
    details: [
      "Custom workflow builder with no-code interface",
      "Cross-app data synchronization",
      "Automated task assignment",
      "Approval workflow automation",
      "Real-time status notifications",
      "Audit trail and compliance logging",
      "Integration with 500+ business apps"
    ],
    benefits: [
      "20+ hours saved weekly on manual tasks",
      "95% reduction in data entry errors",
      "70% faster process completion",
      "Improved team collaboration"
    ]
  },
  {
    title: "Reporting Automation",
    description: "Get real-time insights without the manual work. Automated dashboards and scheduled reports keep stakeholders informed with the latest data.",
    details: [
      "Multi-source data aggregation",
      "Real-time KPI dashboards",
      "Scheduled report generation and delivery",
      "Custom metrics and alerts",
      "Export to PDF, Excel, CSV",
      "Interactive data visualizations",
      "White-label report options"
    ],
    benefits: [
      "10+ hours saved weekly on reporting",
      "Always up-to-date business insights",
      "Faster data-driven decisions",
      "Professional branded reports"
    ]
  }
];

interface UseCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  useCaseIndex: number;
}

export default function UseCaseModal({ isOpen, onClose, useCaseIndex }: UseCaseModalProps) {
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

  const useCase = useCasesContent[useCaseIndex];
  const icon = ["support_agent", "rate_review", "trending_up", "person_search", "settings", "analytics"][useCaseIndex];

  if (!useCase) return null;

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
                  {useCase.title}
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
                {useCase.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon">info</span>
                  How It Works
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {useCase.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.03 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
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
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon">verified</span>
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + index * 0.03 }}
                      className="flex items-center gap-2 text-neon font-medium"
                    >
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
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
