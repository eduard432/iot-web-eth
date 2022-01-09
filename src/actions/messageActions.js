import { getMessagesService } from '../services/Messages/messagesService'
import { messageTypes } from '../types/messageTypes'

export const startSetMessages = (key) => {
	return async (dispatch) => {
		const { ok, msg } = await getMessagesService(key)

		if (ok) {
			dispatch(setMessages(msg.reverse()))
		}
	}
}

export const addMessage = (message) => {
	return async (dispatch, getState) => {
		const { messages } = getState().messages

		let newMessages = []

		if (messages.length < 10) {
			newMessages = [...messages, message]
		} else {
			messages.shift()
			newMessages = [...messages, message]
		}

		dispatch(setMessages(newMessages))
	}
}

const setMessages = (messages) => {
	return {
		type: messageTypes.setMessages,
		payload: messages,
	}
}
