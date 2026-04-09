/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#EB865C',
          blue: '#6CADC3',
          purple: '#AB84BB',
          green: '#AAC785',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
