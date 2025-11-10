// Animation constants
export const ANIMATION = {
  EASE: "back.inOut(1.7)",
  SPEED_MULTIPLIER: 3.0,
  DRAGONFLY_HOVER_DELAY: 0.8,
  ENTRANCE_DELAYS: {
    DRAGONFLY_LOGO: 0.5,
    BARRAGA_LOGO: 2.0,
    SUBTITLE_TEXT: 4.8,
  },
  DURATIONS: {
    FADE_IN: 1.5,
    LOGO_FADE: 2.0,
  },
} as const;

// Color constants
export const COLORS = {
  BACKGROUND: "#0a0a0a",
  PRIMARY: "#F24B42", // Coral
  TEXT: {
    BRIGHT: "#ffffff",
    DIMMED: "#cccccc",
    DARK: "#0a0a0a",
  },
  GLOW: {
    DIMMED: "rgba(204, 204, 204, 0.4)",
    BRIGHT: "rgba(255, 255, 255, 0.7)",
  },
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
} as const;

// Ball/Sphere size configurations
export const BALL_SIZE = {
  MOBILE: 0.35,
  TABLET: 0.45,
  DESKTOP: 0.6,
} as const;

// Typography
export const TYPOGRAPHY = {
  FONT_FAMILY: "'Lato', sans-serif",
  WEIGHTS: {
    LIGHT: 300,
    REGULAR: 400,
    BOLD: 700,
  },
} as const;

// Brand text content
export const BRAND_TEXT = {
  CREATION: "Barraga is in creation.",
  DESCRIPTION:
    "We're shaping timeless clothing — to live with you, and move with your journey.",
  ALT_TEXTS: {
    DRAGONFLY: "Barraga Dragonfly",
    BARRAGA: "Barraga",
  },
} as const;

// API endpoints (for future use)
export const API = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://api.barraga.com",
  ENDPOINTS: {
    NEWSLETTER: "/newsletter/subscribe",
    CONTACT: "/contact",
  },
} as const;

// Feature flags (for future use)
export const FEATURES = {
  NEWSLETTER_ENABLED: false,
  ANALYTICS_ENABLED: false,
  EMAIL_CAPTURE_ENABLED: false,
} as const;

// Types
export type AnimationConfig = typeof ANIMATION;
export type ColorConfig = typeof COLORS;
export type BreakpointsConfig = typeof BREAKPOINTS;
export type BallSizeConfig = typeof BALL_SIZE;
export type TypographyConfig = typeof TYPOGRAPHY;
export type BrandTextConfig = typeof BRAND_TEXT;
export type ApiConfig = typeof API;
export type FeaturesConfig = typeof FEATURES;
