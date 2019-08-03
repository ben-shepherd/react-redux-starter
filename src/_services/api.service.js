import { getAuthHeader, getCsrfToken } from "./auth.service";
import config from '../config'
import axios from 'axios'

const initialHeader   = {
    'Content-Type': 'application/json'
}

/**
 * Fetch with Authorization token, and csrf token
 * @param {*} url 
 * @param {*} method 
 * @param {*} body 
 * @param {*} headers 
 */
export const fetch = async(url, method = 'post', body, headers = initialHeader) => {
    return new Promise((resolve, reject) => {
        try {
            // Remove start foward slash
            if(url.length && url.charAt(0) === '/') {
                url = url.substr(1)
            }

            // Add CSRF token
            headers = {...headers, 'x-csrf-token': getCsrfToken(), ...getAuthHeader()}
    
            const options = {
                headers,
                method
            }
            const postUrl = `${config.apiBaseUrl}/${url}`
            
            axios.post(postUrl, body, options).then(response => {
                resolve(handleResponse(response, url))
            }).catch(err => {
                console.log('API fetch error (1)', err, {url, method})
                reject(err)
            })
        }
        catch (err) {
            console.log('API fetch error (2)', err, {url, method})
            reject(err)
        }
    })
}

/**
 * Handle Fetch Response
 * If response is 401 (Unauthorized), dispatch LogoutAction
 * @param {*} response 
 * @param {*} resolve 
 * @param {*} reject 
 */
const handleResponse = (response, url = null) => {
    try {
        if(response.status === 200) {
            return response.data
        }
        else {
            return {
                status: 'error',
                code: response.status,
                message: response.data
            }
        }

    }
    catch (err) {
        console.log('API fetch error (3)', err, {response})
    }
}

const apiService = {
    fetch,
    initialHeader,
}

export default apiService