// EXAMPLE DATA — replace later
/**
 * Master Site Content & Configuration
 * Solo Shopify Theme Engineer & CRO Specialist: Yasir
 * 
 * All copy, projects, packages, testimonials, and FAQs are managed here.
 */

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "Full Rebuild" | "Cart & Bundles" | "Speed & CRO" | "Custom Feature";
  timeframe: string;
  headlineMetric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
  badge?: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
}

export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceAnchor: string;
  billingType: string;
  timeline: string;
  tagline: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  ctaLabel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metricHighlight: string;
  avatarUrl: string;
  storeUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Approach" | "Pricing" | "Technical" | "Process";
}

export const SITE_DATA = {
  meta: {
    title: "Yasir — Solo Shopify Theme Engineer & CRO Specialist",
    description: "I build bespoke, high-velocity Shopify themes and high-converting checkout flows for scaling DTC brands. Zero agency bloat. Pure revenue craft.",
    author: "Yasir",
    url: "https://yasir-shopify.com",
    keywords: [
      "Shopify theme developer",
      "Shopify CRO specialist",
      "Liquid performance optimization",
      "e-commerce conversion rate optimization",
      "bespoke Shopify 2.0 theme",
      "DTC Shopify engineer"
    ],
  },

  operator: {
    name: "Yasir",
    role: "Solo Shopify Theme Engineer & CRO Specialist",
    location: "Global / Remote",
    timezone: "GMT+5",
    experienceYears: "6+",
    status: {
      available: true,
      label: "1 Slot Open for Q2",
      badge: "Available Now",
    },
    socials: {
      email: "yasir@example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },

  hero: {
    eyebrowBadge: "Shopify Partner / Theme + CRO Specialist",
    availabilityBadge: "Accepting 1 Brand for Next Sprint",
    headline:
      "Shopify theme & conversion builds for DTC brands that need speed and clean custom sections — not another bloated app stack.",
    subheadline:
      "I help DTC and Shopify Plus merchants stuck with slow themes, declining conversion rates, and 20+ bloated apps replace the clutter with bespoke, native Liquid sections engineered for sub-second mobile velocity.",
    primaryCta: "Free store audit",
    secondaryCta: "See work",
    trustChips: [
      { label: "6+ Years", detail: "Shopify Core & Liquid Craft" },
      { label: "34+ Stores", detail: "Scaled to 7 & 8 Figures" },
      { label: "+38% Avg Lift", detail: "Mobile CVR Optimization" },
    ],
  },

  credibility: {
    heading: "Trusted by founders & growth directors across high-growth DTC",
    subheading: "Past engineering and conversion optimizations across multi-million dollar Shopify stores",
    brands: [
      { name: "AURA LUXE", niche: "Luxury Apparel", icon: "Gem" },
      { name: "KINETIC LABS", niche: "Performance Nutrition", icon: "Zap" },
      { name: "VELO COLLECTIVE", niche: "Modern Cycling Gear", icon: "Compass" },
      { name: "SOLARIS BOTANICALS", niche: "Clean Skincare", icon: "Sparkles" },
      { name: "NOMAD HARDWARE", niche: "Minimalist EDC", icon: "Shield" },
      { name: "LUMEN AUDIO", niche: "Premium Acoustics", icon: "Activity" },
      { name: "FORMA LIVING", niche: "Scandinavian Decor", icon: "Layers" },
      { name: "TERRA ORGANICS", niche: "Direct-to-Consumer Food", icon: "Leaf" },
    ],
  },

  metrics: [
    {
      id: "cvr",
      stat: "+38.4%",
      label: "Average Mobile CVR Uplift",
      description: "Measured across 18 store rebuilds within 60 days post-launch via rigorous GA4 & Triple Whale tracking.",
      accent: "mint",
    },
    {
      id: "gmv",
      stat: "$26M+",
      label: "Client Revenue Influenced",
      description: "Total annual GMV flowing through custom Liquid architectures and cart drawers I built solo.",
      accent: "amber",
    },
    {
      id: "speed",
      stat: "<1.1s",
      label: "Average Mobile Load Time",
      description: "Eliminating third-party script bloat, rendering native Shopify 2.0 sections with pure semantic CSS.",
      accent: "mint",
    },
    {
      id: "solo",
      stat: "100%",
      label: "Direct Solo Execution",
      description: "Zero outsourced juniors, zero telephone game. You work 1-on-1 with the senior engineer writing your code.",
      accent: "amber",
    },
  ],

  featuredCase: {
    tag: "Flagship Case Study",
    brand: "Nordic Haven Living",
    headline: "From sluggish 1.9% mobile CVR to 3.4% with a bespoke native Shopify 2.0 rebuild",
    timeframe: "4-Week Engagement",
    heroResult: "+41% Revenue per Visitor",
    overview:
      "Nordic Haven was suffering from 14 installed Shopify apps dragging mobile speed down to 3.8s. We stripped the bloated theme, built a ground-up Shopify 2.0 architecture with native tiered bundle logic, dynamic shipping bar, and an instant-open slide cart.",
    stats: [
      { label: "Mobile Conversion Rate", before: "1.86%", after: "3.42%", change: "+83.8%" },
      { label: "Average Order Value (AOV)", before: "$114", after: "$149", change: "+30.7%" },
      { label: "Mobile Speed Score", before: "29 / 100", after: "94 / 100", change: "+65 pts" },
      { label: "App Subscription Waste", before: "$1,850/mo", after: "$120/mo", change: "-93.5%" },
    ],
    keyInterventions: [
      "Replaced 4 distinct upsell apps with single native Liquid bundle engine",
      "Engineered bespoke cart drawer with real-time free gift & shipping tier calculation",
      "Rewrote product template with instant variant swatch switching without DOM reloads",
      "Lazy-loaded all tracking scripts through modern Google Tag Manager / Web Pixels",
    ],
  },

  projects: [
    {
      id: "aura-apparel",
      title: "Luxury Apparel Speed & High-AOV Cart Rebuild",
      client: "Aura Luxe",
      category: "Cart & Bundles",
      timeframe: "3 Weeks",
      headlineMetric: "+$32 AOV",
      metricLabel: "Native Upsells & Tiered Shipping",
      summary: "Replaced heavy 3rd-party cart app with a custom slide cart featuring in-drawer cross-sells, free gift progression bar, and one-click post-purchase triggers.",
      challenge: "Store had high traffic from TikTok and Meta ads, but cart abandonment exceeded 78% due to slow app injection delays and disjointed upsell modals.",
      solution: "Engineered ultra-lean native Cart API state engine in pure vanilla TypeScript, cutting cart open latency from 1.8s down to under 60ms.",
      deliverables: [
        "Custom Shopify Cart Drawer with tier progress bar",
        "Dynamic one-click upsell product recommendations",
        "Instant coupon redemption within drawer",
        "Zero external app dependencies"
      ],
      techStack: ["Shopify Liquid", "Vanilla TS", "Shopify Ajax API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&auto=format&fit=crop&q=80",
      results: [
        { label: "AOV Uplift", value: "+28.2%" },
        { label: "Cart Abandonment Drop", value: "-19.4%" },
        { label: "Cart Open Speed", value: "<60ms" },
      ],
    },
    {
      id: "kinetic-nutrition",
      title: "Custom Subscription PDP & Flavor Swatch Engine",
      client: "Kinetic Labs",
      category: "Speed & CRO",
      timeframe: "2 Weeks",
      headlineMetric: "+47%",
      metricLabel: "Subscription Take-Rate",
      summary: "Engineered a high-converting PDP with interactive bundle builder, real-time nutrition facts drawer, and seamless Recharge subscription switching.",
      challenge: "Overwhelmed shoppers abandoned PDPs due to complex variant options and sluggish 3-second page loads from subscription widget scripts.",
      solution: "Redesigned PDP architecture with sub-variant selectors, custom Recharge API integration, and sticky mobile purchase dock.",
      deliverables: [
        "Interactive PDP flavor / size swatch selector",
        "Recharge API custom buy-box (no widget bloat)",
        "Sticky mobile buy bar with dynamic inventory countdown",
        "Instant accordion tabs with localized macro calculators"
      ],
      techStack: ["Shopify 2.0", "Recharge API", "Modern Liquid", "Tailwind"],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&auto=format&fit=crop&q=80",
      results: [
        { label: "Sub Take-Rate", value: "+47%" },
        { label: "Mobile CVR", value: "3.8%" },
        { label: "Lighthouse Score", value: "96" },
      ],
    },
    {
      id: "velo-cycling",
      title: "Bespoke Shopify 2.0 Store Rebuild & Performance",
      client: "Velo Collective",
      category: "Full Rebuild",
      timeframe: "4 Weeks",
      headlineMetric: "0.9s",
      metricLabel: "Time to Interactive",
      summary: "Complete redesign and theme rebuild for premium cycling lifestyle brand, replacing bloated pre-built theme with tailored Shopify 2.0 architecture.",
      challenge: "Pre-built commercial theme was packed with 80+ unused theme settings, unminified vendor libraries, and sluggish page transitions.",
      solution: "Crafted lean, modular sections from scratch, optimizing all assets via modern WebP/AVIF srcset and critical CSS inline rendering.",
      deliverables: [
        "24 custom Shopify 2.0 sections",
        "Custom bike geometry spec comparator",
        "Algolia search & collection filtering integration",
        "Zero layout shift (CLS: 0.01)"
      ],
      techStack: ["Shopify 2.0", "Liquid", "Algolia API", "CSS Grid"],
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&auto=format&fit=crop&q=80",
      results: [
        { label: "TTI Reduction", value: "-68%" },
        { label: "Organic Search Boost", value: "+34%" },
        { label: "Checkout Start Rate", value: "+22%" },
      ],
    },
    {
      id: "nomad-hardware",
      title: "Interactive Product Customizer & Bundle Funnel",
      client: "Nomad Hardware",
      category: "Custom Feature",
      timeframe: "2 Weeks",
      headlineMetric: "+$44",
      metricLabel: "Average Bundle Value",
      summary: "Engineered visual 3-step EDC bundle builder directly on collection and landing pages with real-time inventory validation.",
      challenge: "Customers bought individual items but rarely explored complementary modular gear due to lack of visual pairing.",
      solution: "Created interactive drag-and-drop / select EDC builder that adds multi-line item bundles with automatic Shopify Script discounts.",
      deliverables: [
        "Visual 3-step bundle configuration module",
        "Shopify Scripts / Functions automatic bundle discount",
        "Real-time stock synchronization per module item",
        "Dynamic social proof counter"
      ],
      techStack: ["Shopify Functions", "Custom Elements", "Vanilla JS", "Liquid"],
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80",
      results: [
        { label: "Bundle Adoption", value: "39%" },
        { label: "Multi-item Orders", value: "+54%" },
        { label: "Gross Margin", value: "+18%" },
      ],
    },
    {
      id: "solaris-skincare",
      title: "Mobile-First Quiz Funnel & Skincare Routine Builder",
      client: "Solaris Botanicals",
      category: "Speed & CRO",
      timeframe: "3 Weeks",
      headlineMetric: "4.1%",
      metricLabel: "Quiz-to-Purchase CVR",
      summary: "High-craft diagnostic skin quiz that maps shoppers to bespoke morning/evening regimens with one-click full routine checkout.",
      challenge: "High ad traffic bounced because customers couldn't identify which formulation matched their specific skin barrier concerns.",
      solution: "Engineered a rapid, 5-question visual diagnostic quiz that writes customer tags to Shopify and renders a personalized cart recommendation.",
      deliverables: [
        "Native lightweight diagnostic quiz engine",
        "Personalized regime recommendation page",
        "One-click multi-item routine cart injection",
        "Klaviyo customer profile data sync"
      ],
      techStack: ["Shopify 2.0", "Klaviyo API", "Liquid", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&auto=format&fit=crop&q=80",
      results: [
        { label: "Quiz Completion", value: "81%" },
        { label: "Quiz CVR", value: "4.1%" },
        { label: "Email Opt-in", value: "+62%" },
      ],
    },
  ] as Project[],

  process: [
    {
      step: "01",
      title: "Deep CRO Audit & Friction Mapping",
      duration: "Days 1–3",
      tagline: "Uncover exactly where your store is leaking margin",
      description:
        "I audit your GA4 event pipeline, Heatmaps, Shopify analytics, and code base. We identify every drop-off point, script bottleneck, and mobile UX friction trap.",
      deliverables: [
        "Loom video walkthrough with timestamped friction points",
        "Figma annotated teardown of high-leakage templates",
        "Prioritized engineering backlog ranked by revenue impact",
      ],
    },
    {
      step: "02",
      title: "Architecture & Speed Blueprint",
      duration: "Days 4–7",
      tagline: "Strip the bloat before writing a single line of production code",
      description:
        "We audit all installed apps and third-party scripts. Any feature that can be built natively in Liquid is scheduled for replacement, saving thousands in app fees.",
      deliverables: [
        "App elimination roadmap (typically cut 5–10 apps)",
        "Component architecture spec for Shopify 2.0 sections",
        "Core Web Vitals remediation plan",
      ],
    },
    {
      step: "03",
      title: "Pixel-Perfect Native Engineering",
      duration: "Weeks 2–3",
      tagline: "Sub-second speed, zero layout shifts, rock-solid reliability",
      description:
        "I build your bespoke theme or feature set directly in your development store or GitHub repo. Clean semantic HTML, modular Liquid, lightweight vanilla JS.",
      deliverables: [
        "Fully custom, responsive Shopify 2.0 theme or module",
        "Staging preview store for your team to test in real-time",
        "Full keyboard accessibility and cross-device QA",
      ],
    },
    {
      step: "04",
      title: "Zero-Downtime Launch & A/B Validation",
      duration: "Week 4+",
      tagline: "Smooth deployment backed by statistical data verification",
      description:
        "We launch outside peak shopping hours with zero downtime. I monitor checkout webhooks, tracking pixels, and conversion rates, tuning code post-launch.",
      deliverables: [
        "Zero-downtime theme deployment",
        "GA4, Triple Whale, and Meta Pixel verification",
        "14-day post-launch warranty & speed monitoring",
      ],
    },
  ],

  packages: [
    {
      id: "rapid-audit",
      name: "CRO Rapid Diagnostic & Blueprint",
      badge: "Fast Turnaround",
      priceAnchor: "$1,850",
      billingType: "One-time investment",
      timeline: "72-Hour Delivery",
      tagline: "Ideal for brands generating $30k–$100k/mo needing immediate clarity on why traffic isn't converting.",
      description: "A forensic analysis of your mobile PDP, cart flow, and site speed. You receive actionable engineering fixes you can hand to anyone or have me build.",
      idealFor: "Stores with healthy traffic seeking quick, high-ROI wins before big ad campaigns.",
      deliverables: [
        "20–30 min personalized Loom video breakdown of your store",
        "Figma design mocks for 3 most critical conversion fixes",
        "App bloat audit & removal recommendation sheet",
        "Complete technical speed diagnostic & optimization roadmap",
        "30-minute 1-on-1 strategy call to review findings"
      ],
      ctaLabel: "Book Rapid Audit ($1,850)",
    },
    {
      id: "flagship-rebuild",
      name: "Bespoke Shopify 2.0 Theme Rebuild",
      badge: "Most Popular",
      isPopular: true,
      priceAnchor: "$7,500",
      billingType: "Milestone-based (50/50)",
      timeline: "3–4 Weeks",
      tagline: "The complete transformation: custom design, sub-second speed, and 0% app bloat.",
      description: "A tailored Shopify 2.0 theme engineered specifically for your catalog, brand aesthetic, and average order value targets. Hand-coded from scratch.",
      idealFor: "DTC brands generating $80k–$400k/mo outgrowing template limitations and ready to scale.",
      deliverables: [
        "End-to-end bespoke Shopify 2.0 theme built in native Liquid",
        "High-AOV slide cart drawer with tiered free shipping & gifts",
        "Modular visual sections your team can edit without code",
        "Mobile Lighthouse score guaranteed 90+",
        "Native upsell & bundle logic (replace 3–5 monthly apps)",
        "30 days of dedicated post-launch support & performance tuning"
      ],
      ctaLabel: "Apply for Theme Rebuild",
    },
    {
      id: "growth-retainer",
      name: "Dedicated CRO & Engineering Partner",
      badge: "Limited to 2 Brands",
      priceAnchor: "$3,800",
      billingType: "Monthly retainer",
      timeline: "Ongoing (Monthly Sprints)",
      tagline: "Your senior Shopify engineer on speed dial. Continuous A/B testing and custom feature builds.",
      description: "No agencies, no junior handoffs. A senior partner who continuously optimizes your store, builds new landing pages, and executes conversion experiments.",
      idealFor: "Established brands doing $150k+/mo wanting an ongoing unfair technical advantage.",
      deliverables: [
        "2 dedicated engineering & CRO sprints per month",
        "Custom promotional landing pages & bundle builders",
        "Continuous A/B test implementation via Intelligems / Google Optimize",
        "Guaranteed 24-hour turnaround on critical fixes",
        "Direct Slack/WhatsApp channel with Yasir",
        "Monthly performance & revenue reporting"
      ],
      ctaLabel: "Inquire for Retainer Slot",
    },
  ] as PackageTier[],

  testimonials: [
    {
      id: "nordic-founder",
      quote: "Working with Yasir was night and day compared to our previous agency. He spoke directly about our margins, eliminated 8 apps slowing down our cart, and our mobile conversion jumped from 1.9% to 3.4% within three weeks of launching the new theme.",
      author: "Marcus Lindqvist",
      role: "Co-Founder & CEO",
      company: "Nordic Haven Living",
      metricHighlight: "+83% Mobile CVR",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      storeUrl: "nordichavenliving.com",
    },
    {
      id: "kinetic-cmo",
      quote: "Yasir built our custom subscription PDP and slide cart from scratch. Our Recharge take-rate went up by 47% because the customer experience was finally frictionless. Best technical investment we made all year.",
      author: "Elena Rostova",
      role: "Head of Growth",
      company: "Kinetic Labs Nutrition",
      metricHighlight: "+47% Subscriptions",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      storeUrl: "kineticlabs.co",
    },
    {
      id: "aura-founder",
      quote: "I was hesitant to hire a solo freelancer instead of an agency, but Yasir delivered faster, with cleaner Liquid code and zero fluff. He knows Shopify architecture inside out and treats our site like his own business.",
      author: "David Chen",
      role: "Founder",
      company: "Aura Luxe Fashion",
      metricHighlight: "+$32 Average Order Value",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      storeUrl: "auraluxewear.com",
    },
  ] as Testimonial[],

  faqs: [
    {
      id: "solo-vs-agency",
      question: "Why hire you solo instead of an established Shopify agency?",
      category: "Approach",
      answer: "Agencies charge high overheads for account managers, project coordinators, and executive margins, while passing your actual Liquid code to junior offshore contractors. With me, 100% of your budget goes to senior engineering. You talk directly with the person architecting your theme, resulting in 3x faster turnaround, cleaner code, and zero communication gaps."
    },
    {
      id: "app-bloat",
      question: "How do you replace Shopify apps with native code?",
      category: "Technical",
      answer: "Most Shopify apps inject bloated JavaScript bundles and third-party stylesheets that stall the browser. I build features like slide cart drawers, tiered free shipping progress bars, quantity bundle breaks, and dynamic product swatches directly into your theme using native Liquid, modern web components, and Shopify Ajax/Cart APIs. You get identical or superior functionality with 0ms script delay."
    },
    {
      id: "free-audit",
      question: "What actually happens in the Free 20-Min Video Audit?",
      category: "Process",
      answer: "No automated PDF dumps or generic checklist spam. I record a personalized 15–20 minute Loom video navigating your live store. I test your mobile checkout flow, audit your network waterfall for third-party script bottlenecks, review your product page hierarchy, and give you 3–5 immediate, high-impact fixes you can execute right away."
    },
    {
      id: "timelines",
      question: "What are your typical timelines for delivery?",
      category: "Process",
      answer: "Rapid Audits take 72 hours. Specific feature builds (like custom cart drawers or bundle builders) take 1 to 2 weeks. Full custom Shopify 2.0 theme rebuilds take 3 to 4 weeks from kickoff to production deployment. Because I only take 1–2 clients concurrently, your project receives dedicated, daily engineering focus."
    },
    {
      id: "speed-guarantee",
      question: "Do you guarantee mobile performance and speed?",
      category: "Technical",
      answer: "Yes. For every full rebuild or speed optimization engagement, I guarantee a Mobile Google Lighthouse Performance score of 90+ on core templates (assuming tracking scripts are routed cleanly via Web Pixels or GTM). If we don't hit the agreed performance baseline, I keep optimizing at zero additional cost."
    },
    {
      id: "payment-terms",
      question: "What are your payment terms and engagement structure?",
      category: "Pricing",
      answer: "Fixed-price project engagements are structured as 50% upfront to reserve the sprint slot and 50% upon final delivery and staging approval prior to live deployment. Monthly retainers are invoiced at the beginning of each 30-day sprint with no long-term lock-in."
    },
  ] as FAQItem[],

  auditForm: {
    badge: "Limited Free Slots Each Month",
    title: "Request Your Free 20-Min Shopify CRO & Speed Audit",
    subtitle: "I'll inspect your mobile user journey, identify your biggest drop-off points, and record a private Loom video with exact code & UX fixes for your store. Zero pressure, zero sales pitch.",
    revenueOptions: [
      "Under $30,000 / month",
      "$30,000 – $80,000 / month",
      "$80,000 – $250,000 / month",
      "$250,000+ / month",
    ],
    bottleneckOptions: [
      "Low mobile conversion rate",
      "Sluggish page load & app bloat",
      "High cart abandonment",
      "Low Average Order Value (AOV)",
      "Ready for complete theme overhaul",
      "Other custom requirement",
    ],
    ctaText: "Send My Free Video Audit Request",
    guaranteeText: "100% private. 72-hour turnaround. No spam ever.",
  },

  footer: {
    tagline: "Bespoke Shopify Themes & CRO Engineering for High-Growth DTC.",
    availabilityNote: "Currently booking 1 project slot for Q2.",
    copyright: `© ${new Date().getFullYear()} Yasir. All rights reserved. Crafted with clean code & zero app bloat.`,
  }
};
