/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ['Poppins'],
      custom2: ['Abril Fatface'],
    },
    extend: {
      colors: {
        'text': '#000000',
        'background': '#EDE4FF',
        'primary': '#6528F7',
        'secondary': '#A076F9',
        'accent': '#D7BBF5',
      },

    },
  },
  plugins: [],
};


