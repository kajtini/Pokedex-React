/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
    },

    colors: {
      "card-border": "#24293F",
      "card-grass": "#1CD80E",
      "card-poison": "#F149FF",
      "card-fire": "#FF9900",
      "card-water": "#14A8FF",
      "card-flying": "#89BDFF",
      input: "#2F5AFF",
      primary: "#060B28",
      text: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
