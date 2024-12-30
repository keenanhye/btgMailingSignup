const gameboy = {
  50: '#FCFAF2',
  100: '#F2EFE1',
  200: '#E7E3D7',
  300: '#D6D1C7',
  400: '#A8A196',
  500: '#787066',
  600: '#57514A',
  700: '#443E38',
  800: '#292522',
  900: '#1C1816',
  950: '#0C0A08',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Adjust if you use a different folder structure
  theme: {
    extend: {
      colors: {
        gameboy,
      },
    },
  },
  plugins: [],
};