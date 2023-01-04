/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Plus Jakarta Sans"',...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')
  ],
}
