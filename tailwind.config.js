const colors = require('tailwindcss/colors');
const color = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: color.trueGray,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  plugins: [],
};
