import { widgetTypes } from '../types/widgetTypes'

const intialState = {
	widgets: [],
}

export const widgetReducer = (state = intialState, action) => {
	switch (action.type) {
		case widgetTypes.setWidgets:
			return {
				...state,
				widgets: action.payload,
			}

		case widgetTypes.createWidget:
			return {
				...state,
				widgets: [...state.widgets, action.payload],
			}

		case widgetTypes.deleteWidget:
			return {
				...state,
				widgets: state.widgets.filter(
					(widget) => widget.key !== action.payload
				),
			}

		case widgetTypes.updateWidget:
			return {
				...state,
				widgets: state.widgets.map((widget) =>
					widget.key === action.payload.key
						? { ...widget, ...action.payload }
						: widget
				),
			}

		default:
			return state
	}
}
