const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      mono: ['Red Hat Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontFamily: {
        primary: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#6230A3',
        secondary: '#FBD587',
        black: '#010101',
        white: '#FFFFFF',
        dark: '#25123D'
      }
    },
  },
  plugins: [],
}