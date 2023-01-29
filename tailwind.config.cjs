/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'silver': '#c0b7b1',
      'darkgray': '#433e3f',
      'gray': '#393435',
      'grayLavender': '#c8c6d7',
      'bone': '#d9cab3',
      'blue': '#4C60AB',
      'white': '#ffffff',
      'snow':'#f9f4f5',
      'primary': '#EDEDE9',
      'male': '#D6CCC2',
      'blackCoffee': '#3a3238',
      'premium': '#C39C50',
      'basic': '#3B738B',
      'medium': '#B92833',
      'standard': '#135D37',
    },
    extend: {},
  },
  plugins: [],
}
