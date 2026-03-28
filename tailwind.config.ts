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
          500: "#1c7ed6",
          600: "#1666ad",
          700: "#0f4f86"
        },
        accent: {
          50: "#ecfdf4",
          100: "#d1fae5",
          500: "#059669",
          600: "#047857"
        },
        slate: {
          950: "#0d1b2a"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
