/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": {
            scale: 1
          },
          "100%": {
            scale: 1.25
          }
        }
      },
      animation: {
        scale: "scale 1s ease-in-out"
      },
      colors: {
        customBg1: "rgb(246, 249, 251)"
      }
    },
  },
  plugins: [],
}

