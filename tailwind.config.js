/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/js/*.js", "./src/css/input.css"],
  theme: {
    extend: {},
    screens: {
      md: { max: "767px" },
    },
  },
  plugins: [],
};
