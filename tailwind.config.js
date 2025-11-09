/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center:true
      },
      colors: {
        seaterBlue1: '#1488CC',
        seaterBlue2: '#2B32B2'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}