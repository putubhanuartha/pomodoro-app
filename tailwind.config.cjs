/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
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
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
				robotoslab: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
				ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("daisyui")],
};
