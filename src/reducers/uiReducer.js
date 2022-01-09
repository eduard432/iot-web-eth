import { uiTypes } from '../types/uiTypes'

const initialState = {
	isOpenDashboardModal: false,
	isOpenCreateWidgetModal: false,
	isOpenWidgetModal: false,
	activeWidget: null,
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case uiTypes.openCreateDashboard:
			return {
				...state,
				isOpenDashboardModal: true,
			}

		case uiTypes.openCreateWidget:
			return {
				...state,
				isOpenCreateWidgetModal: true,
			}

		case uiTypes.closeCreateDashboard:
			return {
				...state,
				isOpenDashboardModal: false,
			}

		case uiTypes.closeCreateWidget:
			return {
				...state,
				isOpenCreateWidgetModal: false,
			}

		case uiTypes.openWidget:
			return {
				...state,
				activeWidget: action.payload,
				isOpenWidgetModal: true,
			}

		case uiTypes.closeWidget:
			return {
				...state,
				activeWidget: null,
				isOpenWidgetModal: false,
			}

		default:
			return state
	}
}
