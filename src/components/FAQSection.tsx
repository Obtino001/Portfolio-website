"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/content/site";
import { fadeInUp, viewportConfig } from "@/lib/motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(SITE_DATA.faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-brand-mint mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>HONEST ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Zero ambiguity. Everything you need to know about working directly with a solo senior Shopify engineer.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SITE_DATA.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-surface-elevated border-brand-mint/40 shadow-glow-subtle"
                    : "bg-surface border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-brand-mint uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04]">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-display font-bold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div className="p-1 rounded-full bg-white/[0.05] text-slate-300 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-brand-mint" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
