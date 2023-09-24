import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {"0": "#000000"},
        gray: {
          "50": "#ffffff",
          "200": "#F2F3F4",
          "400": "#BCBCBC",
          "800": "#333333",
        },
        neutral: {"500": "#656565", "900": "#1E1E1F"},
        emerald: {"500": "#03A885"},
        sky: {"100": "#CFDFFF", "800": "#1D428B"},
      },
      fontFamily: {
        lato: ["'Lato'", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        "work-sans": ["'Work Sans'", ...fontFamily.sans],
      },
      backgroundImage: {
        100: "linear-gradient(270deg, #03A885 0%, #1D428B 100%)",
      },
    },
    fontSize: {
      xs: ["14px", {}],
      sm: ["16px", {lineHeight: "1.62em"}],
      md: ["18px", {lineHeight: "1.5em"}],
      base: ["20px", {lineHeight: "1.3em"}],
      lg: ["21px", {lineHeight: "3.05em"}],
      xl: ["22px", {lineHeight: "1.32em"}],
      "2xl": ["24px", {lineHeight: "1.5em"}],
      "3xl": ["28px", {lineHeight: "0.57em", letterSpacing: "0.036em"}],
      "4xl": ["36px", {lineHeight: "1.94em"}],
      "5xl": ["44px", {}],
      "6xl": ["48px", {lineHeight: "1.19em"}],
      "7xl": ["56px", {lineHeight: "1.25em"}],
      "8xl": ["65px", {}],
      "9xl": ["68px", {lineHeight: "1em"}],
      "10xl": ["75px", {lineHeight: "1.07em"}],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1368px",
    },
  },
  plugins: [],
};
export default config;
