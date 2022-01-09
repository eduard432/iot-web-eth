import {
	createDashboardService,
	deleteDashboardService,
	editDashboardService,
	getDashboardInfoService,
	getDashboardsService,
} from '../services/Dashboard/dashboardServices'
import { dashboardTypes } from '../types/dashboardTypes'
import { startSetMessages } from './messageActions'
import { setWidgets } from './widgetActions'

export const startSetDashboards = () => {
	return async (dispatch) => {
		const { ok, dashboards } = await getDashboardsService()

		if (!ok) {
			dispatch(setDashboards([]))
			return dispatch(finishLoading())
		}

		dispatch(setDashboards(dashboards))

		const active = dashboards.find(
			(dashboard) => dashboard.lastVisited === true
		)

		if (active) {
			dispatch(changeActiveDashboard(active))
		}

		dispatch(finishLoading())
	}
}

export const changeActiveDashboard = (dashboard) => {
	return async (dispatch) => {
		const { ok: okDashboard, dashboard: newDashboard } =
			await getDashboardInfoService(dashboard.key)

		if (okDashboard) {
			dispatch(startSetMessages(dashboard.key))
			dispatch(startSetActiveDashboard(newDashboard))
		}
	}
}

const startSetActiveDashboard = (newDashboard) => {
	return async (dispatch, getState) => {
		const { dashboards } = getState().dashboards

		if (dashboards.length === 0) {
			dispatch(setActiveDashboard(newDashboard))
			return dispatch(setDashboards([newDashboard]))
		}

		const newDashboards = dashboards.map((dashboard) => {
			if (dashboard.lastVisited) {
				dashboard.lastVisited = false
			}
			if (dashboard.key === newDashboard.key) {
				dashboard = newDashboard
			}
			return dashboard
		})

		const dashboard = newDashboards.find(
			(dashboard) => dashboard.key === newDashboard.key
		)

		if (dashboard) {
			dispatch(setDashboards(newDashboards))
		} else {
			dispatch(setDashboards([...newDashboards, newDashboard]))
		}

		dispatch(setWidgets(newDashboard.widgets))
		dispatch(setActiveDashboard(newDashboard))
	}
}

export const startCreateDashboard = (name) => {
	return async (dispatch) => {
		const { ok, dashboard: newDashboard } = await createDashboardService(name)

		if (ok) {
			dispatch(startSetActiveDashboard(newDashboard))
		}
	}
}

export const startEditingDashboard = (name) => {
	return async (dispatch, getState) => {
		const { active } = getState().dashboards
		const { ok, dashboard: newDashboard } = await editDashboardService(
			active.key,
			name
		)

		if (ok) {
			dispatch(startSetActiveDashboard(newDashboard))
		}
	}
}

export const startDeleteDashboard = () => {
	return async (dispatch, getState) => {
		const { active } = getState().dashboards
		const response = await deleteDashboardService(active.key)

		if (response.ok) {
			dispatch(startLoading())
			dispatch(startSetDashboards())
			dispatch(deleteDashboard())
		}
	}
}

export const logoutDashboards = () => ({
	type: dashboardTypes.logout,
})

const setDashboards = (dashboards) => ({
	type: dashboardTypes.setDashboards,
	payload: dashboards,
})

const deleteDashboard = () => ({
	type: dashboardTypes.deleteDashboard,
})

const setActiveDashboard = (dashboard) => ({
	type: dashboardTypes.setActiveDashboard,
	payload: dashboard,
})

const startLoading = () => ({
	type: dashboardTypes.startLoading,
})

const finishLoading = () => ({
	type: dashboardTypes.finishLoading,
})
