import React from 'react'
import { useColorModeValue, Link } from '@chakra-ui/react'

export const NavLink = ({ children }) => {
	return (
		<Link
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={'#'}
		>
			{children}
		</Link>
	)
}
