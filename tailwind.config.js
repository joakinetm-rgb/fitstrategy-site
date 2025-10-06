
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { black:'#0B0B0B', gold:'#CFAE70', white:'#FFFFFF' } }
    },
  },
  plugins: [],
};
