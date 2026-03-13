/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '776px',
      md: '992px',
      lg: '1024px',
      xl: '1279px',
      xxl: '1560px',
    },

    container: {
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '30px',
        lg: '50px',
        xl: '70px',
        xxl: '140px',
      },
      center: true,
    },

    extend: {
      colors: {
        'dashboard-item': '#f7f6f6',
        teal: '#1a9aaa',
        teal2: '#4ecdc4',
        navy: '#0a1628',
        navy2: '#0d1e35',
        gold: '#c9a96e',
      },
    },
  },
  plugins: [],
};
