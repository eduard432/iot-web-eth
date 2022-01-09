import React from 'react'
import { useDispatch } from 'react-redux'

import { startCreateDashboard } from '../../actions/dashboardActions'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	Input,
	FormLabel,
	FormErrorMessage
} from '@chakra-ui/react'

import { Formik } from 'formik'
import * as Yup from 'yup'

export const CreateDashboard = ({ isOpen, onClose }) => {

	const dispatch = useDispatch()


	return (
		<Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<Formik
				onSubmit={({name}) => {
					dispatch(startCreateDashboard(name))
					onClose()
				}}
				initialValues={{
					name: '',
				}}
				validationSchema={() =>
					Yup.object({
						name: Yup.string().required('The name is required'),
					})
				}
			>
				{({ errors, handleChange, handleSubmit, values }) => (
					<form onSubmit={handleSubmit}>
						<ModalContent>
							<ModalHeader>Create Dashboard</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<FormControl isRequired isInvalid={!!errors.name}>
									<FormLabel>Dashboard Name:</FormLabel>
									<Input
										focusBorderColor="blue.800"
										autoComplete="off"
										placeholder="My First Dashboard"
										name="name"
										value={values.name}
										onChange={handleChange}
									/>
									<FormErrorMessage>{errors.name}</FormErrorMessage>
								</FormControl>
							</ModalBody>

							<ModalFooter>
								<Button
									type="submit"
									mx={2}
									bgColor="blue.800"
									color="white"
									_hover={{ bgColor: 'blue.700' }}
									mr={3}
								>
									Create
								</Button>
								<Button onClick={onClose} mx={2} variant="ghost">
									Cancel
								</Button>
							</ModalFooter>
						</ModalContent>
					</form>
				)}
			</Formik>
		</Modal>
	)
}
