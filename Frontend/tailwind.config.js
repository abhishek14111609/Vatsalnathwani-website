/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark luxury palette
        black: {
          DEFAULT: '#090909',
          light: '#171717',
        },
        ivory: {
          DEFAULT: '#FFFFFF',
          dark: '#F6F6F2',
        },
        gold: {
          DEFAULT: '#FFD62F',
          light: '#FFE979',
          dark: '#E9B900',
        },
        accent: {
          DEFAULT: '#FFD62F',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        heading: ['Clash Display', 'Cabinet Grotesk', 'sans-serif'],
        body: ['Inter', 'General Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 14vw, 14rem)',
        'display': 'clamp(2rem, 8vw, 8rem)',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.03em',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FFE979 0%, #FFD62F 100%)',
      },
      boxShadow: {
        gold: '0 0 40px rgba(245, 194, 107, 0.3)',
        card: '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
