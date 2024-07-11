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
        "cd-white": "#e8d1ac",
        "cd-red": "#e2190c",
        "cd-blue": "#192db9",
        "cd-green": "#4fb34d",
        "cd-black": "#05090b",
        "web-red": "#940000",
        "web-blue": "#011665",
      },
    },
  },
  plugins: [],
};
export default config;
