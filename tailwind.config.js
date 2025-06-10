/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#edc006',
        'brand-black': '#000000',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        'golos': ['Golos Text', 'sans-serif'],
      },
      borderRadius: {
        'brand': '12px',
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(237, 192, 6, 0.15)',
        'brand-hover': '0 8px 30px rgba(237, 192, 6, 0.25)',
      }
    },
  },
  plugins: [],
}

