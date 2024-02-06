/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // or 'media'
	content: ['./src/**/*.vue'], // adjust this path as needed
	theme: {
	  extend: {
		colors: {
		  'brand-accent': '#0fa1b4',
		  'dark-brand-accent': '#a16207',
		  'dark-selection': '#1d1d1d',
		  'background': {
			'light': '#fff', // light mode background color
			'dark': '#000' // dark mode background color
		  },
		  // Add your dark mode colors here
		  'sky': {
			'500': '#4299E1',
			'600': '#3182CE',
			'dark-500': '#1a202c', // dark mode color for sky-500
			'dark-600': '#2d3748', // dark mode color for sky-600
		  },
		},
		spacing: {
		  '0.5': '0.125rem',
		  '1': '0.25rem',
		},
		borderWidth: {
		  '2': '2px',
		},
		maxWidth: {
		  '100': '100%',
		},
		typography: (theme) => ({
		  // ...your typography config
		}),
	  },
	},
	variants: {
	  extend: {
		backgroundColor: ['dark'], // add 'dark' variant for backgroundColor
		textColor: ['dark'], // add 'dark' variant for textColor
	  },
	},
	plugins: [require('@tailwindcss/typography')],
  };