import { fetchWithToken } from '../../helpers/fetch'

export const createWidgetService = async (
	{ name, type, config, data },
	key
) => {
	const resp = await fetchWithToken(
		'widget',
		{
			key,
			name,
			type,
			config,
			data,
		},
		'POST'
	)
	return resp
}

export const deleteWidgetService = async (key) => {
	const resp = await fetchWithToken('widget', { key }, 'DELETE')
	return resp
}

export const updateWidgetService = async ({ name }, key) => {
	const resp = await fetchWithToken(
		'widget',
		{
			key,
			name,
		},
		'PUT'
	)
	return resp
}
