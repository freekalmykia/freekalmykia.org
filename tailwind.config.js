const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'kalmyk-yellow': '#ffd700',
      'kalmyk-blue': '#3399ff',
      'kalmyk-red': '#d81e05',
    },
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"'],
        'castoro-titling': ["Castoro Titling"],
        'staatliches': ["Staatliches"]
      }
    },
  },
  plugins: [],
}