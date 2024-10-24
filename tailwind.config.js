/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'reklame': ['"Reklame Script"', 'cursive'], // Add the font and fallback
        'suez': ['"Suez One"', 'serif'],
      },
      height :{
        'vh-20': 'calc(100vh - 5rem)',
      },
      screens : {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors : {
        "mainRed" : "#DA392B",
        "mainBG" : "#f6f4f0",
        "lightPurple" : "#5F5BCD",
        "darkPurple" : "#272443"
      },
      boxShadow: {
        'custom-red': '1px 1px 15px #DA392B',
        'custom-purple': '1px 1px 4px #5F5BCD',
      },
    },
  },
  
  plugins: [],
}

