import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { ButtonSpan } from '../Ui/ButtonSpan'
import { Dashboard } from '../Dashboard'
import { Navbar } from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { startSetDashboards } from '../../actions/dashboardActions'
import { Spinner } from '../Ui/Spinner'
import { openDashboardModal } from '../../actions/uiActions'

export const MainPage = () => {
	const dispatch = useDispatch()

	const { active } = useSelector((state) => state.dashboards)
	const { loading } = useSelector((state) => state.dashboards)

	useEffect(() => {
		dispatch(startSetDashboards())
	}, [dispatch])

	if (loading) {
		return <Spinner />
	}

	return (
		<Flex direction={'column'} h={'full'}>
			<Navbar />
			{active ? (
				<Dashboard />
			) : (
				<ButtonSpan
					onClick={() => dispatch(openDashboardModal())}
					title="Create Dashboard"
				/>
			)}
		</Flex>
	)
}
