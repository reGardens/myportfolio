/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#EF9826',
        defaultBlack: '#323233',
      },
      fontFamily: {
        futura: "Futura",
      },
      fontSize: {
        title: ['2.25rem', {
          lineHeight: '2.5rem',
          fontWeight: '800',
          letterSpacing: '0.1em',
        }]
      }
    },
  },
  plugins: [],
}

