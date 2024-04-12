/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
       fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'mavi': '#4731D3',
        'yesil': '#CBF281',
        "laci":"#171043",
         "gri":"#1b220c" ,
      },
      screens: {
        'md': {'max': '960px'},
        'lm': {'max': '700px'},
        'sm': {'max': '490px'},

      },
    },
  },
  plugins: [],
}

