module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-100': '#e5f2ff',
        'blue-200': '#b7dbff',
        'blue-300': '#89c4ff',
        'blue-400': '#5caeff',
        'blue-500': '#2e97ff',
        'blue': '#0080ff',
        'blue-600': '#006ad3',
        'blue-700': '#0053a6',
        'blue-800': '#003d7a',
        'blue-900': '#00264d',
      },
      fontFamily: {
        TenorSans: ['Tenor Sans', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        booking: "url('./Assets/Images/booking.jpg')",
        doctor: "url('./Assets/Images/doctor.jpg')",
        diary: "url('./Assets/Images/diary.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
