/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#edc006',
        'brand-black': '#000000',
        'brand-white': '#ffffff',
        brand: {
          light: '#f9d84b',
          DEFAULT: '#edc006',
          dark: '#261f00',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f9d84b 0%, #edc006 100%)',
        'solar-gradient': 'linear-gradient(135deg, #fff9e6 0%, #fef3c7 25%, #fcd34d 50%, #f59e0b 100%)',
        'solar-subtle': 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fed7aa 100%)',
        'solar-rays': `
          linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%),
          radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(252, 211, 77, 0.05) 0%, transparent 50%)
        `,
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'golos': ['Golos Text', 'sans-serif'],
      },
      borderRadius: {
        'brand': '12px',
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(237, 192, 6, 0.15)',
        'brand-hover': '0 8px 30px rgba(237, 192, 6, 0.25)',
      }
    },
  },
  plugins: [],
  // Optimize for production
  experimental: {
    optimizeUniversalDefaults: true,
  },
  // Tree-shaking optimization
  safelist: [
    'animate-in',
    'animate-in-delay-1', 
    'animate-in-delay-2',
    'gpu-accelerated',
    'will-change-transform',
    'will-change-opacity'
  ]
}

