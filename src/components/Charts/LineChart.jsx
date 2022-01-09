import React, { useEffect, useState } from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

import { Widget } from '../Ui/Widget'
import { useDispatch, useSelector } from 'react-redux'
import { openWidget } from '../../actions/uiActions'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export const LineChart = ({ name, data, wKey, config }) => {
	const dispatch = useDispatch()

	const { messages } = useSelector(state => state.messages)
	const [labels, setLabels] = useState([])
	const [ dataSet, setDataSet ] = useState([])

	useEffect(() => {
		if (messages.length > 0) {
			const times = messages.map(({ createdAt }) =>
				moment(createdAt).format('DD/MM/YYYY - HH:mm:ss')
			)
			setLabels(times)
		}
	}, [messages])

	useEffect(() => {
		if(messages.length > 0) {
			const data = messages.map(({data}) => data[wKey] || 0)
			setDataSet(data)
		}
	}, [messages])

	const dataConfig = {
		labels,
		friction: 0.9,

		datasets: data.map(({ bgColor, label, color, name }) => ({
			label,
			backgroundColor: bgColor,
			data: dataSet.map((obj) => {
				return obj?.[name]
			}),
			borderColor: color,
		})),
	}

	const options = {
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
				display: config.showGrid ? false : true,
			},
			y: {
				display: config.showGrid ? false : true,
			},
		},
	}

	return (
		<Widget onDoubleClick={() => dispatch(openWidget(wKey))}>
			<Line
				data={dataConfig}
				options={options}
				style={{ maxHeight: '100%' }}
			/>
		</Widget>
	)
}
