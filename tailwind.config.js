/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7c00be",
        purpleMedium: "#e7bdfc",
        purpleDark: "#640d93",
        purpleLight: "#ecd9f5",
        primary: "#8a8a8a"
      },
    },
  },
  plugins: [],
}

