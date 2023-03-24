/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        "2xl": "1280px",
        overlay: "1024px",
      },
    },
    extend: {
      fontSize: {
        title: ["20px"],
        search: ["16px"],
        sm: ["12px"],
      },
      borderRadius: {
        sm: ".225rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        black: {
          default: "#000",
          nav: "#121212",
          "nav-hover": "#252525",
          overlay: "#1e1e1f",
        },
        yellow: {
          default: "#F5C518",
          hover: "#e2b717",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
      PointerEvents: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
