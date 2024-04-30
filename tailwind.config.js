const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'main-back': '#F7FCFA',
      'green': '#638773',
      'hover-green': '#88BA99',
      'button': '#1AE570'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/backgroundhero.png')",
      },
      height: {
        '128': '32rem',
      }
    }
  },
}

