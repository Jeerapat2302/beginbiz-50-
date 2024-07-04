/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        krona: ['"Krona One"', 'sans-serif'],
        kanit: ['"Kanit"', 'sans-serif'],
      },
    },
},
    variants: { //เพิ่ม
    extend: {}, //เพิ่ม
  }, //เพิ่ม
  plugins: [require('daisyui')],
}

