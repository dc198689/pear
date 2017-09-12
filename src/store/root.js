/**
 * Import Dependency
 */
import * as types from './mutations_types'
import i18n from '../locales'

/**
 * Declare Variable
 */

/**
 * Export
 */
export const state = {
	language: localStorage.getItem('language') || ''
}

export const actions = {
	switchI18n({ commit }, context) {
		commit(types.SET_LANGUAGE, context)
	}
}

export const mutations = {
	[types.SET_LANGUAGE](state, data) {
		i18n.locale = data
		state.language = data
		localStorage.setItem('language', data)
	}
}
