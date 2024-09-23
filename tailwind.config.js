/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '1px 0px 4px rgba(0, 0, 0, 0.4)', // Custom shadow for sidebar
      },
      fontFamily:{
        'times' : ['Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}

