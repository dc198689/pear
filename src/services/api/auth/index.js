/**
 * Import Dependency
 */
import axios from '../../../interceptor'

/**
 * Declare Variable
 */
const baseUrl = 'http://localhost:8888/'
const signinUrl = `${baseUrl}/signin`
const signoutUrl = `${baseUrl}/signout`
const refreshTokenUrl = `${baseUrl}/token/refresh`

/**
 * Export
 */
export default {
	signin(data) {
		return axios.post(signinUrl, {
			'username': data.username
		})
	},
	signout(data) {
		return axios.post(signoutUrl, {
			'username': data.username
		})
	},
	refreshToken(data) {
		const accessToken = data
		return axios.get(`${refreshTokenUrl}`, {
			params: {
				'accessToken': accessToken
			}
		})
	}
}
