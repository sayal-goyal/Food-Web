/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'b4': '1180px',
        'tab': '900px',
        'b2': '700px',
        'b1': '450px',
      },
      colors: {
        'blue-Pri': '#11111d',
        'blue-Sec': '#1d1b31',
        'bluePrimary': '#11111d',
        'blueSecondry': '#1d1b31',
        'bgPrimary': '#fff',
        'bgSecondry': '#f1f5f9',
        'top-nav-search': 'rgba(108, 112, 115, 0.51)',
        'stop': '#ad1212',
        'txtblackPrimary': '#959595',
        'txtblackSecondry': '#1f2021',
        'txtlight': '#6C7073',
        'active': '#f6f5fa',
        'purple1': '#D5D0EF',
        'purple2': '#B9B1E3',
        'purple3': '#9283DB',
        'purple4': '#7664D2',
        'purple5': '#4F38C9',
        'bottle-green': '#5C8771',
        'bottle-blue': '#0D8299',

        'custom-blue': '#010851',
        'custom-blue-light': '#0f1b7a'
      },
      backgroundColor: {
        'white-pri': '#fff',
        'white-sec': '#f1f5f9',
        'blue-pri': '11111d',
        'blue-sec': '#1d1b31',
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif'],
        'noto-sans': ['Noto Sans']
      },
    },
  },
  plugins: [],
}