/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'tunis-blue': '#0055A4', // Sidi Bou Said Blue
        'tunis-gold': '#D4AF37', // Saharan Sand
        'tunis-dark': '#1A1A1B', // Deep Onyx for modern feel
        'jasmine': '#FAF9F6',    // Off-white background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern typography
      },
    },
  },
  plugins: [],
}