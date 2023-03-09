/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            "background": "rgb(238 242 255)",
            "primary": "rgb(79 70 229)",
        },
    },
    fontFamily: {
        "title": ["nunito", "sans-serif"],
    }
  },
  plugins: [],
}
