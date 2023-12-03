/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightest-blue': '#b3cde0',
        'light-blue':  '#6497b1',
        'medium-blue': '	#005b96',
        'dark-blue': '#03396c',
        'darkest-blue': '#011f4b'
      },
    },
  },
  plugins: [],
}