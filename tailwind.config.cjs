/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf5fc",
          100: "#dbeaf8",
          200: "#b9d7f1",
          300: "#87bbe5",
          400: "#5098d2",
          500: "#2778b9",
          600: "#185f9e",
          700: "#164e82",
          800: "#183f68",
          900: "#173653",
        },
        primary: {
          50: "#edf5fc",
          100: "#dbeaf8",
          200: "#b9d7f1",
          300: "#87bbe5",
          400: "#5098d2",
          500: "#2778b9",
          600: "#185f9e",
          700: "#164e82",
          800: "#183f68",
          900: "#173653",
        },
      },
    },
  },
  plugins: [],
};
