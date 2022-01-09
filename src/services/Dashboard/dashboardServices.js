import { fetchWithToken } from '../../helpers/fetch'

export const getDashboardsService = async () => {
	return await fetchWithToken('dashboard/dashboards')
}

export const getDashboardInfoService = async (key) => {
	// const key = localStorage.getItem('dashboardKey')
	const resp = await fetchWithToken(`dashboard/${key}`)
	return resp
}

export const createDashboardService = async (name) => {
	const resp = await fetchWithToken('dashboard/new', { name }, 'POST')
	return resp
}

export const editDashboardService = async (key, name) => {
	const resp = await fetchWithToken('dashboard', { key, name }, 'PUT')
	return resp
}

export const deleteDashboardService = async (key) => {
	const resp = await fetchWithToken(`dashboard/${key}`, {}, 'DELETE')
	return resp
}

export const getMessages = async () => {
	const key = localStorage.getItem('dashboardKey')
	const resp = await fetchWithToken(
		'msg',
		{
			key,
		},
		'POST'
	)

	return resp
}
