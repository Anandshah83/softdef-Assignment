import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'flora-dark': '#0d1a0e',
        'flora-card': '#131f14',
        'flora-green': '#4ade80',
      },
    },
  },
  plugins: [],
};

export default config;
