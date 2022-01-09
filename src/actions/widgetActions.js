import { createWidgetService } from '../services/Widgets/widgetServices'
import { widgetTypes } from '../types/widgetTypes'

export const setWidgets = (widgets) => ({
	type: widgetTypes.setWidgets,
	payload: widgets,
})

export const startCreateWidget = (widgetConfig) => {
	return async (dispatch, getState) => {
		const { active } = getState().dashboards
		const { ok, dashboard } = await createWidgetService(
			widgetConfig,
			active.key
		)

		if (ok) {
			return dispatch(setWidgets(dashboard.widgets))
		}
	}
}
