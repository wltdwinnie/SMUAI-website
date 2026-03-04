import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#010101",
        DeepBlue: "#1B2B54",
        Gold: "#FFD101",
        PaleGold: "#FFDDB6",
        Cloud: "#F4F4F4",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        montserratClassic: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;