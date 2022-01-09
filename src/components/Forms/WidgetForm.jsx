import React, { useState } from 'react'

import {
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	Input,
	FormLabel,
	Select,
	Checkbox,
	chakra,
    Circle,
    Flex
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { closeWidgetModal } from '../../actions/uiActions'
import { ChartForm } from './ChartForm'

export const WidgetForm = ({
	errors,
	handleChange,
	handleSubmit,
	values,
    valuesData,
    setValuesData
}) => {
	const [show, setShow] = useState(false)

	const dispatch = useDispatch()

	return (
		<form onSubmit={handleSubmit}>
			<ModalContent>
				<ModalHeader>Create Widget</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl>
						<FormLabel>Chart Title:</FormLabel>
						<Input
							autoComplete="off"
							placeholder="My First Chart"
							name="name"
							value={values.name}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Type:</FormLabel>
						<Select
							name="type"
							value={values.type}
							onChange={handleChange}
							placeholder="Select a chart"
						>
							<option value="LineChart">Line Chart</option>
							{/* <option value="BarChart">Bar Chart</option> */}
						</Select>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Config:</FormLabel>
						<Checkbox
							name="configGrid"
							value={values.configGrid}
							onChange={handleChange}
							defaultIsChecked={values.configGrid}
						>
							Display Chart Grid
						</Checkbox>
					</FormControl>
					<chakra.div mt={4}>
						<FormLabel>Chart Values:</FormLabel>
						<Button onClick={() => setShow(true)} hidden={show}>
							Add Value
						</Button>

						<ChartForm
							setShow={setShow}
							hidden={!show}
							setValuesData={setValuesData}
						/>

						<chakra.div mt={3}>
							{valuesData.map(({ label, name, color }) => (
								<Flex
                                    alignItems={'center'}
									bg={'gray.100'}
									rounded={'sm'}
									p={2}
									key={Math.random()}
                                    mb={2}
								>
									<Circle size={30} bg={color} ></Circle> 
                                    <chakra.h3 ml={3} >{label} / {name}</chakra.h3>
								</Flex>
							))}
						</chakra.div>
					</chakra.div>
				</ModalBody>

				<ModalFooter>
					<Button
						onClick={() => dispatch(closeWidgetModal())}
						mx={2}
						variant="ghost"
					>
						Cancel
					</Button>
					<Button
						mx={2}
						bgColor="blue.800"
						color="white"
						_hover={{ bgColor: 'blue.700' }}
						mr={3}
						type="submit"
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</form>
	)
}
