/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
}