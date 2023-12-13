/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#F2994A",
        yellow: "#F2C94C",
        purple: "#4E598C",
      },
      borderRadius: {
        lg: "1rem",
      },
      fontFamily: {
        product: ["Product-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
