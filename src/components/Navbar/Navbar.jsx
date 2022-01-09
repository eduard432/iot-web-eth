import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	Box,
	Flex,
	Avatar,
	Select,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	chakra,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { useModal } from '../../hooks/useModal'

import { CreateDashboard, EditDashboard, CreateWidget } from '../Modals/index'

import { startLogout } from '../../actions/authActions'
import {
	changeActiveDashboard,
	startDeleteDashboard,
} from '../../actions/dashboardActions'
import {
	closeDashboardModal,
	closeWidgetModal,
	openDashboardModal,
	openWidgetModal,
} from '../../actions/uiActions'

import { ViewIcon } from '@chakra-ui/icons'
import { ViewData } from '../Modals/ViewData'

export const Navbar = () => {
	const [isOpenEditDashboard, onOpenEditDashboard, onCloseEditDashboard] =
		useModal()
	const [isOpenViewData, onOpenViewData, onCloseViewData] = useModal()

	const { name } = useSelector((state) => state.auth)
	const { dashboards, active } = useSelector((state) => state.dashboards)
	const { isOpenDashboardModal, isOpenCreateWidgetModal } = useSelector(
		(state) => state.ui
	)

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(startLogout())
	}

	const handleDeleteDashboard = () => {
		dispatch(startDeleteDashboard())
	}

	return (
		<>
			<ViewData isOpen={isOpenViewData} onClose={onCloseViewData} />
			<CreateDashboard
				isOpen={isOpenDashboardModal}
				onClose={() => dispatch(closeDashboardModal())}
			/>
			<EditDashboard
				isOpen={isOpenEditDashboard}
				onClose={onCloseEditDashboard}
			/>
			<CreateWidget
				isOpen={isOpenCreateWidgetModal}
				onClose={() => dispatch(closeWidgetModal())}
			/>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Select
						w={{ base: 'auto', md: 1 / 3, lg: 1 / 4 }}
						bg={'white'}
						focusBorderColor="blue.800"
						value={active?.key || ''}
						onChange={(e) => {
							dispatch(
								changeActiveDashboard(
									dashboards.find(
										(dashboard) => dashboard.key === e.target.value
									)
								)
							)
						}}
					>
						{dashboards.map((dashboard) => {
							return (
								<option value={dashboard.key} key={dashboard.key}>
									{dashboard.name}
								</option>
							)
						})}
					</Select>
					<Flex alignItems={'center'} justifyContent={'end'}>
						<Menu>
							<Button
								variant={'solid'}
								as={Button}
								bgColor="blue.800"
								color="white"
								size={'sm'}
								ml={2}
								mr={2}
								_hover={{ bgColor: 'blue.700' }}
								onClick={onOpenViewData}
							>
								<ViewIcon />
							</Button>
							<MenuButton
								variant={'solid'}
								as={Button}
								bgColor="blue.800"
								color="white"
								size={'sm'}
								mr={4}
								leftIcon={<AddIcon />}
								_hover={{ bgColor: 'blue.700' }}
							>
								Dashboard
							</MenuButton>
							{active?.key ? (
								<MenuList>
									<MenuItem onClick={() => dispatch(openDashboardModal())}>
										Create Dashboard
									</MenuItem>
									<MenuItem onClick={onOpenEditDashboard}>
										Edit Dashboard
									</MenuItem>
									<MenuItem onClick={() => dispatch(openWidgetModal())}>
										Create Widget
									</MenuItem>
									<MenuDivider />
									<MenuItem onClick={handleDeleteDashboard} color="red.400">
										Delete Dashboard
									</MenuItem>
								</MenuList>
							) : (
								<MenuList>
									<MenuItem onClick={() => dispatch(openDashboardModal())}>
										Create Dashboard
									</MenuItem>
								</MenuList>
							)}
						</Menu>
						<chakra.p mr={1}>{name}</chakra.p>
						<Menu>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
								minW={0}
							>
								<Avatar
									size={'sm'}
									src={
										'https://image.flaticon.com/icons/png/512/236/236832.png'
									}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem>Account</MenuItem>
								<MenuItem>Dashboards</MenuItem>
								<MenuDivider />
								<MenuItem onClick={handleLogout} color="red.400">
									Logout
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
