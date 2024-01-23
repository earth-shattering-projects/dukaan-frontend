/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#126fb3",
        darkBlue: "#0e4f82",
        backGroundGray: "#fafafa",
        sideBarBlue: "#202444",
        sideBarHighlightGray: "#383c54",
      },
    },
  },
  plugins: [],
};
