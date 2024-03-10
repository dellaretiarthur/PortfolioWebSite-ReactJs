/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dongpora': ['Dongpora', 'sans-serif'],
        'morganite': ['Morganite', 'sans-serif']
      },
      backgroundImage: {
        'soap': "URL('./assets')"
      },
      animation: {
        'bounce-slow': 'bounce 5s linear infinite',
      },
      
    },
  },
  plugins: [],
}

