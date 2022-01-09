import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
	plugins: {
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Titulo Gráfica',
		},
	},
}

export const data = {
	labels: ['Red', 'Blue'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19],
			backgroundColor: ['rgb(255, 99, 132)', 'rgb(53, 162, 235)'],
			borderColor: ['rgb(255, 99, 132)', 'rgb(53, 162, 235)'],
			borderWidth: 1,
		},
	],
}

export const DoughnutChart = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center md:col-span-3">
			<Doughnut
				data={data}
				options={options}
				className="max-w-full max-h-full"
			/>
		</div>
	)
}
