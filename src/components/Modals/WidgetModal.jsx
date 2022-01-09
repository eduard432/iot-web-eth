import React from 'react'

import {
	Modal,
	ModalOverlay,
	chakra,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

export const WidgetModal = ({ isOpen, onClose, wKey }) => {
	return (
		<Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
                    mt={6}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<chakra.h3 display={'inline-block'} mt={4}>
						{wKey}
					</chakra.h3>
					<CopyToClipboard text={wKey}>
						<Button mt={3} size={'sm'}>Copy</Button>
					</CopyToClipboard>
				</ModalHeader>
				<ModalCloseButton />
			</ModalContent>
		</Modal>
	)
}
