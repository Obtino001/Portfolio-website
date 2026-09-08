"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_DATA, PackageTier } from "@/content/site";
import { fadeInUp, viewportConfig, buttonPress } from "@/lib/motion";
import { Sparkles, CheckCircle, Send, ArrowRight, Shield, Clock } from "lucide-react";

interface FreeAuditSectionProps {
  initialPackage?: PackageTier | null;
}

export const FreeAuditSection: React.FC<FreeAuditSectionProps> = ({ initialPackage }) => {
  const formConfig = SITE_DATA.auditForm;

  const [formData, setFormData] = useState({
    storeUrl: "",
    email: "",
    revenueTier: formConfig.revenueOptions[1],
    bottleneck: formConfig.bottleneckOptions[0],
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="audit" className="py-20 md:py-28 relative bg-surface-subtle/40 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="rounded-3xl bg-surface border border-white/10 shadow-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 radial-card-glow pointer-events-none -z-10" />

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-brand-mint/10 border border-brand-mint/30 flex items-center justify-center mx-auto mb-6 text-brand-mint">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                Audit Request Confirmed!
              </h3>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-6">
                Thanks! I personally received your store information for{" "}
                <span className="font-mono text-brand-mint-light font-bold">
                  {formData.storeUrl || "your store"}
                </span>
                . I will record a private 15–20 minute Loom video breaking down your mobile checkout friction and send it directly to{" "}
                <span className="text-white font-medium">{formData.email}</span> within 72 hours.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-subtle border border-white/10 text-xs font-mono text-slate-400">
                <Clock className="w-4 h-4 text-brand-mint" />
                <span>Estimated turnaround: Under 72 hours</span>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-brand-mint hover:underline font-medium"
                >
                  Submit another inquiry or store
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-xs font-mono text-brand-mint mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{formConfig.badge}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-3">
                  {initialPackage ? `Inquire: ${initialPackage.name}` : formConfig.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                  {formConfig.subtitle}
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Shopify Store URL */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                      Shopify Store URL <span className="text-brand-mint">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="yourbrand.com or store.myshopify.com"
                      value={formData.storeUrl}
                      onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                      Where to send the video <span className="text-brand-mint">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Monthly Revenue */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                      Current Monthly Revenue
                    </label>
                    <select
                      value={formData.revenueTier}
                      onChange={(e) => setFormData({ ...formData, revenueTier: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none transition-colors"
                    >
                      {formConfig.revenueOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Core Goal */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                      Biggest Conversion Bottleneck
                    </label>
                    <select
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none transition-colors"
                    >
                      {formConfig.bottleneckOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Specific context or questions (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., We have heavy mobile ad traffic but cart abandonment is 75%, or we are preparing for a Q3 brand refresh..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <motion.button
                    variants={buttonPress}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-brand-mint hover:bg-brand-mint-light text-background font-bold text-sm shadow-glow-mint transition-colors flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-mint"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Store Details...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{formConfig.ctaText}</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Privacy & Guarantee */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2">
                  <Shield className="w-3.5 h-3.5 text-brand-mint" />
                  <span>{formConfig.guaranteeText}</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
