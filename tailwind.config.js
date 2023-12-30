/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dirt': "url('/src/assets/images/dirt.jpg')",
      },
    },
  },
  plugins: [],
}

