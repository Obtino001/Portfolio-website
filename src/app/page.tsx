"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { MetricsGrid } from "@/components/MetricsGrid";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FreeAuditSection } from "@/components/FreeAuditSection";
import { FreeAuditModal } from "@/components/FreeAuditModal";
import { Footer } from "@/components/Footer";
import { PackageTier } from "@/content/site";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageTier | null>(null);

  const handleOpenAuditModal = (pkg?: PackageTier) => {
    setSelectedPackage(pkg || null);
    setIsModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <main className="min-h-screen bg-background text-slate-100 selection:bg-brand-mint/30 selection:text-brand-mint-light">
      {/* Floating Glassmorphism Navbar */}
      <Navbar onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* Hero Section */}
      <Hero onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* High-density Credibility Marquee */}
      <LogoMarquee />

      {/* Bento Metrics as Primary Design */}
      <MetricsGrid />

      {/* Flagship Editorial Case Study */}
      <FeaturedCaseStudy onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* 5 Project Case Cards with Filter & Inspector */}
      <ProjectsSection />

      {/* 4-Step Transparent Sprint Roadmap */}
      <ProcessSection />

      {/* 3 Productized Pricing Packages */}
      <PackagesSection onSelectPackage={(pkg) => handleOpenAuditModal(pkg)} />

      {/* Operator Testimonials */}
      <TestimonialsSection />

      {/* Candid Technical & Approach FAQs */}
      <FAQSection />

      {/* On-Page Embedded Free Audit Intake */}
      <FreeAuditSection initialPackage={selectedPackage} />

      {/* Global Interactive Free Audit / Inquiry Modal */}
      <FreeAuditModal
        isOpen={isModalOpen}
        onClose={handleCloseAuditModal}
        selectedPackage={selectedPackage}
      />

      {/* Footer with Live GMT+5 Local Time */}
      <Footer onOpenAuditModal={() => handleOpenAuditModal()} />
    </main>
  );
}
