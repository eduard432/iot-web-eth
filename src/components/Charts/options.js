export const options = (name) => ({
	responsive: true,
	plugins: {
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: name,
		},
	},
	scales: {
		x: {
			display: false,
		},
		y: {
			display: false,
		},
	},
})
