/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#22223b",
        primaryDarkColor: "#161627",
        secondaryColor: "#0496ff",
        whiteColor: "#ffffff",
        lightWhiteColor: "#e5e5e5",
        lightColor: "#212529",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans - serif"],
        headingFont: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
