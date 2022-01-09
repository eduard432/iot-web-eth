import React from 'react'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
    ModalBody,
} from '@chakra-ui/react'

import ReactJson  from 'react-json-view'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'

const placeholder = {
    data: {
    }
}

export const ViewData = ({ isOpen, onClose }) => {

    const { messages } = useSelector(state => state.messages)
    const [data, setData] = useState(placeholder)

    useEffect(() => {
        if(messages.length > 0) {
            setData(messages[9].data)
        }
    }, [messages])

	return (
		<Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>View Data</ModalHeader>
				<ModalCloseButton />
                <ModalBody>
                <ReactJson src={data} displayDataTypes={false} theme={'rjv-default'}  />
                </ModalBody>
			</ModalContent>
		</Modal>
	)
}
