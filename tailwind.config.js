/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work': ['var(--work-font)', 'sans-serif'],
        'humane': ['var(--humane-font)', 'sans-serif'],
        'poppins': ['var(--poppins-font)', 'sans-serif'],
        'neue': ['var(--neue-font)', 'sans-serif'],
        'toggleIcons': ['var(--toggle-icons-font)', 'sans-serif'],
      },
      colors: {
        gray: {
          light: '#A3AFBD',
          dark: '#111111',
        },
        bg_vector: '#F1F5F9',
        hover_img: '#242424',
        //
        lm_fill: '#F5F7FF',
        lm_fill_white: '#FFFFFF',
        lm_g_shadow: '#D3D9E6',
        lm_accent: '#1AB3F3',
        lm_icons: '#54575C',
        lm_text_gray: '#D9D9D9'
      },
      boxShadow:{
        'boxes': '-19.197px -13.8645px 25.5959px #FFFFFF, 11.7315px 11.7315px 35.1944px #D3D9E6;',
        'button': '-42.7349px -30.8641px 56.9798px #FFFFFF, 26.1158px 26.1158px 78.3473px #D3D9E6',
        'icon-boxes': '9.23149px 12.0009px 24.0019px #D6DBF1',
        //
        'relief-4': '6px 4px 4px 0px #D3D9E6, -6px -4px 4px 0px #FFF',
        'relief-8': '6px 4px 8px 0px #D3D9E6, -6px -4px 8px 0px #FFF',
        'relief-12': '6px 4px 12px 0px #D3D9E6, -6px -4px 12px 0px #FFF',
        'relief-16': '8px 6px 16px 0px #D3D9E6, -6px -4px 16px 0px #FFF',
        'relief-32': '16px 12px 32px 0px #D3D9E6, -12px -8px 32px 0px #FFF'
      }
    },
  },
  plugins: [],
}
