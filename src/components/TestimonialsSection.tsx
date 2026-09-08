"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/site";
import { fadeInUp, staggerContainer, viewportConfig, cardHover } from "@/lib/motion";
import { Quote, Sparkles } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-surface-subtle/20 border-t border-white/[0.06]">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATOR PROOF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Direct words from scaling founders.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real feedback from DTC operators who replaced agency bloat with senior solo execution.
          </p>
        </motion.div>

        {/* 3 Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SITE_DATA.testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-brand-mint/40 transition-colors shadow-card-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-xs font-mono font-bold text-brand-mint">
                    {t.metricHighlight}
                  </span>
                  <Quote className="w-5 h-5 text-slate-600" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-surface-subtle">
                  <Image
                    src={t.avatarUrl}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.role} • <span className="text-brand-mint-light">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
