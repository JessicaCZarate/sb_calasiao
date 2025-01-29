import type { Config } from "tailwindcss";
import daisyui from "daisyui";
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
        figtree: ["var(--font-figtree)"],
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
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 26.66%": {
            transform: "translateY(0%)",
          },
          "33.33%, 60%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 93.33%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
      },
    },
  },
  plugins: [daisyui, require("tailwind-scrollbar")],
};

export default config;
