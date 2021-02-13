const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.lightBlue,
      gray: colors.coolGray,
      white: colors.white,
      red: colors.red
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "3.25rem"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
