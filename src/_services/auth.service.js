/**
 * Set the user
 * @param {*} user 
 */
export const setAuthUser = user => {
    console.log('setAuthUser', {user})
    localStorage.setItem('user', JSON.stringify(user))
}

/**
 * Get the user
 */
export const getAuthUser = () => {
    let user = localStorage.getItem('user')

    if(user) {
        try {
            return JSON.parse(user)
        }
        catch (err) {
            return null
        }
    }
}

/**
 * Check if we're logged in
 */
export const loggedIn = () => {
    let user = getAuthUser() 

    return typeof user === 'object'
}

/**
 * Check if we're admin
 */
export const isAdmin = () => {
    return loggedIn() && getAuthUser().access === 'admin'
}

/**
 * Get auth token
 */
export const getAuthToken = () => {
    const token = localStorage.getItem('token')
    return token
}

/**
 * Set auth token
 * @param {*} token 
 */
export const setAuthToken = (token) => {
    localStorage.setItem('token', token)
}

/**
 * Get Authorization header
 */
export const getAuthHeader = () => {
    let token = getAuthToken()

    if(token) {
        return {
            'Authorization': 'Bearer ' + token
        }
    }
}

/**
 * Get CSRF token
 */
export const getCsrfToken = () => {
    try {
        let user = getAuthUser()

        if(typeof user !== 'undefined') {
            return user.csrf_token
        }
        
        return null
    }
    catch (err) {
        console.log('Error getting csrf token', err)
    }
}

/**
 * Logout
 * Remove user from storage
 * Remove token from storage
 */
export const LogoutService = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}


