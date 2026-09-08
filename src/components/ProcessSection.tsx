"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/site";
import { fadeInUp, staggerContainer, viewportConfig, cardHover } from "@/lib/motion";
import { Check, Clock, ArrowRight } from "lucide-react";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 relative bg-surface-subtle/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-brand-mint mb-4">
            <span>THE SPRINT PLAYBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            How we take your store from sluggish to sprint-ready.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A structured, 4-phase engineering cadence designed for speed, clarity, and zero store downtime.
          </p>
        </motion.div>

        {/* 4 Process Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SITE_DATA.process.map((phase) => (
            <motion.div
              key={phase.step}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-7 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-brand-mint/40 transition-colors shadow-card-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-display font-black text-brand-mint">
                    {phase.step}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-subtle border border-white/5 text-xs font-mono text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-brand-mint" />
                    <span>{phase.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs font-mono text-brand-mint-light mb-4">
                  {phase.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {phase.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold mb-1">
                  Deliverables:
                </div>
                {phase.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-brand-mint shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
