/**
 * Import Dependency
 */
import * as types from '../mutations_types'

/**
 * Import API
 */
import authAPI from '../../services/api/auth'

/**
 * Declare Variable
 */
const state = {
	isAuthorize: JSON.parse(localStorage.getItem('isAuthorize')) || false,
	accessToken: localStorage.getItem('accessToken') || '',
}
const getters = {
	getAccessToken: state => state.accessToken,
	getIsAuthorize: state => state.isAuthorize
}
const actions = {
	async signin({ commit }, context) {
		try {
			const response = await authAPI.signin(context)
			commit(types.LOGIN_SUCCESS, response.data)
			return Promise.resolve(response.data)
		} catch (e) {
			console.group('[Vuex][Actions] Error from signin')
			console.log(e.response)
			console.groupEnd()
			commit(types.LOGIN_FAILED, e.response)
			return Promise.reject(e.response)
		}
	}
}
const mutations = {
	[types.LOGIN_SUCCESS](state, data) {
		state.accessToken = data.accessToken
		state.isAuthorize = true
		localStorage.setItem('accessToken', data.accessToken)
		localStorage.setItem('isAuthorize', true)
	},
	[types.LOGIN_FAILED](state, data) {
		state.accessToken = ''
		state.isAuthorize = false
		localStorage.removeItem('accessToken')
		localStorage.removeItem('isAuthorize')
	}
}

/**
 * Export
 */
export default {
	state,
	getters,
	actions,
	mutations
}
