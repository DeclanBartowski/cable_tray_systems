/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: 'Raleway, sans-serif',
      add: 'Montserrat, sans-serif'
    },
    fontSize: {
      xxs: ['11px', '12px'],
      xs: ['12px', '16px'],
      s: ['14px', '16px'],
      m: ['16px', '20px'],
      l: ['16px', '24px'],
      xl: ['18px', '20px'],
      xl2: ['20px', '24px'],
      xl3: ['28px', '32px'],
      xl4: ['32px', '40px'],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: '#F1F4F8',
      gray100: '#E6E9F8',
      gray200: '#AFB9D2',
      gray300: '#697586',
      yellow: '#FFD54A',
      red: '#FD2734',
      blue: '#0C54A0'
    },
    borderRadius: {
      full: '9999px',
      s: '10px',
      m: '30px',
      l: '50px',
    },
    extend: {},
  },
  plugins: [],
}
