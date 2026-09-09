/**
 * Yasir Malik Portfolio — Project Detail Modal (project-modal.js)
 * High-speed interactive inspection popup for all 14 Shopify client case studies
 */
(function () {
  'use strict';

  const projectDB = {
  "lucy-pittaway": {
    "client": "Lucy Pittaway",
    "category": "Shopify Plus Migration",
    "metric": "12,000+ SKUs Migrated",
    "timeframe": "4-Week Turnaround",
    "title": "Shopify Plus Migration with 100% SEO Preservation",
    "results": [
      {
        "val": "12k+",
        "label": "SKUs Migrated"
      },
      {
        "val": "0s",
        "label": "Launch Downtime"
      },
      {
        "val": "99",
        "label": "Lighthouse Speed"
      }
    ],
    "challenge": "Migrating an intricate art catalogue of 12,000+ framed and mounted variants from Aero CMS with custom relational pricing, while safeguarding 10+ years of organic Google search rankings.",
    "solution": "Built an automated ETL Python pipeline that extracted, normalized, and imported products, customers, and order history into Shopify Plus with custom 301 redirect mapping and zero app bloat.",
    "deliverables": [
      "Aero CMS to Shopify Plus automated data migration pipeline",
      "301 SEO redirect mapping preservation (0 ranking loss)",
      "Custom Liquid 2.0 art framing and sizing selector",
      "High-speed collection filters and instant search setup"
    ],
    "techStack": [
      "Shopify Plus",
      "Liquid 2.0",
      "Python ETL",
      "Metafields",
      "Core Web Vitals"
    ]
  },
  "etech-mobility": {
    "client": "Etech Mobility",
    "category": "Website Redesign & CRO",
    "metric": "+48.2% Conversion Lift",
    "timeframe": "3-Week Sprints",
    "title": "High-Ticket Mobility Storefront UX & Conversion Overhaul",
    "results": [
      {
        "val": "+48.2%",
        "label": "Conversion Lift"
      },
      {
        "val": "-34%",
        "label": "Cart Abandonment"
      },
      {
        "val": "1.8x",
        "label": "Mobile Revenue"
      }
    ],
    "challenge": "High-ticket electric mobility buyers experienced confusion around custom battery specs, delivery logistics, and financing options, leading to severe cart drop-offs on mobile devices.",
    "solution": "Designed and engineered an interactive specification builder, transparent Klarna financing display directly on PDP, sticky mobile buy box, and trust verification badges.",
    "deliverables": [
      "Custom mobile-first Shopify 2.0 theme from Figma",
      "Interactive battery range & spec comparison builder",
      "Sticky mobile Add-to-Cart drawer with cross-sells",
      "Klarna & Clearpay payment installment integration"
    ],
    "techStack": [
      "Shopify 2.0",
      "Liquid",
      "JavaScript",
      "Figma UX",
      "CRO Framework"
    ]
  },
  "team-monaco": {
    "client": "Team Monaco",
    "category": "New Brand Launch",
    "metric": "0.78s Global Load Time",
    "timeframe": "2-Week Launch",
    "title": "Global Motorsport Luxury DTC Apparel Storefront",
    "results": [
      {
        "val": "0.78s",
        "label": "Global Load Time"
      },
      {
        "val": "14",
        "label": "Currencies Supported"
      },
      {
        "val": "4.6%",
        "label": "Benchmark Conversion"
      }
    ],
    "challenge": "Launching an ultra-premium motorsport apparel brand requiring sub-second load times worldwide, multi-currency support, and strict brand guidelines.",
    "solution": "Hand-crafted a minimalist, asset-optimized Shopify 2.0 theme leveraging Shopify Markets for native local currency billing without third-party redirects.",
    "deliverables": [
      "Bespoke luxury Liquid 2.0 theme",
      "Shopify Markets multi-currency setup",
      "Dynamic interactive size guide modal",
      "Pre-order & inventory release notifications"
    ],
    "techStack": [
      "Shopify Markets",
      "Liquid 2.0",
      "Figma",
      "Klaviyo",
      "Tailwind CSS"
    ]
  },
  "bedology": {
    "client": "Bedology",
    "category": "Interactive Configurator",
    "metric": "+34% AOV Increase",
    "timeframe": "3-Week Build",
    "title": "Dynamic Bed & Mattress Customizer Architecture",
    "results": [
      {
        "val": "+34%",
        "label": "Average Order Value"
      },
      {
        "val": "+28%",
        "label": "PDP Engagement"
      },
      {
        "val": "3-Step",
        "label": "Frictionless Funnel"
      }
    ],
    "challenge": "Beds and mattresses have thousands of variant permutations. Native Shopify options were overwhelmed and confused customers.",
    "solution": "Engineered a bespoke interactive customizer utilizing native Metafields and Metaobjects with real-time price tallying and visual swatch preview.",
    "deliverables": [
      "Interactive 3-step configurator component",
      "Metaobject architecture for shared options",
      "Real-time cart line-item attribute bundling",
      "High-speed mobile touch gestures"
    ],
    "techStack": [
      "Shopify Metaobjects",
      "Liquid",
      "JavaScript",
      "Custom App Logic"
    ]
  },
  "laser-base": {
    "client": "The Laser Base",
    "category": "Clinic & Booking",
    "metric": "+52% Online Bookings",
    "timeframe": "2-Week Build",
    "title": "Aesthetic Clinic Service Menu & Seamless Booking Flow",
    "results": [
      {
        "val": "+52%",
        "label": "Booking Conversion"
      },
      {
        "val": "98/100",
        "label": "Mobile Speed"
      },
      {
        "val": "-40%",
        "label": "Support Inquiries"
      }
    ],
    "challenge": "Complex pricing across treatment areas and packages led to high phone call volume instead of instant online deposits.",
    "solution": "Built a clean treatment navigator with instant price calculation, upfront FAQ accordions, and direct calendar integration.",
    "deliverables": [
      "Custom clinic service menu with area selectors",
      "Deposit & appointment scheduling integration",
      "Mobile-first consultation questionnaire"
    ],
    "techStack": [
      "Shopify",
      "Liquid",
      "Booking App API",
      "Tailwind CSS"
    ]
  },
  "lusso": {
    "client": "Lusso",
    "category": "DTC Cycling",
    "metric": "2.4x Mobile AOV",
    "timeframe": "3-Week Redesign",
    "title": "Performance Cycling Apparel Storefront Redesign",
    "results": [
      {
        "val": "2.4x",
        "label": "Mobile AOV"
      },
      {
        "val": "+31%",
        "label": "Add-to-Cart Rate"
      },
      {
        "val": "95+",
        "label": "Core Web Vitals"
      }
    ],
    "challenge": "Legacy theme bloated with unused apps caused severe mobile lag and high bounce rates on high-intent product pages.",
    "solution": "Replaced 6 redundant apps with native Liquid sections, implemented sticky ATC, and engineered dynamic bundle discounts.",
    "deliverables": [
      "Clean-code Shopify 2.0 custom theme",
      "In-cart tier threshold progress bar",
      "Speed optimization eliminating 400KB of render-blocking JS"
    ],
    "techStack": [
      "Liquid 2.0",
      "JavaScript",
      "Klaviyo",
      "CRO"
    ]
  },
  "kms-direct": {
    "client": "KMS Direct",
    "category": "High-Volume Catalogue",
    "metric": "8,000+ Products Handled",
    "timeframe": "4-Week Build",
    "title": "Multi-Division Retail Merchandising & Instant Search",
    "results": [
      {
        "val": "8,000+",
        "label": "Catalogue Products"
      },
      {
        "val": "<50ms",
        "label": "Instant Search Latency"
      },
      {
        "val": "+22%",
        "label": "Search-to-Cart Rate"
      }
    ],
    "challenge": "A vast multi-category catalogue with disjointed categorization made product discovery slow and difficult for shoppers.",
    "solution": "Engineered multi-dimensional facet filtering, predictive instant search, and automated collection hierarchy rules.",
    "deliverables": [
      "Custom facet navigation with instant AJAX filtering",
      "Bulk product spec metafield standardization",
      "High-speed collection templates with lazy loading"
    ],
    "techStack": [
      "Shopify Plus",
      "Storefront Search API",
      "Liquid",
      "Algolia"
    ]
  },
  "extractly": {
    "client": "Extractly",
    "category": "B2B Engineering",
    "metric": "3.1x Quote Volume",
    "timeframe": "3-Week Build",
    "title": "Industrial Clean Air Engineering Portal & CPQ Funnel",
    "results": [
      {
        "val": "3.1x",
        "label": "Quote Requests"
      },
      {
        "val": "+65%",
        "label": "Spec Sheet Downloads"
      },
      {
        "val": "100%",
        "label": "Lead Capture Rate"
      }
    ],
    "challenge": "Industrial B2B clients required custom engineering specifications, airflow calculations, and CAD requests prior to purchasing.",
    "solution": "Engineered an intelligent quote-request builder with dynamic file uploads, specification matrix, and automated CRM sync.",
    "deliverables": [
      "Bespoke B2B engineering showcase theme",
      "Multi-step RFQ (Request for Quote) system",
      "CAD library download gate with email capture"
    ],
    "techStack": [
      "Shopify B2B",
      "Liquid",
      "HubSpot CRM Sync",
      "Tailwind CSS"
    ]
  },
  "extractly-shop": {
    "client": "Extractly Shop",
    "category": "B2B Ecommerce",
    "metric": "100% Native Checkout",
    "timeframe": "2-Week Build",
    "title": "Shopify B2B Spares & Ducting Storefront",
    "results": [
      {
        "val": "100%",
        "label": "Automated Re-orders"
      },
      {
        "val": "4,500+",
        "label": "Component SKUs"
      },
      {
        "val": "+38%",
        "label": "Wholesale Repeat Rate"
      }
    ],
    "challenge": "B2B buyers required quick bulk ordering by SKU, tier pricing, and VAT exemption verification during checkout.",
    "solution": "Engineered quick-order CSV upload, quantity tiered discounts, and seamless B2B company account checkout.",
    "deliverables": [
      "Quick-order pad for contractor bulk entry",
      "Dynamic VAT reverse-charge calculation",
      "Automated trade account registration approval"
    ],
    "techStack": [
      "Shopify Plus B2B",
      "Liquid 2.0",
      "JavaScript",
      "REST API"
    ]
  },
  "ergolex": {
    "client": "Ergolex",
    "category": "German DTC Home",
    "metric": "+44% In-Cart Upsells",
    "timeframe": "3-Week Sprints",
    "title": "Ergonomic Furniture Storefront with Dynamic Cart Drawer",
    "results": [
      {
        "val": "+44%",
        "label": "In-Cart Upsells"
      },
      {
        "val": "\u20ac78",
        "label": "Average AOV Lift"
      },
      {
        "val": "98",
        "label": "Mobile Speed Score"
      }
    ],
    "challenge": "German ergonomic workspace brand needed high trust signals, compliant GDPR checkout, and intelligent accessory cross-sells.",
    "solution": "Built a custom cart drawer with 1-click accessory additions, free shipping milestone bar, and verified German legal seals.",
    "deliverables": [
      "Custom slide-out AJAX cart with dynamic upsells",
      "Free shipping & gift progress indicator",
      "German legal & GDPR compliance integration"
    ],
    "techStack": [
      "Shopify 2.0",
      "Liquid",
      "JavaScript",
      "Figma"
    ]
  },
  "visio-pro": {
    "client": "Visio Pro",
    "category": "Optics DTC",
    "metric": "+62% PDP CR",
    "timeframe": "2-Week Sprint",
    "title": "High-Converting Optics Storefront & Prescription Flow",
    "results": [
      {
        "val": "+62%",
        "label": "PDP Conversion Rate"
      },
      {
        "val": "-28%",
        "label": "Prescription Errors"
      },
      {
        "val": "3.4x",
        "label": "Mobile ROAS"
      }
    ],
    "challenge": "Prescription eyewear requires complex lens power, prism, and coating options that usually confuse mobile buyers.",
    "solution": "Developed a visual 4-step prescription configurator with instant preview, camera upload, and doctor verification.",
    "deliverables": [
      "Prescription upload and selector modal",
      "Interactive lens coating comparative preview",
      "Mobile-first PDP architecture"
    ],
    "techStack": [
      "Shopify",
      "Liquid",
      "Custom JS Engine",
      "Figma"
    ]
  },
  "tipalti": {
    "client": "Tipalti",
    "category": "Fintech Lead Gen",
    "metric": "2x Conversion Lift",
    "timeframe": "1-Week Turnaround",
    "title": "Fintech Enterprise Lead Generation Architecture",
    "results": [
      {
        "val": "2x",
        "label": "Form Completion Lift"
      },
      {
        "val": "<1s",
        "label": "Initial Render Time"
      },
      {
        "val": "99",
        "label": "Performance Score"
      }
    ],
    "challenge": "Fintech enterprise landing pages were experiencing high bounce rates from paid Google & LinkedIn ad traffic.",
    "solution": "Built an ultra-fast, stripped-back conversion landing page with dynamic UTM tracking and two-step micro-commitment form.",
    "deliverables": [
      "Bespoke high-speed landing page template",
      "Two-step lead capture funnel with real-time validation",
      "Marketo & Salesforce CRM API pipeline"
    ],
    "techStack": [
      "Next.js",
      "Tailwind CSS",
      "Marketo API",
      "TypeScript"
    ]
  },
  "velo": {
    "client": "Velo",
    "category": "Campaign Landing Page",
    "metric": "12.5% Conversion Rate",
    "timeframe": "5-Day Turnaround",
    "title": "High-Impact Product Launch Landing Page",
    "results": [
      {
        "val": "12.5%",
        "label": "Conversion Rate"
      },
      {
        "val": "100%",
        "label": "Lighthouse PWA"
      },
      {
        "val": "4.2x",
        "label": "Campaign ROAS"
      }
    ],
    "challenge": "Paid social traffic required a hyper-focused, distraction-free landing page designed strictly to convert first-time buyers.",
    "solution": "Engineered a single-product purchase funnel with social proof ticker, sticky mobile buy button, and instant Apple Pay.",
    "deliverables": [
      "High-conversion direct response landing page",
      "Video background hero with zero LCP penalty",
      "Instant 1-click Express Checkout drawer"
    ],
    "techStack": [
      "Shopify Liquid",
      "Tailwind CSS",
      "JavaScript",
      "Figma"
    ]
  },
  "mr-drapper": {
    "client": "Mr Drapper",
    "category": "Dubai Fashion DTC",
    "metric": "+38% Repeat Orders",
    "timeframe": "2-Week Build",
    "title": "Dubai Luxury Personal Styling & Subscription Platform",
    "results": [
      {
        "val": "+38%",
        "label": "Repeat Orders"
      },
      {
        "val": "AED 450+",
        "label": "Average Order Value"
      },
      {
        "val": "100%",
        "label": "Mobile Friendly"
      }
    ],
    "challenge": "Curated styling subscription box needed a seamless customer portal to select preferences, approve outfits, and manage billing in AED.",
    "solution": "Built a custom customer wardrobe portal with approval workflows, feedback collection, and recurring payment tokenization.",
    "deliverables": [
      "Customer wardrobe approval portal",
      "Custom styling quiz with automated tag assignment",
      "Multi-currency payment integration for UAE & GCC"
    ],
    "techStack": [
      "Shopify Plus",
      "Liquid",
      "Recharge API",
      "JavaScript"
    ]
  }
};


  // Check or inject modal backdrop in DOM
  let backdrop = document.getElementById('project-detail-modal');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'project-detail-modal';
    backdrop.className = 'pdm-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.innerHTML = `
      <div class="pdm-modal">
        <div class="pdm-header">
          <div class="pdm-header-meta">
            <span class="pdm-category-badge" id="pdm-cat">Shopify Build</span>
            <span class="pdm-timeframe" id="pdm-time">3 Weeks</span>
          </div>
          <button class="pdm-close-btn" id="pdm-close-btn" aria-label="Close project modal">&times;</button>
        </div>
        <div class="pdm-body">
          <h2 class="pdm-title" id="pdm-title">Project Case Study</h2>
          <div class="pdm-client" id="pdm-client">Client Name</div>
          
          <div class="pdm-metrics-grid" id="pdm-metrics"></div>

          <div class="pdm-section-heading">The Challenge</div>
          <p class="pdm-desc-p" id="pdm-challenge"></p>

          <div class="pdm-section-heading">The Solution & Architecture</div>
          <p class="pdm-desc-p" id="pdm-solution"></p>

          <div class="pdm-section-heading">Key Deliverables</div>
          <ul class="pdm-deliverables-list" id="pdm-deliverables"></ul>

          <div class="pdm-section-heading">Tech Stack</div>
          <div class="pdm-tags-row" id="pdm-tech"></div>
        </div>
        <div class="pdm-footer">
          <a href="#hero-form" class="btn btn-primary btn-sm" id="pdm-cta-btn">Discuss Similar Project &rarr;</a>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
  }

  const closeBtn = document.getElementById('pdm-close-btn');
  const catEl = document.getElementById('pdm-cat');
  const timeEl = document.getElementById('pdm-time');
  const titleEl = document.getElementById('pdm-title');
  const clientEl = document.getElementById('pdm-client');
  const metricsEl = document.getElementById('pdm-metrics');
  const challengeEl = document.getElementById('pdm-challenge');
  const solutionEl = document.getElementById('pdm-solution');
  const deliverablesEl = document.getElementById('pdm-deliverables');
  const techEl = document.getElementById('pdm-tech');
  const ctaBtn = document.getElementById('pdm-cta-btn');

  function openProjectModal(key) {
    const data = projectDB[key];
    if (!data) return;

    if (catEl) catEl.textContent = data.category || 'Shopify';
    if (timeEl) timeEl.textContent = data.timeframe || 'Delivered on Schedule';
    if (titleEl) titleEl.textContent = data.title || data.client;
    if (clientEl) clientEl.textContent = data.client + ' — ' + (data.metric || '');
    if (challengeEl) challengeEl.textContent = data.challenge || '';
    if (solutionEl) solutionEl.textContent = data.solution || '';

    if (metricsEl) {
      metricsEl.innerHTML = (data.results || []).map(r => `
        <div class="pdm-metric-card">
          <div class="pdm-metric-val">${r.val}</div>
          <div class="pdm-metric-label">${r.label}</div>
        </div>
      `).join('');
    }

    if (deliverablesEl) {
      deliverablesEl.innerHTML = (data.deliverables || []).map(d => `<li>${d}</li>`).join('');
    }

    if (techEl) {
      techEl.innerHTML = (data.techStack || []).map(t => `<span class="pdm-tag">${t}</span>`).join('');
    }

    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeProjectModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeProjectModal();
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      closeProjectModal();
    });
  }

  // Attach to all elements with data-project or matching portfolio items
  function attachTriggers() {
    document.querySelectorAll('[data-project]').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        // If clicking external link inside the card, let it go
        if (e.target.closest('a') && !e.target.closest('a').getAttribute('href').startsWith('#')) return;
        e.preventDefault();
        const key = el.getAttribute('data-project');
        openProjectModal(key);
      });
    });

    // Match portfolio items by client name if data-project is absent
    const itemMap = {
      'lucy pittaway': 'lucy-pittaway',
      'etech mobility': 'etech-mobility',
      'team monaco': 'team-monaco',
      'bedology': 'bedology',
      'laser base': 'laser-base',
      'lusso': 'lusso',
      'kms direct': 'kms-direct',
      'extractly': 'extractly',
      'ergolex': 'ergolex',
      'visio pro': 'visio-pro',
      'tipalti': 'tipalti',
      'velo': 'velo',
      'mr drapper': 'mr-drapper'
    };

    document.querySelectorAll('.portfolio-item').forEach(card => {
      const heading = card.querySelector('h2, .display, .portfolio-title');
      if (heading) {
        const txt = heading.textContent.trim().toLowerCase();
        for (const [name, key] of Object.entries(itemMap)) {
          if (txt.includes(name)) {
            card.setAttribute('data-project', key);
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
              if (e.target.closest('a') && !e.target.closest('a').getAttribute('href').startsWith('#')) return;
              e.preventDefault();
              openProjectModal(key);
            });
            break;
          }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachTriggers);
  } else {
    attachTriggers();
  }

  window.openProjectModal = openProjectModal;
})();
