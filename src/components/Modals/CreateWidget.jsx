import React, { useState } from 'react'

import { Modal, ModalOverlay } from '@chakra-ui/react'

import { Formik } from 'formik'
// import * as Yup from 'yup'
import { WidgetForm } from '../Forms/WidgetForm'
import { useDispatch } from 'react-redux'
import { startCreateWidget } from '../../actions/widgetActions'
import hexToRgb from '../../helpers/hexToRgb'

//TODO: fixe value onClose

export const CreateWidget = ({ isOpen, onClose }) => {
	const [valuesData, setValuesData] = useState([])

	const dispatch = useDispatch()

	return (
		<Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<Formik
				onSubmit={({ name, type, configGrid }) => {
					dispatch(
						startCreateWidget({
							name,
							type,
							config: {
								showGrid: configGrid,
							},
							data: valuesData.map(({ name, label, color }) => ({
								name,
								label,
								color: hexToRgb(color),
								bgColor: hexToRgb(color),
							})),
						})
					)
					setValuesData([])
					onClose()
				}}
				initialValues={{
					name: '',
					type: 'LineChart',
					configGrid: true,
				}}
				component={(props) => (
					<WidgetForm
						valuesData={valuesData}
						setValuesData={setValuesData}
						{...props}
					/>
				)}
			/>
		</Modal>
	)
}
