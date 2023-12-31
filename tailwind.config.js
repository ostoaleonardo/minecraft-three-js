/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/images/background.webp')",
        'dirt': "url('/src/assets/images/dirt.jpg')",
      },
    },
  },
  plugins: [],
}

