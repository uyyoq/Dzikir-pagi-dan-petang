module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
