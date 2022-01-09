import { authTypes } from '../types/authTypes'

const initialState = {
	loading: true,
	uid: null,
	name: null,
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.login:
			return {
				...state,
				...action.payload,
				loading: false,
			}

		case authTypes.checkingFinish:
			return {
				...state,
				loading: false,
			}

		case authTypes.logout:
			return {
				...initialState,
				loading: false,
			}

		default:
			return state
	}
}
