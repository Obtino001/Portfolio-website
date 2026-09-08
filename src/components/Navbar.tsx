"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";
import { buttonPress } from "@/lib/motion";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger slide-in once the user starts scrolling past the top hero space
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Metrics", href: "#metrics" },
    { label: "Case Study", href: "#case-study" },
    { label: "Process", href: "#process" },
    { label: "Packages", href: "#packages" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-luxury-ease px-4 sm:px-6 lg:px-8 py-3 ${
          scrolled
            ? "translate-y-0 opacity-100 backdrop-blur-xl bg-background/85 shadow-lg shadow-black/50 border-b border-white/[0.08]"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center font-display font-bold text-white group-hover:border-brand-mint/50 transition-colors shadow-sm">
              <span className="text-brand-mint">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white text-base leading-tight group-hover:text-brand-mint-light transition-colors">
                Yasir<span className="text-brand-mint">.</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">
                Shopify Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface/90 border border-white/[0.08] shadow-card-glass backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Condensed "Free audit" CTA Button */}
          <div className="flex items-center gap-3">
            <motion.button
              variants={buttonPress}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-mint hover:bg-brand-mint-light text-background font-bold text-xs transition-all duration-200 shadow-glow-mint outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-brand-mint"
            >
              <Sparkles className="w-3.5 h-3.5 fill-background" />
              <span>Free audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg bg-surface border border-white/10 text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-mint"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-20 z-50 p-5 rounded-2xl bg-surface-subtle border border-white/10 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/10 text-xs text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint" />
                </span>
                <span>{SITE_DATA.hero.availabilityBadge}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-brand-mint py-2 px-3 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-mint text-background font-bold text-sm shadow-glow-mint"
              >
                <Sparkles className="w-4 h-4 fill-background" />
                <span>Free store audit</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
