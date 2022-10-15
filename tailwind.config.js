/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      colors: {
        darkBlue: "#14172B",
        white: "#ECF0FF",
        lightBlue: "#737BAE",
      },
    },
  },
  plugins: [],
};
