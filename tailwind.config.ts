/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'white-100': '#ffffff',
              'white-200': '#f7f7f7',
              'red': '#ff5a5f',
              'gray': '#484848',
              'blue': '#1d293e'
          },
          fontFamily: {
            'IR': ['yekanBakh'],
            'Bold': ['yeaknBold'],
            'Aviny': ['aviny']
        },
      }
  },
  plugins: [],
}