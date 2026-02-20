/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0083D4',
        'primary-dark': '#0068AB',
        'primary-light': '#e6f3fb',
        foreground: '#1e293b',
        'muted-foreground': '#334155',
        border: '#e2e8f0',
        muted: '#F1F5F9',
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['60px', { lineHeight: '60px', fontWeight: '800' }],
        'h2': ['48px', { lineHeight: '48px', fontWeight: '700' }],
        'h3': ['36px', { lineHeight: '40px', fontWeight: '700' }],
        'h4': ['30px', { lineHeight: '36px', fontWeight: '600' }],
        'h5': ['24px', { lineHeight: '32px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}

