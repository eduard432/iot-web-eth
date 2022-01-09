import { fetchWithToken } from '../../helpers/fetch'

export const getMessagesService = async (key) => {
	const resp = await fetchWithToken(`msg/${key}`)
	return resp
}
