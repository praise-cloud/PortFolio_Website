/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            darkPurple: '#2C003E',
            deepBlue: '#0D1842',
            magenta: '#C40076',
            darkBackground: '#000000',
        }
      },
    },
    plugins: [],
  }
