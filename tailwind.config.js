/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ['IRANSans'],
        Ahang: ['Ahang'],
      },
      colors: {
        red: {
          primary: '#A62725',
          secondary: '#BE3737',
        },
      },
    },
  },
  plugins: [],
}
