import { dashboardTypes } from '../types/dashboardTypes'

const initialState = {
	dashboards: [],
	active: null,
	loading: true,
}

export const dashboardReducer = (state = initialState, action) => {

	switch (action.type) {
		case dashboardTypes.setDashboards:
			return {
				...state,
				dashboards: [...action.payload],
			}

		case dashboardTypes.setActiveDashboard:
			return {
				...state,
				active: action.payload,
			}

		case dashboardTypes.finishLoading:
			return {
				...state,
				loading: false,
			}

		case dashboardTypes.startLoading:
			return {
				...state,
				loading: true,
			}
		
		case dashboardTypes.deleteDashboard:
			return {
				...state,
				active: null,
			}
		
		case dashboardTypes.logout:
			return initialState

		default:
			return state
	}
}
