/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#01959F",
          50: "#F7FEFF",
          100: "#4DB5BC",
        },
        success: {
          DEFAULT: "#43936C",
          50: "#F8FBF9",
          100: "#B8DBCA",
        },
        danger: {
          DEFAULT: "#E11428",
          50: "#FFFAFA",
          100: "#F5B1B7",
        },
        warning: {
          DEFAULT: "#FA9810",
          50: "#FFFCF5",
          100: "#FEEABC",
        },
        black: {
          DEFAULT: "#1D1F20",
          50: "#404040",
          100: "#E0E0E0",
          200: "#333333",
        },
      },
    },
  },
  plugins: [],
};
