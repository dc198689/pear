/**
 * Import Global Style (.css/.scss)
 */
import 'element-ui/lib/theme-default/index.css' // Theme UI
import './assets/scss/index.scss' // Customize UI

/**
 * Import Dependency
 */
import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import head from 'vue-head'
import 'es6-promise/auto'
import { sync } from 'vuex-router-sync'
import i18n from './locales'

/**
 * Import Component (.vue)
 */
import App from './App.vue'

/**
 * Global Config
 */
Vue.config.productionTip = false
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
	$bus: {
		get: function() {
			return EventBus
		}
	}
})
Vue.use(head)
Vue.use(ElementUI)
sync(store, router)
const lang = store.state.language
if (lang) {
	i18n.locale = lang
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	i18n,
	template: '<App/>',
	components: { App }
})
