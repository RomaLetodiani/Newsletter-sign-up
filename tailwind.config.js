/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: '#ff6257',
        darkSlateGray: '#242742',
        charcoalGrey: '#36384e',
        grey: '#9294a0',
        white: '#ffffff',
      },
      gradientColorStops: {
        orange: '#ff6a3a',
        pink: '#ff527b',
      },
    },
  },
  plugins: [],
};
