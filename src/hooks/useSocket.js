import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'
import { addMessage } from '../actions/messageActions'

const baseUrl = process.env.REACT_APP_API_URL

export const useSocket = (key) => {
	const [socket, setSocket] = useState(null)
	const [online, setOnline] = useState(false)

	const dispatch = useDispatch()

	const { uid } = useSelector((state) => state.auth)

	const connectSocket = useCallback(() => {
		console.log('socket connected ' + key)
		const token = localStorage.getItem('token')

		const socketTemp = io.connect(baseUrl, {
			transports: ['websocket'],
			autoConnect: true,
			forceNew: true,
			query: {
				'x-token': token,
				'x-key': key,
			},
		})

		setSocket(socketTemp)
	}, [key])

	const disconnectSocket = useCallback(() => {
		console.log('disconnect socket')
		socket?.disconnect()
	}, [socket])

	useEffect(() => {
		setOnline(socket?.connected)
	}, [socket])

	useEffect(() => {
		socket?.on('connect', () => setOnline(true))
	}, [socket])

	useEffect(() => {
		socket?.on('disconnect', () => setOnline(false))
	}, [socket])

	useEffect(() => {
		if(!uid && online) {
			console.log('socket disconnected ' + !uid)
			disconnectSocket()
		}
	}, [disconnectSocket, uid, online])

	useEffect(() => {
		socket?.on('receive-msg', (msg) => {
			console.log(msg)
			dispatch(addMessage(msg))
		})
	}, [socket, dispatch])

	return {
		socket,
		online,
		connectSocket,
		disconnectSocket,
	}
}
