/**
 * Import Dependency
 */
import moment from 'moment'

/**
 * Config
 */
moment.locale('zh-hk')
require('twix')

/**
 * Export
 * Use TimeStamp Format: 2017-08-10T14:52:39+08:00
 */
export function getCurrentTime() {
	return moment().format()
}

export function compareTimeRange(timestamp) {
	let current = moment().format()
	let previous = timestamp
	let compare = moment(previous).twix(current)
	return compare.length('minutes')
}

export function setTimer(callback) {
	let interval = setInterval(() => {
		callback()
	}, 20 * 1000) // 20 Seconds
	return interval
}

export function clearTimer(id) {
	// setInterval return id
	clearInterval(id)
}
