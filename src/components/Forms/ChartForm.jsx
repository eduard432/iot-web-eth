import React, { useState } from 'react'

import {
	FormControl,
	FormLabel,
	Input,
	Button,
	chakra,
} from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm'
import { useEffect } from 'react'

export const ChartForm = ({ setShow, setValuesData, ...props }) => {
	const [values, handleChange, reset] = useForm({
		name: '',
		label: '',
		color: '#ffffff',
	})

	const [errors, setErrors] = useState({})

	useEffect(() => {
		if (values.name === '') {
			setErrors((errors) => ({
				...errors,
				name: 'The name is required',
			}))
		} else {
			setErrors((errors) => ({
				...errors,
				name: '',
			}))
		}

		if (values.label === '') {
			setErrors((errors) => ({
				...errors,
				label: 'The label is required',
			}))
		} else {
			setErrors((errors) => ({
				...errors,
				label: '',
			}))
		}
	}, [values, setErrors])

	return (
		<chakra.div {...props}>
			<FormControl mt={4}>
				<FormLabel>Label:</FormLabel>
				<Input
					autoComplete="off"
					placeholder="Value 1"
					name="label"
					value={values.label}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel>Name:</FormLabel>
				<Input
					autoComplete="off"
					placeholder="val1"
					name="name"
					value={values.name}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel>Line Color:</FormLabel>
				<Input
					autoComplete="off"
					name="color"
					value={values.color}
					onChange={handleChange}
					type="color"
				/>
			</FormControl>
			<chakra.div mt={4}>
				<Button
					size={'sm'}
					onClick={() => {
						reset()
						setShow(false)
					}}
					mx={2}
					variant="ghost"
				>
					Cancel
				</Button>
				<Button
					disabled={!!errors.name || !!errors.label}
					size={'sm'}
					mx={2}
					bgColor="green.500"
					color="white"
					_hover={{ bgColor: 'blue.700' }}
					mr={3}
					onClick={() => {
						reset()
						setShow(false)
						setValuesData((valuesData) => [...valuesData, values])
					}}
					type="button"
				>
					Add
				</Button>
			</chakra.div>
		</chakra.div>
	)
}
