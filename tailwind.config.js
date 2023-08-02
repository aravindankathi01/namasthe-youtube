/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        128: "38rem",
        126: "36rem",
      },
    },
  },
  plugins: [],
};
