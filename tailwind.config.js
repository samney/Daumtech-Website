/** @type {import('tailwindcss').Config} */
// import { fontFamily } from "tailwindcss/defaultTheme";
// import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.25rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1920px",
        },
        ringColor: {
          DEFAULT: "transparent", // disables unwanted black focus rings
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
