/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    'reklame': ['"Reklame Script"', 'cursive'], // Add the font and fallback
  },
  plugins: [],
}

