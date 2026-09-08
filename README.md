# Yasir — Shopify Theme Engineer & CRO Specialist Portfolio

A productized personal Shopify portfolio for **Yasir** (solo Shopify theme + CRO freelancer). Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

Designed around the productized clarity of **Stargazer Studio** (metrics as design, fixed-scope packages, recurring free-audit CTAs) and the boutique engineering polish of **Commerce-UI**, **Prosper**, and **Superco**, with 100% solo-operator authenticity.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client islands)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom obsidian dark theme tokens
- **Typography**: `Plus Jakarta Sans` (Display) & `Inter` (Body) via `next/font/google`
- **Motion**: Framer Motion with custom cubic-bezier `[0.22, 1, 0.36, 1]` tokens and `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **Content Architecture**: 100% centralized typed store in `src/content/site.ts`

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
├── src/
│   ├── app/
│   │   ├── globals.css        # Obsidian background, radial glows, scrollbar, marquee mask
│   │   ├── layout.tsx         # Google fonts injection & SEO meta configuration
│   │   └── page.tsx           # Assembled page orchestrator with modal state
│   ├── components/
│   │   ├── Navbar.tsx         # Floating glassmorphism header & mobile drawer
│   │   ├── Hero.tsx           # Display typography, availability badge, proof chips
│   │   ├── LogoMarquee.tsx    # Infinite ticker with gradient edge masks
│   │   ├── MetricsGrid.tsx    # Bento metrics grid (Stargazer pattern)
│   │   ├── FeaturedCaseStudy.tsx # Editorial deep-dive with Liquid code snippet
│   │   ├── ProjectsSection.tsx # 5 showcase cards, category filters, inspection modal
│   │   ├── ProcessSection.tsx # 4-step transparent sprint roadmap
│   │   ├── PackagesSection.tsx# 3 productized pricing tiers ($1,850 / $7,500 / $3,800)
│   │   ├── TestimonialsSection.tsx # Verified founder reviews & metric tags
│   │   ├── FAQSection.tsx     # Accessible accordion answering solo vs agency, app bloat
│   │   ├── FreeAuditSection.tsx # On-page embedded intake form
│   │   ├── FreeAuditModal.tsx # Global slide-over intake modal
│   │   └── Footer.tsx         # Live GMT+5 clock, status pill, footer links
│   ├── content/
│   │   └── site.ts            # // EXAMPLE DATA — replace later (all copy & data)
│   └── lib/
│       └── motion.ts          # Shared cubic-bezier ease, durations, and motion variants
├── tailwind.config.ts         # Obsidian palette, font variables, keyframes
└── tsconfig.json              # TypeScript path aliases (@/*)
```

---

## 🎨 Customizing Content

All copy, project case studies, client logos, packages, pricing, testimonials, and FAQs are located in:
👉 `src/content/site.ts`

To personalize the portfolio:
1. Open [`src/content/site.ts`](src/content/site.ts).
2. Update the `operator` details (name, bio, timezone, email, social links).
3. Replace the `projects` array with your own client case studies and screenshots.
4. Adjust pricing anchors and deliverables in the `packages` array.
5. Modify FAQs or add custom objection handling.

---

## 🎯 Global Motion Tokens

Defined in [`src/lib/motion.ts`](src/lib/motion.ts):
- **Cubic Bezier Ease**: `[0.22, 1, 0.36, 1]` (no spring bounce)
- **Section Reveals**: `y: 20 -> 0`, `opacity: 0 -> 1`, `duration: 0.55s`
- **Micro Hover**: `y: -3px`, `scale: 1.01`
- **Button Press**: `scale: 0.98`
- **Marquee**: GPU accelerated translateX with CSS `mask-image` edge fades
- **Reduced Motion**: Automatically deactivates all transitions when `prefers-reduced-motion` is enabled in browser/OS.

---

## 📜 License
MIT © Yasir
