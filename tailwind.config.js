const defaultTheme = require("tailwindcss/defaultTheme");

const SIDEBAR = {
  BASE_WIDTH: "260px",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        tiny: "3px",
        sm: "5px",
        md: "7px",
        lg: "9px",
      },
      width: {
        sidebar: SIDEBAR.BASE_WIDTH,
      },
      padding: {
        main: SIDEBAR.BASE_WIDTH,
      },
    },
  },
  plugins: [],
};