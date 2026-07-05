import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        asphalt: "#07080A",
        carbon: "#101216",
        smoke: "#E6E0D7",
        brass: "#D8A84F",
        ember: "#F25C2E",
      },
      boxShadow: {
        glow: "0 0 80px rgba(216,168,79,0.18)",
      }
    },
  },
  plugins: [],
};

export default config;
