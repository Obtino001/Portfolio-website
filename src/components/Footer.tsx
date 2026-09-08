"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/content/site";
import { Sparkles, Clock, Globe, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      // Format time in GMT+5
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCurrentTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080B] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Solo Bio */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center font-display font-bold text-white">
                  <span className="text-brand-mint">Y</span>
                </div>
                <span className="font-display font-bold text-lg text-white">
                  Yasir<span className="text-brand-mint">.</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                {SITE_DATA.footer.tagline} Direct senior engineering without the agency markup or telephone game.
              </p>

              {/* Local Time & Availability Pill */}
              <div className="inline-flex flex-wrap items-center gap-3 p-2.5 rounded-xl bg-surface border border-white/[0.06] text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-brand-mint" />
                  <span className="font-mono">{currentTime || "Loading time..."} (GMT+5)</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5 text-brand-mint-light font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
                  <span>Available for Q2 Sprint</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#projects" className="hover:text-brand-mint transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-brand-mint transition-colors">
                  Conversion Metrics
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-brand-mint transition-colors">
                  Nordic Haven Deep Dive
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brand-mint transition-colors">
                  Productized Packages
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-mint transition-colors">
                  Sprint Roadmap
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-mint transition-colors">
                  Engineering FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Free Audit CTA */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted font-bold mb-4">
                Work With Yasir
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Have a store doing $30k+/mo? Get a private 20-minute video audit with zero obligation.
              </p>
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-mint hover:bg-brand-mint-light text-background font-bold text-xs shadow-glow-mint transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 fill-background" />
                <span>Request Free Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{SITE_DATA.footer.copyright}</div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-600">
              Native Liquid • Zero App Clutter • Sub-Second TTI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
