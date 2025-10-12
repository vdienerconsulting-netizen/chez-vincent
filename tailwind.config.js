/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
  sable: "#D6CABA",
  terracotta: "#B37357",
  vert: "#596D52",
  noir: "#D6CABA" // 🟢 temporairement même couleur que le fond
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
