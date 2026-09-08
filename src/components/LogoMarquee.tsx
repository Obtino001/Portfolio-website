"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/content/site";
import { fadeInUp, viewportConfig } from "@/lib/motion";
import { Sparkles, Gem, Zap, Compass, Shield, Activity, Layers, Leaf } from "lucide-react";

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Gem,
  Zap,
  Compass,
  Sparkles,
  Shield,
  Activity,
  Layers,
  Leaf,
};

export const LogoMarquee: React.FC = () => {
  const brands = SITE_DATA.credibility.brands;
  // Duplicate array to achieve smooth infinite scrolling
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-surface/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-xs font-mono uppercase tracking-widest text-muted"
        >
          {SITE_DATA.credibility.heading}
        </motion.p>
      </div>

      {/* Marquee Container with edge mask */}
      <div className="relative w-full overflow-hidden mask-marquee">
        <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((brand, idx) => {
            const IconComponent = iconMap[brand.icon] || Sparkles;
            return (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center gap-3 px-8 py-2.5 mx-3 rounded-full bg-surface/80 border border-white/[0.05] hover:border-brand-mint/40 transition-colors shadow-sm cursor-default"
              >
                <div className="p-1.5 rounded-md bg-white/[0.04] text-brand-mint">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-display font-bold tracking-wider text-slate-200 uppercase">
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-muted-dark font-medium">
                    {brand.niche}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
