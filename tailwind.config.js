/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    extend: {
      fontFamily: {
        primaryRegular: ["Sans Regular"],
        primaryBold: ["Sans Bold"],
        serifBold: ["NotoSerif Bold"],
        SerifRegular: ["NotoSerif Regular"],
      },
      colors: {
        primaryBlack: ["#1B1B1B"],
        primaryOrange: ["#f36135"],
      },
    },
  },
  plugins: [],
};
