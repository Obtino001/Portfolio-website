"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/site";
import { fadeInUp, staggerContainer, viewportConfig, cardHover } from "@/lib/motion";
import { TrendingUp, DollarSign, Gauge, UserCheck } from "lucide-react";

export const MetricsGrid: React.FC = () => {
  const metricIcons = [TrendingUp, DollarSign, Gauge, UserCheck];

  return (
    <section id="metrics" className="py-20 md:py-28 relative">
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
            <span>PROVEN METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Engineered for conversion lift, not decorative fluff.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Every line of Liquid and JavaScript is written with a singular objective: driving faster load times, smoother mobile journeys, and higher average order value.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SITE_DATA.metrics.map((item, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            const isMint = item.accent === "mint";

            return (
              <motion.div
                key={item.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="group relative p-7 rounded-2xl bg-surface border border-white/[0.08] hover:border-brand-mint/40 transition-colors shadow-card-glass flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/5 rounded-full blur-2xl -z-10 group-hover:bg-brand-mint/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded-xl bg-surface-subtle border border-white/5 text-slate-300 group-hover:text-brand-mint transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-muted-dark tracking-wider">
                      Verified
                    </span>
                  </div>

                  {/* Big bold metric display */}
                  <div
                    className={`text-4xl sm:text-5xl font-display font-black tracking-tight mb-2 ${
                      isMint ? "text-brand-mint" : "text-brand-amber-light"
                    }`}
                  >
                    {item.stat}
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-3">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-white/[0.05] pt-4 mt-2">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
