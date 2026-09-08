"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowDown, ChevronDown, Award } from "lucide-react";
import { SITE_DATA } from "@/content/site";
import { LUXURY_EASE, buttonPress } from "@/lib/motion";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staged load animation timing:
  // Eyebrow (0s) -> Title words (0.12s+) -> Subcopy (0.65s) -> CTAs (0.85s) -> Chips (1.0s)
  // Total ~1.2s sequence with luxury cubic bezier
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: LUXURY_EASE,
      },
    },
  };

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.028,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.48,
        ease: LUXURY_EASE,
      },
    },
  };

  const headlineWords = SITE_DATA.hero.headline.split(" ");

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-grid-pattern">
      {/* Background CSS-Only Soft Gradient Mesh & Grain Drift (Cheap, pauses on reduced-motion) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Ambient Radial Gradient Mesh Spot 1 */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full bg-gradient-to-b from-brand-mint/15 via-emerald-900/10 to-transparent blur-[90px] animate-mesh-drift" />

        {/* Ambient Radial Gradient Mesh Spot 2 (Reverse drift) */}
        <div className="absolute top-[20%] left-[20%] w-[480px] h-[360px] rounded-full bg-teal-500/10 blur-[100px] animate-mesh-drift-reverse" />

        {/* Deep vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow: Shopify Partner / Theme + CRO badge */}
          <motion.div variants={itemFadeUp} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/90 border border-white/10 shadow-card-glass backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-brand-mint">
                <Award className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono font-bold tracking-wide uppercase">
                  {SITE_DATA.hero.eyebrowBadge}
                </span>
              </div>
              <span className="text-slate-600 font-mono text-xs">/</span>
              <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint" />
                </span>
                <span>{SITE_DATA.hero.availabilityBadge}</span>
              </div>
            </div>
          </motion.div>

          {/* H1: Word Stagger Animation */}
          <motion.h1
            variants={wordContainerVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-black tracking-tight text-white leading-[1.08] max-w-4xl mb-6 text-balance"
          >
            {headlineWords.map((word, idx) => {
              const isHighlight =
                word.toLowerCase().includes("speed") ||
                word.toLowerCase().includes("custom") ||
                word.toLowerCase().includes("conversion");

              return (
                <motion.span
                  key={`${word}-${idx}`}
                  variants={wordVariants}
                  className={`inline-block mr-[0.28em] ${
                    isHighlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-mint via-emerald-300 to-teal-200 font-black"
                      : "text-white"
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subcopy: Help DTC/Plus merchants stuck with slow themes & app bloat */}
          <motion.p
            variants={itemFadeUp}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance"
          >
            {SITE_DATA.hero.subheadline}
          </motion.p>

          {/* Action CTAs (Mobile full-width, no overflow) */}
          <motion.div
            variants={itemFadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-14"
          >
            {/* Primary CTA: Hover sheen sweep + press 0.98 */}
            <motion.button
              variants={buttonPress}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={onOpenAuditModal}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-mint hover:bg-brand-mint-light text-background font-bold text-sm shadow-glow-mint transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-brand-mint"
            >
              {/* Sheen sweep overlay */}
              <div className="sheen-overlay" />

              <Sparkles className="w-4 h-4 fill-background relative z-10" />
              <span className="relative z-10">{SITE_DATA.hero.primaryCta}</span>
            </motion.button>

            {/* Secondary CTA: Animated underline draw effect */}
            <motion.a
              variants={buttonPress}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              href="#work"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-surface/80 hover:bg-surface border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm transition-all shadow-card-glass outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
            >
              <span>{SITE_DATA.hero.secondaryCta}</span>
              <ArrowDown className="w-3.5 h-3.5 text-brand-mint group-hover:translate-y-0.5 transition-transform" />
              {/* Smooth underline draw */}
              <span className="absolute bottom-2.5 left-7 right-7 h-[1.5px] bg-brand-mint origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-luxury" />
            </motion.a>
          </motion.div>

          {/* Trust Chips: Years · Stores · Avg CVR Lift */}
          <motion.div
            variants={itemFadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mx-auto"
          >
            {SITE_DATA.hero.trustChips.map((chip, idx) => (
              <div
                key={idx}
                className="flex items-center sm:flex-col sm:items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl bg-surface/70 border border-white/[0.07] hover:border-brand-mint/30 transition-colors shadow-card-glass text-left sm:text-center"
              >
                <span className="text-base sm:text-lg font-display font-black text-brand-mint">
                  {chip.label}
                </span>
                <span className="text-[11px] text-slate-400 font-medium font-mono mt-0.5">
                  {chip.detail}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll chevron: Fades after first scroll */}
      <div
        className={`flex flex-col items-center justify-center pt-8 transition-opacity duration-500 ${
          hasScrolled ? "opacity-0 pointer-events-none" : "opacity-75 hover:opacity-100"
        }`}
      >
        <a
          href="#work"
          aria-label="Scroll to portfolio works"
          className="group flex flex-col items-center gap-1 text-slate-400 hover:text-brand-mint transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-lg p-1"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-muted-dark group-hover:text-brand-mint transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-brand-mint animate-bounce" />
        </a>
      </div>
    </section>
  );
};
