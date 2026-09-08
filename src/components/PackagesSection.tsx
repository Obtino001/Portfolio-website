"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA, PackageTier } from "@/content/site";
import { fadeInUp, staggerContainer, viewportConfig, cardHover, buttonPress } from "@/lib/motion";
import { Check, Sparkles, Clock, ArrowRight } from "lucide-react";

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageTier) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 md:py-28 relative">
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
            <span>PRODUCTIZED PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Fixed scope. Zero agency overhead.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Transparent pricing without surprise change orders. Choose the package that matches your current scale and growth trajectory.
          </p>
        </motion.div>

        {/* 3 Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {SITE_DATA.packages.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <motion.div
                key={pkg.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  isPopular
                    ? "bg-surface-elevated border-2 border-brand-mint shadow-glow-mint ring-1 ring-brand-mint/40"
                    : "bg-surface border border-white/[0.08] hover:border-white/20 shadow-card-glass"
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono font-bold tracking-wide shadow-md ${
                      isPopular
                        ? "bg-brand-mint text-background"
                        : "bg-surface border border-white/10 text-slate-300"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-display font-extrabold text-white">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-display font-black text-white">
                      {pkg.priceAnchor}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {pkg.billingType}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-mono text-brand-mint-light mb-6">
                    <Clock className="w-3 h-3 text-brand-mint" />
                    <span>{pkg.timeline}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-400 mb-6">
                    <span className="font-semibold text-slate-300">Ideal for: </span>
                    {pkg.idealFor}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold">
                      Scope & Deliverables:
                    </div>
                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  variants={buttonPress}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-colors ${
                    isPopular
                      ? "bg-brand-mint hover:bg-brand-mint-light text-background shadow-glow-mint"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10"
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
