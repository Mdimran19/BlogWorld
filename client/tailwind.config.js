/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'custom-range': { 'min': '350px', 'max': '600px' },
      },
    },
    },
  plugins: [],
}

