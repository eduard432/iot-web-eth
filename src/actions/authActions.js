import { loginService, registerService, renewService } from '../services/Auth/authServices'
import { authTypes } from '../types/authTypes'
import Swal from 'sweetalert2'
import { logoutDashboards } from './dashboardActions'

export const startLogin = (userValues) => {
	return async (dispatch) => {
		const { user, ok, msg, token } = await loginService(userValues)

		if (ok) {
			localStorage.setItem('token', token)

			dispatch(
				login({
					uid: user.uid,
					name: user.name,
				})
			)
		} else {
			Swal.fire('Error', msg, 'error')
		}
	}
}

export const startRegister = (userValues) => {
    return async (dispatch) => {

        const { ok, user, token } = await registerService(userValues)

        if(ok) {
            localStorage.setItem('token', token)

            dispatch(login({
                uid: user.uid,
                name: user.name
            }))
        } else {
            Swal.fire('Error', user.msg, 'error')
        }

    }
}

export const startCheckingAuth = () => {
	return async (dispatch) => {
		const { ok, user, token } = await renewService()
		if (!ok) {
			return dispatch(checkingFinish())
		}
		localStorage.setItem('token', token)

		dispatch(
			login({
				uid: user.uid,
				name: user.name,
			})
		)
	}
}

export const checkingFinish = () => ({ type: authTypes.checkingFinish })

const login = (user) => ({
	type: authTypes.login,
	payload: user,
})

export const startLogout = () => {
	return async (dispatch) => {
		localStorage.clear()
		dispatch(logoutDashboards())
		dispatch(logout())
	}
}

export const logout = () => ({type: authTypes.logout})