/**
 * Import Dependency
 */
import Vue from 'vue'
import i18n from '../../locales'

/**
 * Export
 */
export function getTokenExpiredBox() {
	return new Promise((resolve, reject) => {
		Vue.prototype.$confirm(i18n.t('lang.components.popup[0].expired.desc'), i18n.t('lang.components.popup[0].expired.title'), {
			confirmButtonText: i18n.t('lang.components.popup[0].expired.confirm'),
			type: 'warning',
			showCancelButton: false,
			closeOnClickModal: false,
			closeOnPressEscape: false,
			customClass: 'expire-box'
		}).then(() => {
			resolve(true)
		}).catch(() => {
			reject('Error')
		})
	})
}
