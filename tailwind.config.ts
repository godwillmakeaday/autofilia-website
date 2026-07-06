import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070706",
        asphalt: "#11100d",
        panel: "#171511",
        gold: "#d7a957",
        softgold: "#f2d9a0",
        smoke: "#d8d1c4",
        muted: "#9e9485"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(215,169,87,0.16)"
      },
      backgroundImage: {
        road: "linear-gradient(90deg, rgba(215,169,87,0.08) 1px, transparent 1px), linear-gradient(rgba(215,169,87,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
