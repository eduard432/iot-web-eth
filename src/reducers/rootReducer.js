import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { messagesReducer } from './messagesReducer'
import { dashboardReducer } from './dashboardReducer'
import { uiReducer } from './uiReducer'
import { widgetReducer } from './widgetReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	dashboards: dashboardReducer,
	messages: messagesReducer,
	ui: uiReducer,
	widget: widgetReducer
})
