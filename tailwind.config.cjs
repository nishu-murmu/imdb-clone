/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      borderRadius: {
        sm: ".225rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        black: {
          nav: "#121212",
          "nav-hover": "#252525",
        },
        yellow: {
          default: "#F5C518",
        },
      },
    },
  },
  plugins: [],
}
