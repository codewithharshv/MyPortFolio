/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.1)",
        neon: "#00f3ff",
        primary: "#0a0a0a",
        secondary: "#1a1a1a",
      },
    },
  },
  plugins: [],
}
