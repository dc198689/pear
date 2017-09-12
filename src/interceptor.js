/**
 * Import Dependency
 */
import axios from 'axios'
import store from './store'

/**
 * Config
 */
axios.defaults.timeout = 5000

/**
 * Declare Variable
 */

/**
 * Config
 */
axios.interceptors.request.use(config => {
	let credential = store.state.credential
	let isAuthorize = store.state.isAuthorize
	if (credential && isAuthorize) {
		config.headers.common['Authorization'] = 'Bearer ' + credential
	}
	return config
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

axios.interceptors.response.use(data => {
		return data
}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

export default axios
