import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          surface: "#111116",
          elevated: "#181822",
          purple: "#9B7CFF",
          "purple-glow": "rgba(155, 124, 255, 0.35)",
          cyan: "#38CFFF",
          "cyan-glow": "rgba(56, 207, 255, 0.35)",
          white: "#FFFFFF",
          gray: "#A7A7B5",
          "gray-dark": "#525263",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Cairo", "Tajawal", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "liquid-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "liquid-glass-elevated":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)",
        "gradient-venom":
          "linear-gradient(135deg, #9B7CFF 0%, #38CFFF 100%)",
        "gradient-venom-subtle":
          "linear-gradient(135deg, rgba(155, 124, 255, 0.15) 0%, rgba(56, 207, 255, 0.15) 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "glass-elevated": "0 12px 40px 0 rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(255, 255, 255, 0.1)",
        "glow-purple": "0 0 30px -5px rgba(155, 124, 255, 0.4)",
        "glow-cyan": "0 0 30px -5px rgba(56, 207, 255, 0.4)",
        "glow-dual": "0 0 40px -8px rgba(155, 124, 255, 0.35), 0 0 40px -8px rgba(56, 207, 255, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 9s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
