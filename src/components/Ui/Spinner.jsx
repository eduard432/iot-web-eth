import React from 'react'
import { Spinner as SpinnerChakra , Flex} from '@chakra-ui/react'

export const Spinner = () => {
	return (
		<Flex flexGrow={1} h={'full'} justifyContent={'center'} alignItems={'center'} >
			<SpinnerChakra
			thickness="4px"
			speed="0.65s"
			emptyColor="gray.200"
			color="blue.500"
			size="xl"
		/>
		</Flex>
	)
}
