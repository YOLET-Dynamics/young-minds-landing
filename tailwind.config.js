/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      display: ["ITC"],
      body: ["ITC"],
    },
    screens: {
      mobm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        22: "5.5rem",
      },
      fontSize: {
        "2xs": "0.65rem",
        "3xs": "0.55rem",
        "10xl": "12rem",
        "12xl": "16rem",
        "13xl": "18rem",
        "14xl": "20rem",
        "16xl": "24rem",
        "20xl": "32rem",
      },
      colors: {
        ymGreen: {
          700: "#2e4223",
        },
        ymPink: {
          700: "#de9ee5",
        },
        ymBlack: {
          300: "#1E1E1E",
          500: "#1E2328",
        },
      },
    },
  },
  plugins: [require("tailwind-hamburgers"), require("tailwindcss-animate")],
};
