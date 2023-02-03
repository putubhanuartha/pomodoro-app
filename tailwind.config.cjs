/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161932",
        secondary: "#1E213F",
        lightGreen: "#70F3F8",
      },
      transitionProperty: {
        bg: "background-color",
        text: "color",
      },
    },
  },
  plugins: [require("daisyui")],
};
