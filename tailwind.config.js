/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1eb5e3cc',
        'secondary': '#17b56340',
        'light':'#0c529c'
      }
    },
  },
  plugins: [],
}

