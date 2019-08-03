
import { getAuthUser, loggedIn as isLoggedIn } from '../_services/auth.service'
import authActions from '../_actions/auth.action'

const loggedIn = isLoggedIn()
let user = loggedIn ? getAuthUser() : null

const initialState = {
    logoutHandle: () => {},
    loggedIn,
    user,
}

const app = (state = initialState, action) => {
    switch(action.type) {
        case authActions.types.LOGIN:
            return {
                ...state.auth,
                loggedIn: true,
                user: action.payload,
            }
        case authActions.types.LOGOUT:
            return {
                ...state.auth,
                loggedIn: false,
                user: null,
            }
        default:
            return state
    }
}

export default app