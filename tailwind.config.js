/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    colors: {
      'primary': '#13CB87',
      'secondary': '#3C0858',
      'primaryLight': '#13CB87',
      'secondaryLight': '#3C0858',
    },
  },
  plugins: [],
}

