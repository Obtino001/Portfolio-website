/**
 * Global Motion System Tokens
 * Luxury cubic-bezier [0.22, 1, 0.36, 1] — strictly transform + opacity, zero layout thrash.
 * Fully static when prefers-reduced-motion is active.
 */

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATIONS = {
  micro: 0.22,
  hover: 0.28,
  reveal: 0.55,
  revealSlow: 0.7,
  stagger: 0.08,
} as const;

// Common animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.reveal,
      ease: LUXURY_EASE,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.reveal,
      ease: LUXURY_EASE,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_DURATIONS.stagger,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: MOTION_DURATIONS.hover,
      ease: LUXURY_EASE,
    },
  },
  hover: {
    y: -3,
    scale: 1.01,
    transition: {
      duration: MOTION_DURATIONS.hover,
      ease: LUXURY_EASE,
    },
  },
};

export const buttonPress = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: MOTION_DURATIONS.micro, ease: LUXURY_EASE },
  },
  tap: {
    scale: 0.98,
    transition: { duration: MOTION_DURATIONS.micro, ease: LUXURY_EASE },
  },
};

export const viewportConfig = {
  once: true,
  margin: "-60px",
};
