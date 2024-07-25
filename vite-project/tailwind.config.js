/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font " ', "Poppins"]
      },
      height: {
        '1300': '1300px',
        '670':'670px',
      },
      width: {
        '450': '450px',
        '350':'350px',
        
      },
      backgroundSize: {
        'cover': 'cover',
        'contain': 'contain',
      },
     
    },
  },
  plugins: [],
}

