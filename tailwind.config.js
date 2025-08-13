/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#1D4ED8"
      }
    }
  },
  plugins: []
};