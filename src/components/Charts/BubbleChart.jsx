import React from 'react'
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bubble } from 'react-chartjs-2'
// import faker from 'faker'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

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
			label: 'Red dataset',
			data: Array.from({ length: 50 }, () => ({
				// x: faker.datatype.number({ min: -100, max: 100 }),
				// y: faker.datatype.number({ min: -100, max: 100 }),
				// r: faker.datatype.number({ min: 5, max: 20 }),
			})),
			backgroundColor: 'rgba(255, 99, 132, 0.3)',
		},
		{
			label: 'Blue dataset',
			data: Array.from({ length: 50 }, () => ({
				// x: faker.datatype.number({ min: -100, max: 100 }),
				// y: faker.datatype.number({ min: -100, max: 100 }),
				// r: faker.datatype.number({ min: 5, max: 20 }),
			})),
			backgroundColor: 'rgba(53, 162, 235, 0.3)',
		},
	],
}

export const BubbleChart = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center  md:col-span-4">
			<Bubble
				data={data}
				options={options}
				className="max-w-full max-h-full"
			/>
		</div>
	)
}
