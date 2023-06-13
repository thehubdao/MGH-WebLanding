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
        'humane': ['var(--humane-font)', 'sans-serif'],
        'poppins': ['var(--poppins-font)', 'sans-serif']
      },
      colors: {
        gray: {
          light: '#A3AFBD',
          normal: '#54575C',
          dark: '#111111',
          boxes: '#FAFAFA',
          vector: "#F1F5F9"
        },
        bg: '#F5F7FF'
      },
      boxShadow:{
        'boxes': '-19.197px -13.8645px 25.5959px #FFFFFF, 11.7315px 11.7315px 35.1944px #D3D9E6;',
      }
    },
  },
  plugins: [],
}
