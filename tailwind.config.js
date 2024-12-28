/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'brown': '#E1AA74',
      'maroon': '#561C24',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'white': '#F9F6EE',
      'black': '#2C2C2C',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      ibm: ['IBM Plex Sans'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}