import React from 'react'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	FormErrorMessage,
} from '@chakra-ui/react'
import { Formik } from 'formik'

import * as Yup from 'yup'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startRegister } from '../../actions/authActions'

export const RegisterPage = () => {

	const dispatch = useDispatch()

	return (
		<Formik

			onSubmit={(values) => {
				dispatch(startRegister(values))
			}}

			initialValues={{
				name: '',
				email: '',
				password1: '',
				password2: '',
			}}
			validationSchema={() =>
				Yup.object({
					name: Yup.string().required('The name is required'),
					email: Yup.string()
						.email('Invalid email')
						.required('The email is required'),
					password1: Yup.string()
						.required('The password is required')
						.min(6, 'The password must be at least 6 characters')
						.max(20, 'The password must be at most 20 characters'),
					password2: Yup.string().required('The password is required'),
				})
			}
			validate={(values) => {
				const errors = {}
				if (values.password1 !== values.password2) {
					errors.password2 = 'The passwords do not match'
				}
				return errors
			}}
		>
			{({ errors, handleChange, handleSubmit, values }) => (
				<form onSubmit={handleSubmit}>
					<FormControl isInvalid={!!errors.name}>
						<FormLabel>Name</FormLabel>

						<Input
							name="name"
							type="text"
							focusBorderColor="blue.800"
							placeholder="Enter your name"
							id={Math.random()}
							value={values.name}
							onChange={handleChange}
						/>
						<FormErrorMessage>{errors.name}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={!!errors.email}>
						<FormLabel>Email address</FormLabel>

						<Input
							name="email"
							type="text"
							focusBorderColor="blue.800"
							placeholder="Enter email"
							id={Math.random()}
							value={values.email}
							onChange={handleChange}
						/>
						<FormErrorMessage>{errors.email}</FormErrorMessage>
						<FormHelperText>We'll never share your email.</FormHelperText>
					</FormControl>
					<FormControl isInvalid={!!errors.password1}>
						<FormLabel>Password</FormLabel>

						<Input
							name="password1"
							autoComplete="off"
							pr="4.5rem"
							type="password"
							focusBorderColor="blue.800"
							placeholder="Enter password"
							id={Math.random()}
							value={values.password1}
							onChange={handleChange}
						/>
						<FormErrorMessage>{errors.password1}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errors.password2}>
						<FormLabel>Password again:</FormLabel>

						<Input
							name="password2"
							autoComplete="off"
							pr="4.5rem"
							type="password"
							placeholder="Enter password"
							focusBorderColor="blue.800"
							id={Math.random()}
							value={values.password2}
							onChange={handleChange}
						/>
						<FormErrorMessage>{errors.password2}</FormErrorMessage>
						<FormHelperText>
							<Link to="/login">Login</Link>
						</FormHelperText>
					</FormControl>

					<Button
						type="submit"
						backgroundColor="blue.800"
						color="white"
						w="full"
						mt="3.5"
					>
						Register
					</Button>
				</form>
			)}
		</Formik>
	)
}
