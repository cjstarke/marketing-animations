/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('@converge/ui/tailwind.config'),
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.json',
    './node_modules/@converge/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#b1e4ff',
        hotPink: '#e64c76',
        darkPink: '#FF0062',
        shark: '#1e2229',
        three: '#333333',
        onea: '#1A1A1A',
        aaa: '#aaaaaa',
        almostWhite: '#fafafa',
        borderGray: '#d9d9d9',
        darkGray: '#6e6e6e',
        pale: '#f8f8f8',
        steel: '#667085',
      },
      fontFamily: {
        roboto: ['var(--font-roboto-flex)'],
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        lgplus: ['1.2rem', '1.2'],
        '2xlplus': ['1.7rem', '1.2'],
        '3xlplus': ['2.1rem', '1.2'],
        '4xl2': ['2.6rem', '1.1'],
        '6xlplus': ['4.2rem', '1'],
      },
      spacing: {
        128: '32rem',
        200: '50rem',
        224: '56rem',
        240: '60rem',
        316: '79rem',
        328: '82rem',
        360: '90rem',
        488: '122rem',
        500: '125rem',
      },
      screens: {
        '3sm': '350px',
        '2sm': '400px',
        xs: '430px',
        '1sm': '460px',
        'lgplus': '1100px',
        '4xl': '2500px',
      },
      aspectRatio: {
        '12/1': '12 / 1',
      },
      lineHeight: {
        tighter: '1.1',
        default: '1.4',
        five: '1.5',
        seven: '.7',
        eight: '.8',
      },
      maxWidth: {
        'screen-lgx': '1180px',
        '8xl': '90rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
