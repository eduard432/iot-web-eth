import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'

import { ChakraProvider } from '@chakra-ui/react'

import { AppRouter } from './router/AppRouter'

export default function MainApp() {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<AppRouter />
			</ChakraProvider>
		</Provider>
	)
}
