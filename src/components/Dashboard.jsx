import React from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Chart } from './Ui/Chart'
import { ButtonSpan } from './Ui/ButtonSpan'
import { closeWidget, openWidgetModal } from '../actions/uiActions'
import { WidgetModal } from './Modals/WidgetModal'

export const Dashboard = () => {

	const dispatch = useDispatch()

	const { widgets } = useSelector((state) => state.widget)

	const { isOpenWidgetModal, activeWidget } = useSelector((state) => state.ui)

	if (widgets.length === 0) {
		return <ButtonSpan onClick={() => {
			dispatch(openWidgetModal())
		}} title="Create Widget" />
	}

	return (
			<>
				<WidgetModal 
					isOpen={isOpenWidgetModal}
					onClose={() => dispatch(closeWidget())}
					wKey={activeWidget} 
				/>
				<Flex flexGrow={1} p={{ base: 4, md: 8 }}>
					<Grid
						gridAutoRows={200}
						templateColumns={{
							base: 'repeat(2, 1fr)',
							md: 'repeat(8, 1fr)',
							lg: 'repeat(12, 1fr)',
						}}
						w={'full'}
						gap={4}
						// autoRows={'auto'}
					>
						{widgets.map(({ key, type, ...props }) => (
							<Chart key={key} wKey={key} type={type} {...props} />
						))}
					</Grid>
				</Flex>
			</>
	)
}
