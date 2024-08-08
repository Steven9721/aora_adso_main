/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 161622,
        secondary: {
          DEFAULT:  FF90C01,
          100 : "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100 : "#1E1E2D",
          200: "#232533"
        },
        gray:{
          100: "#CDCDE0"
        },
      },
      fontFamily: {
        pthin: ["Pooppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppings-Regular", "sans-serif"], 
        pmedium: ["Poppins-medium", "sans-serif"],
        psemibold: ["Poppins-Semibold", "Sans-serif"],
        pbold: ["Poppins-bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

