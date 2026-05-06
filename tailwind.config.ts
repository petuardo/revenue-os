import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0084C8",
          light: "#4FB8E8",
          dark: "#005A8E",
        },
        bg: "#07080A",
        surface: "#0F1114",
        surface2: "#161A1E",
        text: "#F0F2F5",
        muted: "#7A8594",
        stroke: "#1E2530",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      fontSize: {
        "hero": "clamp(2.75rem, 6vw, 5rem)",
      },
    },
  },
  plugins: [],
};
export default config;
