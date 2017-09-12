/**
 * Import Dependency
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

/**
 * Import Component (.vue)
 * For Async Component Syntax
 * const X = () => import('@/pages/xxx/xxx.vue')
 */
import Signin from '@/pages/signin/Index.vue'
import Dashboard from '@/pages/dashboard/Index.vue'
import UserInfo from '@/pages/dashboard/child/user/Info.vue'
import PageNotFound from '@/pages/errors/404.vue'

/**
 * Config
 */
Vue.use(Router)

/**
 * Declare Variable
 */
const pageWhiteList = ['/', '/signin']

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'root',
			component: Signin,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/signin',
			name: 'Signin',
			component: Signin,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			meta: {
				requiresAuth: true
			},
			children: [
				{
					path: 'user/info',
					name: 'user.info',
					component: UserInfo,
					meta: {
						requiresAuth: true
					}
				}
			]
		},
		{
			path: '/error/404',
			name: 'pageNotFound1',
			component: PageNotFound,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/*',
			name: 'pageNotFound2',
			component: PageNotFound,
			meta: {
				requiresAuth: false
			}
		}
	]
})

/**
 * Router Guards
 */
router.beforeEach((to, from, next) => {
	let _accessToken = store.state.auth.accessToken || ''
	let _isAuthorize = store.state.auth.isAuthorize || false

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (_accessToken && _isAuthorize) {
			next()
		} else {
			next({
				path: '/signin',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		if (pageWhiteList.indexOf(to.path) !== -1) {
			next()
		} else {
			if (to.path !== '/signin') {
				next()
			}
		}
	}
})

router.afterEach((to, from) => {

})

export default router
