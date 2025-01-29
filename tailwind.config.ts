import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import require from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      },
      fontWeight: {
        figthin: "300",
        figlight: "400",
        figregular: "500",
        figmedium: "600",
        figsemibold: "700",
        figbold: "800",
        figextrabold: "900",
      },
    },
  },
  plugins: [daisyui, require('tailwind-scrollbar')]
};

export default config;