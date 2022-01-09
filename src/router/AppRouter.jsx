import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { chakra } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { Spinner } from '../components/Ui/Spinner'
import { MainPage } from '../components/Pages/MainPage'

import { Flex, Box } from '@chakra-ui/react'
import { LoginPage } from '../components/Pages/LoginPage'
import { RegisterPage } from '../components/Pages/RegisterPage'
import { startCheckingAuth } from '../actions/authActions'

import { useSocket } from '../hooks/useSocket'

export const AppRouter = () => {
	const dispatch = useDispatch()
	const { loading } = useSelector((state) => state.auth)
	const { active } = useSelector((state) => state.dashboards)

	const { connectSocket, disconnectSocket, online } = useSocket(active?.key)

	useEffect(() => {
		if(active) {
			connectSocket()
			if(online) {
				disconnectSocket()
			}
		}
	}, [connectSocket, active ])

	useEffect(() => {
		dispatch(startCheckingAuth())
	}, [dispatch])

	if (loading) {
		return <Spinner />
	}

	return (
		<chakra.div h="full">
			<BrowserRouter>
				<Routes>
					<Route
						path="/login"
						element={
							<PublicRoute>
								<Flex h="full" alignItems="center" justifyContent="center">
									<Box boxShadow="lg" rounded="md" p="3.5">
										<LoginPage />
									</Box>
								</Flex>
							</PublicRoute>
						}
					/>

					<Route
						path="/register"
						element={
							<PublicRoute>
								<Flex h="full" alignItems="center" justifyContent="center">
									<Box boxShadow="lg" rounded="md" p="3.5">
										<RegisterPage />
									</Box>
								</Flex>
							</PublicRoute>
						}
					/>

					<Route
						path="/home"
						element={
							<PrivateRoute>
								<MainPage />
							</PrivateRoute>
						}
					/>

					<Route path="/*" element={<Navigate replace to="/home" />} />
				</Routes>
			</BrowserRouter>
		</chakra.div>
	)
}
