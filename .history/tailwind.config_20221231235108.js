/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
      colors: {
        color1: "#F0A500",
        color2: "#3c475d",
        color4: "#79B4B7",
        color3: "#9D9D9D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
