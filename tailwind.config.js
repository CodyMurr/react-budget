/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#5ef2de',

					secondary: '#c9f7ff',

					accent: '#627c01',

					neutral: '#1B191F',

					'base-100': '#373739',

					info: '#85B8E5',

					success: '#16AC7A',

					warning: '#B36505',

					error: '#DC3232',
				},
			},
			'corporate',
		],
	},
};
