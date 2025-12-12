const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens
      },
      colors: {
        'kalmyk-yellow': '#ffd700',
        'kalmyk-blue': '#3399ff',
        'kalmyk-red': '#d81e05',
        ...defaultTheme.colors
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"'],
        'castoro-titling': ["Castoro Titling"],
        'staatliches': ["Staatliches"],
        'libre': ['"Libre Baskerville"']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}