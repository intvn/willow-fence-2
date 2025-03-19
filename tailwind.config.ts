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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGreen: "var(--darkGreen)",
        lightGreen: "var(--lightGreen)",
        darkGrey: "var(--darkGrey)",
        offWhite: "var(--offWhite)"
      },
      fontFamily: {
        monumentReg: ["MonumentRegular", "sans-serif"],
        monumentUltra: ["MonumentUltrabold", "sans-serif"],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
