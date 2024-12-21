/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
      },
      colors: {
        "back": "#F2EED7",
        "primary": "#FEFAE0",
        "heading": "#798645",
      }
    },
  },
  plugins: [],
};
