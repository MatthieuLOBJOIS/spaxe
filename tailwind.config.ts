import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',

  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
    './src/hooks/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      /* fonts only (ergonomics layer) */
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },

      /* radius mapping only */
      borderRadius: {
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) * 1.4)',
      },

      /* spacing extensions only */
      spacing: {
        25: '6.25rem',
        30: '7.5rem',
      },

      /* z-index system (important for viewer/UI separation) */
      zIndex: {
        viewer: '1',
        ui: '10',
        modal: '50',
        tooltip: '100',
        debug: '999',
      },

      /* animations only */
      keyframes: {
        'scroll-bounce': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },

      animation: {
        'scroll-bounce': 'scroll-bounce 1s infinite ease-in-out',
        fadeIn: 'fadeIn 150ms ease-out',
      },
    },
  },

  plugins: [],
} satisfies Config
