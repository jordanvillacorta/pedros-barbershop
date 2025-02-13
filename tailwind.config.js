/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pr-red': '#ED0000',
        'pr-blue': '#0050F0',
        'pr-white': '#FFFFFF',
        'dark': '#000000',
        'card': '#111827',
      },
      fontFamily: {
        'black-freedom': ['Black Freedom', 'cursive'],
      },
    },
  },
  plugins: [],
};