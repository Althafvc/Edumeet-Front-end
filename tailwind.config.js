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
        efont:['Danfo']
      }

    },
  },
  plugins: [],
}

