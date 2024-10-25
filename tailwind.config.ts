/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'sans-serif'],
			},
			colors: {
				gray: {
					100: '#f5f5f5',
					200: '#eeeeee',
					300: '#e0e0e0',
					600: '#757575',
					900: '#212121',
				},
			},
		},
	},
	plugins: [],
};
