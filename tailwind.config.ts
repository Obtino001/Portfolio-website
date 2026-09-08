import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        surface: {
          DEFAULT: "#101217",
          subtle: "#14171F",
          elevated: "#191D27",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.14)",
        },
        brand: {
          mint: "#10B981",
          "mint-light": "#34D399",
          "mint-dark": "#059669",
          "mint-glow": "rgba(16, 185, 129, 0.25)",
          amber: "#F59E0B",
          "amber-light": "#FBBF24",
          "amber-glow": "rgba(245, 158, 11, 0.2)",
        },
        muted: {
          light: "#E2E8F0",
          DEFAULT: "#94A3B8",
          dark: "#64748B",
          darker: "#334155",
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-mint": "0 0 24px -4px rgba(16, 185, 129, 0.35)",
        "glow-subtle": "0 8px 32px -4px rgba(0, 0, 0, 0.5)",
        "card-glass": "0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.06)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee-scroll": "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        "luxury-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
