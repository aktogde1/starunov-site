/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#2b9aa8',
          2: '#1e7a86',
          soft: 'rgba(43,154,168,.08)',
          glow: 'rgba(43,154,168,.12)',
        },
        coral: {
          DEFAULT: '#e07856',
          2: '#c96340',
        },
      },
      borderRadius: {
        xl: '14px',
        '2xl': '22px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.04), 0 4px 16px rgba(0,0,0,.06)',
        'card-lg': '0 2px 8px rgba(0,0,0,.05), 0 12px 40px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}
