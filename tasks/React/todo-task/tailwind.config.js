const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
const config ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {backgroundImage: {
      light: "url('./public/images/light-bg.jpg')",
      dark: "url('./public/images/dark-bg.jpg')",
    },},
  },
  plugins: [],
}
module.exports = withMT(config)

