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
					primary: '#d65f15',

					secondary: '#1c75b5',

					accent: '#5fe863',

					neutral: '#2A2442',

					'base-100': '#ECEDEE',

					info: '#7794F3',

					success: '#21978D',

					warning: '#EEBD53',

					error: '#EC6A51',
				},
			},
		],
	},
};
