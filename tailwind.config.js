/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        generalWhite: "#FFFFFF",
        coalBlue: '#1F2937'
      },
    },
  },
  plugins: [],
};
