import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
// import faker from 'faker'

import { Widget } from '../Ui/Widget'
import { options } from './options'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
)

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
]

export const BarChart = ({ name, data }) => {
	const dataConfig = {
		labels,
		datasets: data.map(({ bgColor, label }) => ({
			label,
			backgroundColor: bgColor,
			// data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
		})),
		/* datasets: [
			{
				label: 'Value 1',
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor: 'rgb(255, 99, 132)',
			},
			{
				label: 'Value 2',
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor: 'rgb(53, 162, 235)',
			},
		], */
	}

	return (
		<Widget>
			<Bar
				data={dataConfig}
				options={() => {
					console.log(options(name))
					return options(name)
				}}
				style={{ maxHeight: '100%' }}
			/>
		</Widget>
	)
}
