/**
 * Import Dependency
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Root Scope of VUEX
 */
import * as getters from './getters'
import { state, actions, mutations } from './root'

/**
 * Module Scope of VUEX
 */
import auth from './modules/auth'
import users from './modules/users'

/**
 * Config
 */
Vue.use(Vuex)

/**
 * Export
 */
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules: {
		auth,
		users
	},
	strict: true
})
