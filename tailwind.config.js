/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work': ['var(--work-font)', 'sans-serif'],
        'humane': ['var(--humane-font)', 'sans-serif']
      },
      colors: {
        gray: {
          light: '#A3AFBD',
          normal: '#54575C',
          dark: '#111111'
        },
        bg: '#F5F7FF'
      }
    },
  },
  plugins: [],
}
