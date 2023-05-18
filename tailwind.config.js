/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night",
      {
        mytheme: {

          "primary": "#0c2670",

          "secondary": "#91e26f",

          "accent": "#fc8dc6",

          "neutral": "#1D1820",

          "base-100": "#492C54",

          "info": "#77CEE9",

          "success": "#60DC9C",

          "warning": "#F6CD13",

          "error": "#F57466",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

