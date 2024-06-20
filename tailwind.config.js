/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        customShadow:'10px 10px 14px 3px rgba(126, 126, 126, 0.5)',
      },
      fontFamily:{customFont:['Poetsen One'],
        newFont:['Jersey'],
        headFont:['Oleo Script'],
        font1:['Raleway'],
        parafont:['Roboto Flex'],
        studentButton:['Roboto Condensed'],
        cardPara:['Montserrat'],
        

      },
      rotate:{
        hr:'transform: rotate(90deg);'
      }

    },
  },
  plugins: [],
}

