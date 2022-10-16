/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 5px 5px -5px rgb(0 0 0 / 10%), 5px 0 5px -5px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
