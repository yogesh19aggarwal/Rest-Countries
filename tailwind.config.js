/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      darkBg: "hsl(207, 26%, 17%)",
      articleColor: "hsl(209, 23%, 22%)",
      textColor: "hsl(0, 0%, 100%)",
      lightText: "hsl(200, 15%, 8%)",
      lightInput: "hsl(0, 0%, 52%)",
      lightBg: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      sans: ['"Nunito Sans"', "sans-serif"],
    },
  },
};
export const plugins = [];
