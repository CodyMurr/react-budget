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
				light: {
					primary: '#2db58a',

					secondary: '#086b69',

					accent: '#f24800',

					neutral: '#253041',

					'base-100': '#2B2848',

					info: '#3D80C7',

					success: '#78EDD2',

					warning: '#B89214',

					error: '#EB7A9C',
				},
			},
		],
	},
};
