// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fire: {
          '0%, 100%': { color: '#ff4500' },
          '50%': { color: '#ff0000' }
        },
      },
      animation:{
        fire: 'fire 1s infinite alternate',
      },
    },
  },
  variants: {},
  plugins: [],
}

