/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
        Inter: ["Inter, sans-serif"],
        DmSans: ['Dm Sans, sans-serif']
      },
      keyframes: {
        'menu-animate': {
          '0%': {
            transform: 'scaleY(0)'
          },
          '80%': {
            transform: 'scaleY(1.2)'
          },
          '100%': {
            transform: 'scaleY(1)'
          }
        }
      },
      animation: {
        'menu-animate': 'menu-animate .3s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
