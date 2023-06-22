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
        'poppins': ['var(--poppins-font)', 'sans-serif'],
        'neue': ['var(--neue-font)', 'sans-serif'],
      },
      colors: {
        gray: {
          light: '#A3AFBD',
          normal: '#54575C',
          dark: '#111111',
          boxes: '#FAFAFA',
          vector: "#F1F5F9",
          hubdao: '#D9D9D9',
        },
        bg_vector: '#F1F5F9',
        fill: '#F5F7FF',
        hover_img: '#242424',
        hover_text: '#F5F7FF'
      },
      boxShadow:{
        'boxes': '-19.197px -13.8645px 25.5959px #FFFFFF, 11.7315px 11.7315px 35.1944px #D3D9E6;',
        'button': '-42.7349px -30.8641px 56.9798px #FFFFFF, 26.1158px 26.1158px 78.3473px #D3D9E6',
        'icon-boxes': '9.23149px 12.0009px 24.0019px #D6DBF1',
      }
    },
  },
  plugins: [],
}
