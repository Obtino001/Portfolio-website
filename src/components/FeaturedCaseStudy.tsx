"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/site";
import { fadeInUp, viewportConfig, buttonPress } from "@/lib/motion";
import { CheckCircle2, ArrowRight, Code2, Sparkles, Zap, Terminal } from "lucide-react";

interface FeaturedCaseStudyProps {
  onOpenAuditModal: () => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ onOpenAuditModal }) => {
  const caseData = SITE_DATA.featuredCase;
  const [activeTab, setActiveTab] = useState<"metrics" | "code">("metrics");

  const sampleLiquidCode = `{%- comment -%}
  Yasir's Native In-Drawer Cart Tier Engine (0ms Latency)
  Replaces 3 third-party apps ($450/mo) with pure native Liquid & Ajax API
{%- endcomment -%}

{%- assign free_shipping_threshold = 12000 -%}
{%- assign free_gift_threshold = 20000 -%}
{%- assign cart_total = cart.total_price -%}

<div class="drawer-tier-calculator" data-cart-total="{{ cart_total }}">
  {%- if cart_total < free_shipping_threshold -%}
    {%- assign diff = free_shipping_threshold | minus: cart_total -%}
    <p class="tier-message">Add <strong>{{ diff | money }}</strong> for Free Priority Shipping</p>
    <div class="progress-track">
      <div class="progress-bar" style="width: {{ cart_total | times: 100 | divided_by: free_shipping_threshold }}%;"></div>
    </div>
  {%- else -%}
    <p class="tier-unlocked">🎉 You unlocked <strong>Free Priority Shipping</strong>!</p>
  {%- endif -%}
</div>`;

  return (
    <section id="case-study" className="py-20 md:py-28 relative bg-surface-subtle/60 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-xs font-mono text-brand-mint mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{caseData.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {caseData.brand}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-white/10 text-xs text-slate-300">
            <span className="font-mono text-brand-mint-light font-bold">{caseData.heroResult}</span>
            <span className="text-slate-600">/</span>
            <span>{caseData.timeframe}</span>
          </div>
        </motion.div>

        {/* Editorial Content & Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Interventions */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 leading-snug">
                {caseData.headline}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {caseData.overview}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
                  Key Technical Interventions:
                </h4>
                {caseData.keyInterventions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
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
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-mint text-background font-bold text-xs shadow-glow-mint w-fit"
            >
              <span>Get Similar Results For Your Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>

          {/* Right Column: Tabbed Deep-Dive (Metrics vs Code) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 rounded-2xl bg-surface border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Tab Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-surface-elevated">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "metrics"
                      ? "bg-white/10 text-brand-mint-light"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Conversion Uplift
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === "code"
                      ? "bg-white/10 text-brand-mint-light"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Native Liquid Architecture</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "metrics" ? (
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {caseData.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-surface-subtle border border-white/[0.06] flex flex-col justify-between"
                    >
                      <div className="text-xs text-slate-400 mb-2 font-medium">
                        {stat.label}
                      </div>

                      <div className="flex items-baseline justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 line-through">
                            {stat.before}
                          </span>
                          <span className="text-slate-400 text-xs">→</span>
                          <span className="text-xl font-display font-black text-white">
                            {stat.after}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-brand-mint/10 border border-brand-mint/20 text-[11px] font-mono font-bold text-brand-mint">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-amber-light shrink-0" />
                    <span>Eliminated 9 third-party app subscriptions ($1,730/month saved)</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">100% Native</span>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 bg-[#0B0C10] font-mono text-xs overflow-x-auto">
                <div className="flex items-center gap-2 text-slate-500 pb-3 mb-3 border-b border-white/[0.06]">
                  <Terminal className="w-3.5 h-3.5 text-brand-mint" />
                  <span>snippets/cart-drawer-tiers.liquid</span>
                </div>
                <pre className="text-slate-300 leading-relaxed">
                  <code>{sampleLiquidCode}</code>
                </pre>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
