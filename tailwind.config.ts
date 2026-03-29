import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#bcdcff",
          300: "#8ec8ff",
          400: "#59aaff",
          500: "#1c7ed6",
          600: "#1666ad",
          700: "#0f4f86",
          800: "#0c3d68",
          900: "#0a2f52"
        },
        accent: {
          50: "#ecfdf4",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#059669",
          600: "#047857",
          700: "#065f46"
        },
        slate: {
          950: "#0d1b2a"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 23, 42, 0.08)",
        glow: "0 0 20px rgba(28, 126, 214, 0.15)",
        "glow-lg": "0 0 40px rgba(28, 126, 214, 0.2)"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "slide-in-left": "slideInLeft 0.5s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite"
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-18px) scale(1.04)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.15)" }
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
