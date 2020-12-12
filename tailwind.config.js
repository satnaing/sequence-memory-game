module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bgcolor: "#30475E",
      bgcolor2: "#2F3234",
      primary: "#34626C",
      "primary-100": "#3C727D",
      secondary: "#F3EAC2",
      yellow: "#F5B461",
      "yellow-100": "#f3a949",
      red: "#EC524B",
      blue: "#9AD3BC",
      white: "#F3EAC2",
    },
    fontFamily: {
      gugi: "Gugi, cursive",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
