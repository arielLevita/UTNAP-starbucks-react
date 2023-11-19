/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sbgreen: "#00754a",
        sblightblue: "#d4e9e2",
        sbpink: "#e31c79",
      }
    },
  },
  plugins: [],
}

