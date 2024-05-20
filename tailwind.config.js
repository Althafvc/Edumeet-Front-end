/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        customShadow:'10px 10px 14px 3px #7e7e7e'
      }
    },
  },
  plugins: [],
}

