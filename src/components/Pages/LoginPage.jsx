import React, { useState } from 'react'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	InputGroup,
	InputRightElement,
	FormErrorMessage,
} from '@chakra-ui/react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/authActions'
import { useDispatch } from 'react-redux'

export const LoginPage = () => {

	const dispatch = useDispatch()
	
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	return (
		<Formik
			onSubmit={(values) => {
				dispatch(startLogin(values))
			}}
			initialValues={{
				email: 'test1@test.com',
				password: '123456',
			}}
			validationSchema={() =>
				Yup.object({
					email: Yup.string()
						.email('Invalid email')
						.required('The email is required'),
					password: Yup.string().required('The password is required'),
				})
			}
		>
			{({ errors, handleChange, handleSubmit, values }) => (
				<form onSubmit={handleSubmit}>
					<FormControl isInvalid={!!errors.email}>
						<FormLabel>Email address</FormLabel>
						<Input
							type="text"
							focusBorderColor="blue.800"
							placeholder="Enter email"
							id={Math.random()}
							name="email"
							onChange={handleChange}
							value={values.email}
						/>
						<FormErrorMessage>{errors.email}</FormErrorMessage>
						<FormHelperText>We'll never share your email.</FormHelperText>
					</FormControl>
					<FormControl isInvalid={!!errors.password}>
						<FormLabel>Password</FormLabel>
						<InputGroup size="md">
							<Input
								pr="4.5rem"
								focusBorderColor="blue.800"
								type={show ? 'text' : 'password'}
								placeholder="Enter password"
								id={Math.random()}
								name="password"
								onChange={handleChange}
								value={values.password}
							/>
							<InputRightElement width="4.5rem">
								<Button h="1.75rem" size="sm" onClick={handleClick}>
									{show ? 'Hide' : 'Show'}
								</Button>
							</InputRightElement>
						</InputGroup>
						<FormErrorMessage>{errors.password}</FormErrorMessage>

						<FormHelperText>
							<Link to="/register">Register</Link>
						</FormHelperText>
					</FormControl>
					<Button
						// disabled={isSubmitting}
						type="submit"
						backgroundColor="blue.800"
						color="white"
						w="full"
						mt="3.5"
					>
						Login
					</Button>
				</form>
			)}
		</Formik>
	)
}
