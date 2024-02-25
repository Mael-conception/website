/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          '50': '#ecfdf5',
          '100': '#d1fae4',
          '200': '#a7f3ce',
          '300': '#6ee7b4',
          '400': '#34d394',
          '500': '#11cb88',
          '600': '#059665',
          '700': '#047854',
          '800': '#065f43',
          '900': '#064e39',
          '950': '#022c21',
        },
        secondary: {
          '50': '#fbf5ff',
          '100': '#f5e8ff',
          '200': '#edd5ff',
          '300': '#deb5fd',
          '400': '#ca85fb',
          '500': '#b656f6',
          '600': '#a335e8',
          '700': '#8d23cd',
          '800': '#7722a7',
          '900': '#611d86',
          '950': '#3c0759',
        },
      }
    },
  },
  plugins: [],
}

