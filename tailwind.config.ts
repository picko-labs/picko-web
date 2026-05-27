import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // K-Culture Official Brand Colors
        primary: {
          DEFAULT: "#F04040",
          dark: "#8C1818",
          light: "#F56E6E",
          tint: "#FDDEDE",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#4A8FE0",
          dark: "#1A3580",
          light: "#7AB0EE",
          tint: "#D6E8FA",
          foreground: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#F5B820",
          dark: "#965800",
          light: "#F8CE60",
          tint: "#FEF3D6",
          foreground: "#ffffff",
        },
        neutral: {
          night: "#111318",
          dusk: "#4A4D55",
          paper: "#E8E6E1",
          cream: "#F7F5F2",
        },
        
        // shadcn/ui convention mappings
        border: "#E8E6E1",
        input: "#E8E6E1",
        ring: "#F04040",
        background: "#ffffff",
        foreground: "#111318",
        muted: {
          DEFAULT: "#F7F5F2",
          foreground: "#4A4D55",
        },
        accent: {
          DEFAULT: "#F7F5F2",
          foreground: "#111318",
        },
        destructive: {
          DEFAULT: "#F04040",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111318",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#111318",
        },
      },
      
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      
      fontSize: {
        label: ["11px", { lineHeight: "1.4", fontWeight: "500" }],
        caption: ["13px", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["15px", { lineHeight: "1.5", fontWeight: "400" }],
        headline: ["17px", { lineHeight: "1.4", fontWeight: "600" }],
        title: ["22px", { lineHeight: "1.3", fontWeight: "600" }],
        display: ["28px", { lineHeight: "1.2", fontWeight: "600" }],
      },
      
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      
      fontFamily: {
        sans: [
          "var(--font-pretendard)",
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.08)",
        md: "0 4px 16px rgba(0,0,0,0.1)",
        lg: "0 8px 32px rgba(0,0,0,0.12)",
        floating: "0 4px 16px rgba(0,0,0,0.08)",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      transitionDuration: {
        fast: "0.15s",
        base: "0.2s",
        slow: "0.3s",
      },
      
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        ease: "ease",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
