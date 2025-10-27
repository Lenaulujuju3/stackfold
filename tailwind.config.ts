import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#0d9488",
        blueGradientStart: "#1e40af",
        blueGradientEnd: "#3b82f6",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;