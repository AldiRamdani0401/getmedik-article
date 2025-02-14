/** @type {import('tailwindcss').Config} */
const lineClamp = require('@tailwindcss/line-clamp');
const forms = require('@tailwindcss/forms');

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        info: '#0000ff',
      }
    },
  },
  plugins: [forms],
}


