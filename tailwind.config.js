/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sono: 'Sono',
        'sono-bold': 'Sono-Bold',
        'sono-light': 'Sono-Light',
        'sono-semibold': 'Sono-SemiBold',
        'sono-medium': 'Sono-Medium'
      },
      colors: {
        main: '#202023',
        secondary: '#6D9886',
        ternary: '#DF7861'
      }
    }
  },
  plugins: []
}
