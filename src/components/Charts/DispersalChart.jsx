import React from 'react'
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'
// import faker from 'faker'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

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
	scales: {
		y: {
			beginAtZero: true,
		},
	},
}

export const data = {
	datasets: [
		{
			label: 'A dataset',
			data: Array.from({ length: 100 }, () => ({
				// x: faker.datatype.number({ min: -100, max: 100 }),
				// y: faker.datatype.number({ min: -100, max: 100 }),
			})),
			backgroundColor: 'rgb(255, 99, 132)',
		},
	],
}

export const DispersalChart = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center md:col-span-4">
			<Scatter
				data={data}
				options={options}
				className="max-w-full max-h-full"
			/>
		</div>
	)
}
