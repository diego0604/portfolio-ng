/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: [
    "./src/**/*.{html,ts,scss}",
    "./node_modules/primeng/**/*.{js,ts}"
  ],
  theme: {
    extend:{
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}
