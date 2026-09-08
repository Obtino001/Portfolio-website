"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA, PackageTier } from "@/content/site";
import { buttonPress } from "@/lib/motion";
import { X, Sparkles, Send, CheckCircle, Clock, Shield } from "lucide-react";

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: PackageTier | null;
}

export const FreeAuditModal: React.FC<FreeAuditModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
}) => {
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

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
          {/* Backdrop click to dismiss */}
          <div className="fixed inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-xl rounded-3xl bg-surface border border-white/10 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Audit Modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-brand-mint/10 border border-brand-mint/30 flex items-center justify-center mx-auto mb-4 text-brand-mint">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Request Received!
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thanks! Yasir will personally record a 15–20 minute Loom teardown of{" "}
                  <span className="font-mono text-brand-mint-light font-bold">
                    {formData.storeUrl || "your store"}
                  </span>{" "}
                  and send it to <span className="text-white">{formData.email}</span> within 72 hours.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-subtle border border-white/10 text-xs font-mono text-slate-400 mb-6">
                  <Clock className="w-3.5 h-3.5 text-brand-mint" />
                  <span>Turnaround: Under 72 hours</span>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-full bg-brand-mint text-background font-bold text-xs shadow-glow-mint"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-[11px] font-mono text-brand-mint mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>
                      {selectedPackage ? `Package Selection: ${selectedPackage.name}` : "Direct With Yasir"}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    {selectedPackage ? `Inquire: ${selectedPackage.name}` : "Claim Your Free 20-Min Video Audit"}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    Direct senior teardown of your mobile conversion bottlenecks. 0% spam.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                      Shopify Store URL <span className="text-brand-mint">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. brandname.com"
                      value={formData.storeUrl}
                      onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                      Work Email <span className="text-brand-mint">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint text-white text-xs outline-none placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                        Monthly Revenue
                      </label>
                      <select
                        value={formData.revenueTier}
                        onChange={(e) => setFormData({ ...formData, revenueTier: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint text-white text-xs outline-none"
                      >
                        {formConfig.revenueOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                        Primary Bottleneck
                      </label>
                      <select
                        value={formData.bottleneck}
                        onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint text-white text-xs outline-none"
                      >
                        {formConfig.bottleneckOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                      Notes or specifics (optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific pages or conversion issues you want me to focus on?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-white/10 focus:border-brand-mint text-white text-xs outline-none placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      variants={buttonPress}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full bg-brand-mint hover:bg-brand-mint-light text-background font-bold text-xs shadow-glow-mint flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Store...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Request Free Teardown Video</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                    <Shield className="w-3 h-3 text-brand-mint" />
                    <span>Private & confidential. 72h turnaround.</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
