/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: {
          DEFAULT: "#ed6235ff",
        },
        primaryYellow: {
          DEFAULT: "#f6e836ff",
        },
        primaryGreen: {
          DEFAULT: "#ceea67ff",
        },
        PrimaryTeal: {
          DEFAULT: "#004d42ff",
        },
        PrimaryGray: {
          DEFAULT: "#212121ff",
        },
        SecondGray: {
          DEFAULT: "#f1f1f1ff",
        },
      },
      fontFamily: {
        founders: ["FoundersGrotesk", "sans-serif"],
        montreal: ["NeueMontreal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
