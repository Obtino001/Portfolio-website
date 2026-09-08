"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA, Project } from "@/content/site";
import { fadeInUp, staggerContainer, viewportConfig, cardHover, buttonPress } from "@/lib/motion";
import { ArrowUpRight, X, Check, Layers, Zap } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Full Rebuild", "Cart & Bundles", "Speed & CRO", "Custom Feature"];

  const filteredProjects = selectedCategory === "All"
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-28 relative scroll-mt-20">
      <div id="projects" className="absolute -top-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-brand-mint mb-3">
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Craft you can measure.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-mint text-background font-semibold shadow-glow-mint"
                    : "bg-surface border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid (5 projects) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              onClick={() => setActiveModalProject(project)}
              className={`group relative rounded-2xl bg-surface border border-white/[0.08] hover:border-brand-mint/40 transition-colors shadow-card-glass overflow-hidden cursor-pointer flex flex-col justify-between ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image & Metric Overlay */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-surface-subtle">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/90 backdrop-blur-md border border-white/10 shadow-lg">
                  <span className="text-sm font-display font-black text-brand-mint">
                    {project.headlineMetric}
                  </span>
                  <span className="text-[10px] text-slate-300 font-medium">
                    {project.metricLabel}
                  </span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-dark">
                      {project.client}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {project.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3 group-hover:text-brand-mint-light transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Footer specs & CTA indicator */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-slate-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-medium text-brand-mint group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl rounded-3xl bg-surface border border-white/10 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close Project Modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-brand-mint/10 border border-brand-mint/20 text-xs font-mono font-bold text-brand-mint">
                  {activeModalProject.headlineMetric}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeModalProject.client} • {activeModalProject.timeframe}
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white mb-4">
                {activeModalProject.title}
              </h3>

              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 bg-surface-subtle">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Quantifiable Results Banner */}
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-surface-subtle border border-white/[0.06]">
                {activeModalProject.results.map((r, i) => (
                  <div key={i} className="text-center">
                    <div className="text-base sm:text-lg font-display font-black text-brand-mint">
                      {r.value}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-300">
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted font-bold mb-1">
                    The Challenge
                  </h4>
                  <p className="leading-relaxed">{activeModalProject.challenge}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted font-bold mb-1">
                    The Solo Solution
                  </h4>
                  <p className="leading-relaxed">{activeModalProject.solution}</p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted font-bold mb-2">
                  What Yasir Engineered
                </h4>
                <div className="space-y-2">
                  {activeModalProject.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-mint shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.05] text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  variants={buttonPress}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-full bg-brand-mint text-background font-bold text-xs shadow-glow-mint"
                >
                  Close Inspection
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
