/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    colors: {
      'black': {
        100: "#141414",
        90: "#191919",
        80: "#1E1E1E",
        70: "#232323",
        60: "#282828",
        50: "#2D2D2D",
        40: "#323232",
        30: "#373737",
        20: "#3C3C3C",
        10: "#414141"
      },
      white: "#FFFFFF"
    },
    fontFamily: {
      Glysa: 'Glysa',
      Lexend: 'Lexend Deca',
    },
    fontSize: {
      sm: ['12px', '12px'],
      base: ['14px', '20px'],
      lg: ['16px', '24px'],
      xl: ['24px', '40px'],
      '2xl': ['32px', '48px'],
    },
    spacing: {
      '0': '0%',
      '1': '0.01em',

    }
  },
  plugins: [],
}