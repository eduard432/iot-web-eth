import React from 'react'
import { GridItem, Flex } from '@chakra-ui/react'


export const Widget = ({children, ...props}) => {
    return (
        <GridItem
			colSpan={{ base: 2, md: 4 }}
			bgColor={'gray.100'}
			rounded={'lg'}
			shadow={'lg'}
			p={'3'}
			maxHeight={250}
			{...props}
		>
			<Flex justifyContent={'center'} alignItems={'center'} h={'full'} >
				{children}
			</Flex>
		</GridItem>
    )
}
