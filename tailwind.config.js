/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
};
