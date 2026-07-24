/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          bright: '#E5B93F',
          dark: '#8C6A16',
          muted: '#A07C1E',
        },
        studio: {
          black: '#050505',
          dark: '#0D0D0D',
          card: '#111111',
          border: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'Arial Narrow', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227, #E5B93F, #8C6A16)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0D0D0D 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
