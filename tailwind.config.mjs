/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-warm': '#FAFAF8',
        'primary': '#4F46E5',
        'primary-dark': '#3730A3',
        'accent': '#F59E0B',
        'accent-dark': '#D97706',
        'text-dark': '#1C1917',
        'text-muted': '#78716C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
