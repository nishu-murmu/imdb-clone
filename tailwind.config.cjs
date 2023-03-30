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
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        input: "0 0 3px 2px rgba(228,121,17,.5)",
      },
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
        light: {
          50: "#f7f8fa",
          100: "#e7e9ec",
          200: "#F8F8F8",
        },
        black: {
          default: "#000",
          nav: "#121212",
          "nav-hover": "#252525",
          overlay: "#1e1e1f",
        },
        dark: {
          200: "#DFDFDF",
        },
        blue:{
          150: "#518DD8",
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
