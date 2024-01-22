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
      laptopXxs: ['9px', '10px'],
      laptopXs: ['10px', '14px'],
      laptopS: ['12px', '14px'],
      laptopM: ['14px', '18px'],
      laptopL: ['14px', '22px'],
      laptopXl: ['16px', '18px'],
      laptopXl2: ['18px', '22px'],
      laptopXl3: ['26px', '30px'],
      laptopXl4: ['30px', '38px'],
      tabletXs: ['8px', '12px'],
      tabletM: ['12px', '16px'],
      tabletXl3: ['24px', '28px'],
      tabletXl4: ['28px', '36px'],
      mobileXl3: ['22px', '26px'],
      mobileXl4: ['18px', '26px'],
      mobileM: ['12px', '16px'],
      description: ['14px', '20px']
    },
    colors: {
      transparent: 'transparent',
      background: 'rgba(40, 38, 57, 0.30)',
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
      checkbox: '3px',
      select: '8px',
      xs: '5px',
      s: '10px',
      m: '30px',
      l: '50px',
    },
    screens: {
      laptop: { max: '1919px' },
      tablet: { max: '1199px' },
      mobile: { max: '767px' },
    },
    extend: {
      boxShadow: {
        default: '0px 15px 10px 0px rgba(72, 102, 172, 0.03), 0px -5px 10px 0px rgba(72, 102, 172, 0.03)',
        slider: '0px 10px 20px 0px rgba(0, 0, 0, 0.03), 0px -10px 20px 0px rgba(0, 0, 0, 0.03)',
        select: '0px 15px 20px 0px rgba(72, 102, 172, 0.05), 0px -5px 20px 0px rgba(72, 102, 172, 0.05)'
      }
    },
  },
  plugins: [],
}
