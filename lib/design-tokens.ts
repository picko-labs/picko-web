/**
 * Picko Design System Tokens
 * Extracted from K-SPOT Map.html prototype
 * Based on TDS principles + K-Culture brand guidelines
 */

export const colors = {
  // Primary - Attraction Coral (Red)
  primary: {
    dark: "#8C1818",
    DEFAULT: "#F04040",
    light: "#F56E6E",
    tint: "#FDDEDE",
  },
  
  // Secondary - Museum Light (Blue)
  secondary: {
    dark: "#1A3580",
    DEFAULT: "#4A8FE0",
    light: "#7AB0EE",
    tint: "#D6E8FA",
  },
  
  // Tertiary - Festival Vivid (Yellow)
  tertiary: {
    dark: "#965800",
    DEFAULT: "#F5B820",
    light: "#F8CE60",
    tint: "#FEF3D6",
  },
  
  // Neutral
  neutral: {
    night: "#111318",
    dusk: "#4A4D55",
    paper: "#E8E6E1",
    cream: "#F7F5F2",
  },
  
  // Semantic
  background: {
    primary: "#ffffff",
    secondary: "#F7F5F2",
  },
  
  text: {
    primary: "#111318",
    secondary: "#4A4D55",
    tertiary: "#4A4D55",
  },
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
} as const;

export const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
} as const;

export const typography = {
  fontSize: {
    label: "11px",
    caption: "13px",
    body: "15px",
    headline: "17px",
    title: "22px",
    display: "28px",
  },
  
  lineHeight: {
    label: "1.4",
    caption: "1.4",
    body: "1.5",
    headline: "1.4",
    title: "1.3",
    display: "1.2",
  },
  
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
  },
  
  fontFamily: {
    sans: [
      "Pretendard Variable",
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "sans-serif",
    ].join(", "),
  },
} as const;

export const shadows = {
  sm: "0 2px 8px rgba(0,0,0,0.08)",
  md: "0 4px 16px rgba(0,0,0,0.1)",
  lg: "0 8px 32px rgba(0,0,0,0.12)",
  floating: "0 4px 16px rgba(0,0,0,0.08)",
} as const;

export const gradients = {
  primary: "linear-gradient(135deg, #F56E6E 0%, #F04040 60%, #8C1818 100%)",
  secondary: "linear-gradient(135deg, #7AB0EE 0%, #4A8FE0 60%, #1A3580 100%)",
  tertiary: "linear-gradient(135deg, #F8CE60 0%, #F5B820 60%, #965800 100%)",
  neutral: "linear-gradient(135deg, #E8E6E1 0%, #6b7684 60%, #111318 100%)",
} as const;

export const transitions = {
  duration: {
    fast: "0.15s",
    base: "0.2s",
    slow: "0.3s",
  },
  
  timing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    ease: "ease",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  },
} as const;

// Z-index scale
export const zIndex = {
  base: 1,
  marker: 5,
  sidebar: 20,
  toggle: 25,
  modal: 50,
  toast: 100,
} as const;

// Breakpoints (mobile-first)
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
