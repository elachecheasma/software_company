/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideButton: {
          '0%': { transform: 'translateX(-50vw) translateY(-100%) rotate(-5deg)', opacity: '0' },
          '30%': { transform: 'translateX(-30vw) translateY(-20%) rotate(3deg)', opacity: '0.5' },
          '60%': { transform: 'translateX(-10vw) translateY(10%) rotate(-2deg)', opacity: '100' },
          '80%': { transform: 'translateX(-5vw) translateY(-5%) rotate(1deg)' },
          '95%': { transform: 'translateX(-2vw) translateY(2%) rotate(-0.5deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(0)' },
        }
      },
      animation: {
        slideButton: 'slideButton 2s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}