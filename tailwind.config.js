/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
  sable: "#d6caba",
  terracotta: "#834a43",
  vert: "#7d8453",
  noir: "#0B0B0B" // 🟢 temporairement même couleur que le fond
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
