/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "inria-serif": "'Inria Serif'",
        "times-new-roman": "'Times New Roman'",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  plugins: [],
};
