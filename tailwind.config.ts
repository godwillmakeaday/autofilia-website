import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        night: "#080808",
        smoke: "#bdb5aa",
        pearl: "#f4ece0",
        gold: "#d9a94f",
        copper: "#7a4a2b"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(217, 169, 79, 0.16)",
        panel: "0 30px 120px rgba(0,0,0,.55)"
      }
    }
  },
  plugins: []
};

export default config;
