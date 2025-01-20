/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#01C550",
        },
        secondary: {
          DEFAULT: "#FF9921",
          light: "#FFCB8E",
          lighter: "#FFECD6",
        },
        dark: {
          DEFAULT: "#000000",
          light: "#2F2F2F",
          gray: "#61656F",
        },
        light: {
          DEFAULT: "#FFFFFF",
          gray: "#B4BCCF",
        },
      },
    },
  },
  plugins: [],
};
