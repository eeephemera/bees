import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3056D3", // Define your primary color here
        dark: "#1D2144",
        "body-color": "#636363",
        "dark-6": "#959CB1",
        stroke: "#EAEAEA",
        "gray-1": "#F8F9FB",
        "gray-2": "#F5F5F5",
        "gray-7": "#E5E7EB",
        "dark-2": "#2A2D4E",
        "dark-3": "#4F5270",
      },
    },
  },
  plugins: [],
};

export default config;
