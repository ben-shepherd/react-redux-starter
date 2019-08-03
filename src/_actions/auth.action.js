import { LogoutService, setAuthUser } from '../_services/auth.service'

const LOGIN = 'LOGIN'
const login = (user) => {
    setAuthUser(user)
    return {type: LOGIN, payload: user}
}

const LOGOUT = 'LOGOUT'
const logout = () => {
    LogoutService()
    return {type: LOGOUT}
}

export default {
    login,
    logout,
    
    types: {
        LOGIN,
        LOGOUT,
    },
}
