/**
 * Import Dependency
 */
import axios from '../../../interceptor'

/**
 * Declare Variable
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'
const postsUrl = `${baseUrl}/posts`

/**
 * Export
 */
export default {
	getAllPosts() {
		return axios.get(postsUrl)
	}
}
