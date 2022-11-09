/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "18px",
    },
    extend: {
      screens: {
        // "2xl": "1440",
      },
    },
  },
  plugins: [],
};
