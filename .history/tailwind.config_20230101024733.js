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
        color1: "#F0EBE3",
        color2: "#E4DCCF",
        color4: "#C6DCE4",
        color3: "#DAEAF1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};