import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startEditingDashboard } from '../../actions/dashboardActions'

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
	FormErrorMessage,
	chakra,
} from '@chakra-ui/react'

import { Formik } from 'formik'
import * as Yup from 'yup'
import CopyToClipboard from 'react-copy-to-clipboard'

export const EditDashboard = ({ isOpen, onClose }) => {
	const dispatch = useDispatch()
	const { active } = useSelector((state) => state.dashboards)

	return (
		<Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<Formik
				onSubmit={({ name }) => {
					dispatch(startEditingDashboard(name))
					onClose()
				}}
				initialValues={{
					name: active?.name,
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
							<ModalHeader>Edit Dashboard</ModalHeader>
							<ModalHeader

								display={'flex'}
								justifyContent={'space-between'}
								alignItems={'center'}
							>
								<chakra.h3 display={'inline-block'} mt={4}>
									{active?.key}
								</chakra.h3>
								<CopyToClipboard text={active?.key}>
									<Button mt={3} size={'sm'}>
										Copy
									</Button>
								</CopyToClipboard>
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<FormControl isRequired isInvalid={!!errors.name}>
									<FormLabel>New Dashboard Name:</FormLabel>
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
									Edit
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
