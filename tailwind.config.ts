/** @format */

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
        bg: "#FFD200",
        primary: "#FF7000",
        secondary: "#16DB93",
        upload: "#EFEA5A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
