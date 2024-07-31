/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Use "class" for toggling dark mode manually with a class
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/assets/bg.jpg')",
        dark: "url('/assets/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};