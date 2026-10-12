/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        egnisher: {
          primary: '#642CD7',
          secondary: '#7C4DFF',
          accent: '#14B8A6',
          light: '#B996FF',
          neutral: '#667085',
          dark: '#0F0B1E',
          surface: '#F8F9FC',
          card: '#FFFFFF',
          border: '#E4E7EC',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-purple': '0 10px 25px -5px rgba(100, 44, 215, 0.15)',
        'glow-accent': '0 0 20px rgba(20, 184, 166, 0.3)',
      },
    },
  },
  plugins: [],
}
