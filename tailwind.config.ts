import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A4CA1",
          light: "#3E6FD9",
          dark: "#0F2F6B"
        },
        accent: "#49B6A6"
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite"
      },
      boxShadow: {
        glow: "0 20px 40px -20px rgba(26, 76, 161, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
