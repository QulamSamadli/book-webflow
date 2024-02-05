import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 

      'md': '768px',
      // => @media (min-width: 768px) { ... } 

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } 

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } 
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }



    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
export default config;
