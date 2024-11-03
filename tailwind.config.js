/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
  			break1: '1380px',
        break2 : '851px',
  		},
      boxShadow: {
        'custom': '1px 0px 4px rgba(0, 0, 0, 0.4)', // Custom shadow for sidebar
      },
      fontFamily:{
        'times' : ['Times New Roman', 'serif'],
        'snell': ['var(--font-snell-bt)', 'sans-serif'],
        'apple' : ['var(--font-apple)', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        eggshell : "#f2f3f4"
      },
    },
  },
  plugins: [],
};
