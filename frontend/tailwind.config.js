/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // You can adjust the breakpoint value as needed
      },
      customSpacing: {
        margin: "20px",
      },
    },
  },
  plugins: [],
}

