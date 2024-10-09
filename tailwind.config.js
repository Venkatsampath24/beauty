/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-150px)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 2s forwards', // Set this to 2s for a slower fade
      },
    },
  },
  plugins: [],
}
