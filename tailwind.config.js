/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','sukses.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

