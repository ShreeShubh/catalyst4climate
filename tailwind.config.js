/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [flowbite.plugin()],
}
