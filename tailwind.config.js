/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          50: '#fefefe',
          100: '#f8f6f3',
          200: '#f4e4d1',
          300: '#e6b887',
          400: '#d4a574',
          500: '#c19660',
          600: '#a67c4a',
          700: '#8b6239',
          800: '#704d2d',
          900: '#5a3d24',
          950: '#2d1e12',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1a2332',
          950: '#0f1419',
        },
        accent: {
          50: '#fdf8f0',
          100: '#faf0e1',
          200: '#f4e4d1',
          300: '#edd5b8',
          400: '#e4c29f',
          500: '#d9ad86',
          600: '#cc956d',
          700: '#bd7c54',
          800: '#a6633b',
          900: '#8d4a22',
          950: '#743109',
        }
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1' }],
        'display': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.2' }],
        'heading': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.8)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #1a2332 0%, #334e68 50%, #d4a574 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #f4e4d1 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1a2332 0%, #243b53 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(26, 35, 50, 0.25)',
        'luxury-lg': '0 35px 60px -12px rgba(26, 35, 50, 0.35)',
        'glow': '0 0 30px rgba(212, 165, 116, 0.5)',
        'glow-lg': '0 0 50px rgba(212, 165, 116, 0.6)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(26, 35, 50, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
