/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  safelist: [
   
    {
      pattern: /border-(primary|secondary|accent|black|white)/, // You can display all the colors that you need
    },
    {
      pattern: /btn-(primary|secondary|accent)/, // You can display all the colors that you need
    },
    {
      pattern: /col-span-(6|3|2|1)/, // You can display all the colors that you need
    },
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": '#EC5A35',
          "secondary": "#E135C5",
          "accent": "#A255F3",
					// "neutral": "#272a2e",
					"base-100": "#01031D",
          // "info": "#7dd3fc",
          // "success": "#a3e635",
          // "warning": "#ffa21e",
          // "error": "#e11d48",
        },
      },
    ],
  },
  // ,, 
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
  plugins: [require('@tailwindcss/typography'),
    require("daisyui")],
}

