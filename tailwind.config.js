/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: 'class',
  theme: {
    container:{
      center : true,
      padding: '16px',
    },
    extend: {
      colors :{
        primary: '#4F8A8B',
        secondary :'#333333',
        abu:'#dcdbd9',
        dark : '#0f172a',
      },
      screens:{
        '2xl': '1320 px',
      }
    },
  },
  plugins: [],
}

