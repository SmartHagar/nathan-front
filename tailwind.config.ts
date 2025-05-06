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
        secondary: "#FFA100",
        upload: "#EFEA5A",
        link: "#007f5f",
      },
      backgroundImage: {
        login: "url('/images/bg/login.jpg')",
        main: "url('/images/bg/main.png')",
        asset: "url('/images/bg/asset.png')",
        sdm: "url('/images/bg/sdm.png')",
      },
      fontFamily: {
        vidaloka: ["Vidaloka", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
