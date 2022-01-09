import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch'

export const loginService = async ({ email, password }) => {
	try {
		const resp = await fetchWithoutToken(
			'auth/login',
			{ email, password },
			'POST'
		)
		return resp
	} catch (error) {
		console.log(error)
		return { ok: false }
	}
}

export const registerService = async ({ email, password1, name }) => {
	const resp = await fetchWithoutToken(
		'auth/register',
		{
			name,
			email,
			password: password1,
		},
		'POST'
	)

	return resp
}

export const renewService = async () => {
	try {
		const resp = await fetchWithToken('auth/renew')
		return resp
	} catch (error) {
		console.log(error)
		return { ok: false }
	}
}
